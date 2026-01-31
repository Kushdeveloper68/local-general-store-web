import React from 'react'

function SkeletonProductCard({ isOfferCard = false }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
        {isOfferCard && (
          <div className="absolute top-3 left-3 bg-slate-300 dark:bg-slate-700 px-2 py-1 rounded font-black text-sm w-16 h-6"></div>
        )}
      </div>

      {/* Content Skeleton */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title Skeleton */}
        <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>

        {/* Subtitle Skeleton */}
        <div className="h-3 bg-slate-100 dark:bg-slate-800/50 rounded w-1/2"></div>

        {/* Price Section Skeleton */}
        {isOfferCard ? (
          <div className="flex items-center gap-2 mt-2">
            <div className="h-6 w-10 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-6 w-14 bg-slate-200 dark:bg-slate-800 rounded"></div>
          </div>
        ) : (
          <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded mt-2"></div>
        )}

        {/* Button Skeleton */}
        <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg mt-2"></div>
      </div>
    </div>
  )
}

export default SkeletonProductCard
