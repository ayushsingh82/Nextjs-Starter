'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Research {
  id: number;
  name: string;
  categories: string[];
  videoType: string;
  price: number;
  thumbnail: string;
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('all');

  // Sample data - replace with actual data from your backend
  const researches: Research[] = [
    {
      id: 1,
      name: "Quantum Computing Research",
      categories: ["Physics", "Computer Science"],
      videoType: "3D Visualization",
      price: 50,
      thumbnail: "/thumbnails/quantum.jpg" // Replace with actual thumbnail path
    },
    {
      id: 2,
      name: "Climate Change Analysis",
      categories: ["Environmental Science"],
      videoType: "Data Visualization",
      price: 30,
      thumbnail: "/thumbnails/climate.jpg" // Replace with actual thumbnail path
    },
    // Add more sample data as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3B82F6] mb-4">Explore Research</h1>
          <p className="text-white/80 text-lg">Discover and purchase research papers with AI-powered visualizations</p>
        </div>

        {/* Search and Sort Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-[#3B82F6] rounded-lg  "
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-[#3B82F6] rounded-lg "
            >
              <option value="all">All Categories</option>
              <option value="physics">Physics</option>
              <option value="computer-science">Computer Science</option>
              <option value="environmental">Environmental Science</option>
            </select>
          </div>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researches.map((research) => (
            <div
              key={research.id}
              className="bg-gray-900/50 border-2 border-[#3B82F6] rounded-xl p-6 space-y-4"
            >
              {/* Video Thumbnail */}
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={research.thumbnail}
                  alt={research.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">{research.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {research.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>{research.videoType}</span>
              </div>

              <button
                className="w-full px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg font-medium transition-colors"
              >
                Buy for {research.price} $FIL
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}