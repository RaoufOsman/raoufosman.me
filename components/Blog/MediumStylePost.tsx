import React from "react";
import Image from "@/components/Contentful/Image";

const MediumStylePost = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row mb-2">
          <img
            className="inline-block h-6 w-6 rounded-full mr-1"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex mt-1">
            <span className="text-black text-sm font-bold mr-1">
              Medium Staff
            </span>
            <span className="text-gray-500 text-sm mr-1">in</span>
            <span className="text-black text-sm font-bold">Medium Staff</span>
          </div>
        </div>
        <div className="mb-2">
          <h1 className="subpixel-antialiased text-xl font-bold">
            ‘Women’s history is women’s right’
          </h1>
        </div>
        <div className="text-md antialiased text-gray-500 mb-3">
          A tribute to overlooked innovators, good troublemakers, and remarkable
          women of the past, present, and future
        </div>
        <div className="flex">
          <div className="text-sm antialiased text-gray-500 mr-5 mt-1">
            Mar 8
          </div>
          <div className="text-sm antialiased text-gray-500 mr-5 mt-1">
            4 min read
          </div>
          <div className="bg-gray-100 p-2 rounded-full">
            <div className="text-xs antialiased text-gray-700">
              Womens History Month
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          width="300"
          height="300"
          alt={`Cover Image for`}
          src={
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*q1bV1fG_FQLPbmv4svz2NA.png"
          }
        />
      </div>
    </div>
  );
};

export default MediumStylePost;
