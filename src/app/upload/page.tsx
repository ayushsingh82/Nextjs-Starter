'use client';

import React from 'react';
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#60A5FA] mb-4">Upload Your Research</h1>
          <p className="text-white/80 text-lg">Share your research papers and get AI-powered visualizations</p>
        </div>
        <div className="w-full min-h-96 border-2 border-dashed border-[#60A5FA] bg-black rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}