import React from "react";
import Image from "@/components/Contentful/Image";

const MediumStylePost = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="mb-2">
          <h1 className="subpixel-antialiased text-xl font-bold">
            ‘Women’s history is women’s right’
          </h1>
        </div>
        <div className="text-md antialiased text-gray-500 mb-2">
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
          <div className="text-xs antialiased text-gray-500 mr-5">
            <div className="bg-gray-100 p-2 rounded-full">
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
