import { FileText, Fingerprint, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-blue-50 flex flex-col pt-8 pb-16">
        <div
          onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")}
          dir="rtl"
          className="font-bold text-lg m-4 cursor-pointer"
        >
          {isLoggedIn ? "تم التسجيل" : "تسجيل الدخول"}
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6" dir="rtl">
          {/* Department Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-gray-900">وزارة الداخلية</h1>
            <h2 className="text-xl font-bold text-gray-800 mt-1">
              مديرية تحقيق الأدلة الجنائية
            </h2>
            <h3 className="text-lg font-bold text-gray-700 mt-1">
              قسم طبع الأصابع
            </h3>
          </div>

          {/* Simple intro section */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Fingerprint size={40} className="text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              نظام فحص بصمات الأصابع
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              منظومة متخصصة لمطابقة وتحليل بصمات الأصابع لأغراض التحقيق الجنائي
              والتوثيق العقاري
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow text-center">
              <div className="mb-3 text-blue-700">
                <Fingerprint size={28} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2">فحص مطابقة البصمات</h3>
              <p className="text-gray-600 text-sm">
                فحص وتحليل مطابقة البصمات في المعاملات والمستندات الرسمية
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow text-center">
              <div className="mb-3 text-blue-700">
                <FileText size={28} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2">تقارير فحص البصمات</h3>
              <p className="text-gray-600 text-sm">
                إصدار تقارير فحص البصمات للجهات القضائية والدوائر الحكومية
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow text-center">
              <div className="mb-3 text-blue-700">
                <Search size={28} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2">متابعة معاملات الفحص</h3>
              <p className="text-gray-600 text-sm">
                متابعة حالة المعاملات الواردة والتقارير الصادرة من قسم طبع
                الأصابع
              </p>
            </div>
          </div>

          {/* Form Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10 flex flex-col ">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
              استمارات الفحص
            </h3>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white p-3  rounded-lg flex self-center items-center justify-center"
              onClick={() => navigate("/allReports")}
            >
              <Fingerprint size={20} className="ml-2" />
              <span>استمارة فحص مطابقة البصمات</span>
            </button>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="mt-auto text-center py-6">
          <p className="text-gray-600 text-sm">
            قسم طبع الأصابع - مديرية تحقيق الأدلة الجنائية
          </p>
          <p className="text-gray-500 text-xs mt-1">بغداد - ٢٠٢٥</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
