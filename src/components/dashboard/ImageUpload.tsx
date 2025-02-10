"use client";
import { useState } from "react";

const ImageUpload = () => {
  const [uploadImgs, setUploadImgs] = useState<string[]>([]);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadImgs((prevImgs) => [...prevImgs, ...newImages]);
    }
  };

  const removeHandler = () => {
    setUploadImgs([]);
    const fileInput = document.getElementById("upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };


  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-custom-gray pb-6">
          Upload Images
        </h2>

        <div className="relative">
          <input
            type="file"
            id="upload"
            hidden
            multiple
            onChange={(e) => handlerChange(e)}
          />
          <label
            htmlFor="upload"
            className="border border-black p-3 border-dotted rounded-lg flex justify-center"
          >
            <span className="text-lg">Upload</span>
          </label>

          {uploadImgs.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {uploadImgs.map((item, i) => (
                <div key={i} className="relative group">
                  <img
                    className="w-full h-32 object-cover rounded-md"
                    src={item}
                    alt="Uploaded image"
                  />
                </div>
              ))}
            </div>
          )}
          {uploadImgs.length > 0 && (
            <button
              onClick={removeHandler}
              className="bg-red-500 text-white mt-6 w-full py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
            >
              Remove All Images
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
