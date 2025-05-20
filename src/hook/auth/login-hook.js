import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import notify from "../useNotification";

const LoginHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("من فضلك أدخل اسم المستخدم", "error");
      return false;
    }
    if (password === "") {
      notify("من فضلك أدخل كلمة السر", "error");
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    const isValid = validationValues();
    if (!isValid) return;

    setLoginClicked(true);
    setLoading(true);
    await dispatch(loginUser({ username: name, password: password }));
    setLoading(false);
  };

  const res = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  console.log(res)

  useEffect(() => {
  if (!loading && loginClicked) {
    if (res && res.error) {
      // في حالة وجود خطأ في الـ state
      if (res.error?.data?.error === "No active account found with the given credentials") {
        notify("البريد الألكتروني او كلمة المرور غير صحيحة", "error");
      } else {
        notify("حدث خطأ", "error");
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return;
    }

    if (user && user.data?.access_token) {
      // تسجيل الدخول ناجح فقط إذا كان هناك توكن
      localStorage.setItem("token", user.data?.access_token);
      localStorage.setItem("user", JSON.stringify(user.data));
      notify("تم تسجيل الدخول بنجاح", "success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (user && user.data && user.data.error) {
      // هنا إذا كان هناك خطأ ضمن بيانات المستخدم
      notify(user.data.error, "error");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } else {
      // أي حالة أخرى
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }
}, [loading, user, loginClicked]);



  return [name, password, loading, onChangeName, onChangePassword, onSubmit];
};

export default LoginHook;
