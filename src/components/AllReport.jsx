import React from "react";
import Heading from "./Uitily/Heading";
import ReportCard from "./ReportCard";
import GetAllReports from "../hook/get-all-reports";
import Loader from "./Uitily/Loader";

const AllReport = () => {

  const [data, isLoading] = GetAllReports();
  return (
     <div className="flex-1 p-4 overflow-y-auto">
        <Heading title="تقارير بصمات الاصابع" subtitle="قائمة التقارير" />
        {isLoading ? (
          <Loader />
        ) : (
          <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data &&
              data?.map((report) => (
                <ReportCard
                  key={report.uuid}
                  report={report}
                  
                />
              ))}
          </div>
        )}
      </div>
  );
};

export default AllReport;
