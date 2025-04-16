import React from "react";

interface ExampleFolderProps {
  folder: string;
  name: string;
  desc: string;
  type: string;
  href: string;
}

export default function ExampleFolder({
  folder,
  name,
  desc,
  type,
  href,
}: ExampleFolderProps) {
  const lines = desc.split("\n");
  return (
    <div className="w-full relative shadow-md bg-white">
      <div className="bg-[#5667B6] rounded-t-lg h-7 font-bold -z-10 absolute top-0 -translate-y-full left-4 py-1 pl-4 pr-3 text-white text-sm">
        {folder}
        <div className="absolute -top-1 left-14 right-0 -z-20 h-full">
          <div className="bg-[#5667B6] h-full w-16 rounded-l-full rotate-45 transform origin-top-left"></div>
        </div>
      </div>
      <div className="bg-[#647AE1] rounded-t-lg py-2.5 text-white text-xl font-bold text-center">
        {name}
      </div>

      <div className="p-6 bg-[#F4F4F4] text-base rounded-b-lg text-gray-800">
        {lines.map((line, index) => (
          <div key={index} className="mb-2">
            {line}
          </div>
        ))}
      </div>

      {type === "link" && (
        <div className="p-4 bg-gray-100 flex justify-center">
          <a
            href={href}
            className="bg-[#202F76] text-lg text-white py-2 px-4 rounded font-medium w-full text-center"
          >
            제품 사이트 →
          </a>
        </div>
      )}
    </div>
  );
}
