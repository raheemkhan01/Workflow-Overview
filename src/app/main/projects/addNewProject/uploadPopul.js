import React, { useState } from "react";

import uploadImg from "../../../../../public/assets/documentUpload.svg";
import imageIcon from "../../../../../public/assets/imgeUpload.png";
import xIcon from "../../../../../public/assets/xIcon.svg";

import driversIcon from "../../../../../public/assets/driversIcon.svg";
import cloudUpload from "../../../../../public/assets/CloudUpload.svg";
import Image from "next/image";

export const UploadPopul = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = React.createRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white p-5 w-96 h-[584px] border flex flex-col items-center gap-12 ">
      <h2 className=" text-slate-600 text-xl">Upload Document</h2>

      <div
        className="flex flex-col gap-4 drop-area w-[85%] justify-center items-center h-[200px] border-2 border-dashed"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Image src="/assets/documentUpload.svg" className="w-16 " />
        <p className="text-sm text-slate-400">Drag and drop documents here</p>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </div>
      <button
        className=" px-1 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm w-16 h-8 font-sans text-center text-white text-m font-normal not-italic leading-3 flex-row-reverse"
        onClick={() => fileInputRef.current.click()}
      >
        Browse
      </button>
      {selectedFile && (
        <div>
          <h4>Selected File:</h4>
          <p>{selectedFile.name}</p>
          <p>Size: {selectedFile.size} bytes</p>
          <p>Type: {selectedFile.type}</p>
        </div>
      )}
    </div>
  );
};

// uploadCompletd Card
import Upload from "../../../../../public/assets/upload.svg";
export const UploadCompleted = () => {
  return (
    <div className="bg-white p-5 w-96 h-[350px] border flex flex-col items-center gap-12 justify-center">
      <div className="flex flex-col gap-y-7  items-center justify-center drop-area w-[85%] h-[200px] pb-[5px]  border-2 border-dashed">
        <div className="flex flex-col gap-2 drop-area w-[100%] justify-center items-center ">
          <Image src={Upload} />
          <h2 className="font-bold ">File Uploaded</h2>
        </div>
        <div className="rounded-3xl w-[250px] bg-emerald-400 h-[5px] pb-[5px]"></div>
      </div>
    </div>
  );
};

// uploadePopup other ui design

import {
  Dropzone,
  FileMosaic,
  FileInputButton,
  FileCard,
} from "@dropzone-ui/react";

export const UploadPopul2 = () => {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <div className="bg-white p-5 w-96  border flex flex-col items-center gap-12 ">
      <h2 className=" text-slate-600 text-xl">Upload Document</h2>
      <div className="flex justify-between w-[85%]">
        <Image src={imageIcon} alt="Uploaded Document Type" />
        <p>Image1.pdf</p>
        <a href="">
          <Image src={xIcon} />
        </a>
      </div>
      <Dropzone
        minHeight="200px"
        header={false}
        footer={false}
        onChange={updateFiles}
        value={files}
      >
        {files.length === 0 ? (
          <div className="flex flex-col  justify-center items-center">
            <Image src={uploadImg} className="w-16 " alt="Drag and Drop" />
            <p className="text-sm text-slate-400">
              Drag and drop documents here
            </p>
          </div>
        ) : (
          files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))
        )}
      </Dropzone>

      <FileInputButton
        onChange={updateFiles}
        value={files}
        className="px-1 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm w-16 h-8 font-sans text-center text-white text-m font-normal not-italic leading-3 flex-row-reverse"
      />

      {files.map((file) => (
        <FileCard key={file.id} {...file} onDelete={removeFile} info />
      ))}
      <div className="flex gap-6">
        <Image src={driversIcon} alt="Drivers Icon" />
        <Image src={cloudUpload} alt="upload images" />
      </div>
    </div>
  );
};

//   ReactDOM.render(<UploadPopul2 />, document.querySelector("#app"));
