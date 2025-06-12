'use client';

import React from 'react';
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [researchName, setResearchName] = useState('');
  const [categories, setCategories] = useState<string[]>(['']);
  
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const addCategory = () => {
    setCategories([...categories, '']);
  };

  const updateCategory = (index: number, value: string) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const removeCategory = (index: number) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#60A5FA] mb-4">Upload Your Research</h1>
          <p className="text-white/80 text-lg">Share your research papers and get AI-powered visualizations</p>
        </div>
        
        <form className="space-y-6 p-8 border-2 border-[#60A5FA] rounded-xl bg-gray-900/50">
          <div>
            <label htmlFor="researchName" className="block text-sm font-medium text-white mb-2">
              Research Name
            </label>
            <input
              type="text"
              id="researchName"
              value={researchName}
              onChange={(e) => setResearchName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
              placeholder="Enter research name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Categories
            </label>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => updateCategory(index, e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
                    placeholder="Enter category"
                  />
                  {categories.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCategory(index)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addCategory}
                className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6] hover:bg-[#3B82F6] rounded-lg"
              >
                <span>+</span> Add Category
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Upload Files
            </label>
            <div className="w-full min-h-48 border-2 border-dashed border-[#60A5FA] bg-black rounded-lg">
              <FileUpload onChange={handleFileUpload} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#3B82F6] hover:bg-[#3B82F6] rounded-lg font-medium"
          >
            Upload Research
          </button>
        </form>
      </div>
    </div>
  );
}