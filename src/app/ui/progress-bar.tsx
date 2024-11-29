"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ProgressBar({
  progress,
  danger,
}: {
  progress: number;
  danger?: boolean;
}) {
  // For animation
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <>
      <div
        className={clsx(
          { "bg-red-200": danger },
          { "bg-green-200": !danger },
          "rounded-lg mb-1 h-3"
        )}
      >
        {/* Progress color */}
        {danger ? (
          <div
            className="h-3 rounded-lg transition-all duration-500 ease-out"
            style={{
              background:
                "linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)",
              width: currentProgress + "%",
            }}
          />
        ) : (
          <div
            className="h-3 rounded-lg transition-all duration-500 ease-out"
            style={{
              background:
                " linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)",

              width: currentProgress + "%",
            }}
          />
        )}
      </div>
    </>
  );
}
