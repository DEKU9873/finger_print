import React, { useState } from "react";
import { X } from "lucide-react";
import notify from "../hook/useNotification";
import baseURL from "../Api/baseURL";
import { Toaster } from "react-hot-toast";
import ImagesHook from "../hook/images-hook";

const ImageModal = ({ onClose, id }) => {
  const [images] = ImagesHook(id);




  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-2xl mx-4 transform transition-all duration-300 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            صور الجريمة
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        

        {/* Images */}
        {images && images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={`http://192.168.100.201:4000${image?.image}`}
                  alt={`صورة الحادث ${index + 1}`}
                  className="w-full h-[200px] object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-300 text-center mb-6">
            لا توجد صور متاحة حالياً.
          </p>
        )}

      
      </div>
      <Toaster />
    </div>
  );
};

export default ImageModal;
