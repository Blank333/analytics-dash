import React from "react";

export default function Card({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="p-4 bg-white rounded-20 flex flex-col gap-8 w-full shadow border-custom">
      <h4 className="text-black-custom-50 font-semibold">{title}</h4>
      {children}
    </div>
  );
}
