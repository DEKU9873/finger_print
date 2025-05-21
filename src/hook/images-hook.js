import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../Redux/reportsSlice";

const ImagesHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImage(id));
  }, [dispatch, id]);

  const { image } = useSelector((state) => state.reports);


  return [image];
};

export default ImagesHook;
