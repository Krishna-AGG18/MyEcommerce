import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
    <div className="animate-pulse p-6 w-full mx-auto space-y-8 text-white bg-black">
      {/* Title & Category */}
      <div>
        <div className="h-6 bg-gray-700 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-800 rounded w-1/4"></div>
      </div>

      {/* Image & Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <div className="w-full h-72 bg-gray-800 rounded-xl mb-4"></div>
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="w-20 h-20 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-6 bg-gray-800 rounded w-1/3"></div>
          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
          <div className="flex gap-2">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-gray-700 h-6 w-16 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="h-3 bg-gray-800 rounded w-full"></div>
            ))}
          </div>
          <div className="h-10 bg-gray-700 rounded w-40 mt-4"></div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 p-6 rounded-xl border border-gray-700 space-y-4">
        <div className="h-6 bg-gray-700 rounded w-1/3"></div>
        {[1, 2].map((_, idx) => (
          <div key={idx} className="space-y-2">
            <div className="h-4 bg-gray-800 rounded w-1/5"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-800 rounded w-1/4"></div>
          </div>
        ))}
      </div>

      {/* Policies & Metadata */}
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((_, idx) => (
          <div key={idx} className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 p-4 rounded-lg border border-gray-700 space-y-2">
            <div className="h-5 bg-gray-700 w-1/3 rounded"></div>
            <div className="h-3 bg-gray-800 w-full rounded"></div>
            <div className="h-3 bg-gray-800 w-3/4 rounded"></div>
            {idx === 1 && <div className="h-28 w-28 bg-gray-700 rounded"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
