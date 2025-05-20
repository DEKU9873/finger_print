import React from "react";
import logo from "../assets/logo3.jpg";
import { useParams } from "react-router-dom";
import GetOneReport from "../hook/get-one-report";
import GetCommitteeMember from "../hook/get-committee-member";

const FingerPrintReport = () => {
  const { id } = useParams();

  const [singleReport, isLoading] = GetOneReport(id);
  const [committeeMember] = GetCommitteeMember(id);

  return (
    <div
      dir="rtl"
      className="w-[210mm] h-auto bg-white p-4 mx-auto font-[Cairo] text-base relative mt-4 leading-loose"
    >
      {/* Header */}
      <div className="flex justify-between">
        <div className="text-center font-bold text-lg mb-4">
          <div>وزارة الداخلية</div>
          <div>مديرية تحقيق الأدلة الجنائية</div>
          <div>قسم بصمات الأصابع</div>
        </div>
        <img src={logo} className="w-22 h-22" />
      </div>

      {/* Details */}
      <div className="mt-6">
        <div className="mb-2">
          <span className="font-bold">بغداد في:</span>{" "}
          <span>{singleReport?.reportDate}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">رقم القضية:</span>{" "}
          <span>{singleReport?.caseNumber}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-row gap-1 mt-6">
        <div className="font-bold underline">جهة الطلب:</div>
        <div className="text-justify">{singleReport?.requestParty}</div>
      </div>

      <div className="mt-4">
        <div className="font-bold mb-2 underline">المستندات الواردة للفحص:</div>
        <div>{singleReport?.documentOutDetails}</div>
      </div>

      <div className="mt-4">
        <div className="font-bold mb-2 underline">المعلومات المطلوبة:</div>
        <div className="text-justify">{singleReport?.requestedInformation}</div>
      </div>

      <div className="mt-4">
        <div className="font-bold mb-2 underline">نتيجة الفحص:</div>
        <div className="text-justify">{singleReport?.conclusion} </div>
      </div>

      <div className="text-center mt-6 font-semibold">
        وصدر الرأي باتفاق الخبراء.
      </div>

      {/* Signatures */}
      <div className="text-center mt-8 pt-4">
        <div className="grid grid-cols-3 gap-4 text-center mt-4 text-sm">
          {committeeMember?.map((member) => (
            <div>
              <div className="font-bold">{member?.name}</div>
              <div>{member?.rank}</div>
              <div className="font-bold">{member?.position}</div>
              <div className="text-xs mt-1">خبير بصمات الأصابع القضائي</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FingerPrintReport;
