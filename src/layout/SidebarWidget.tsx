import React from "react";
import Image from "next/image";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <div className="flex items-center justify-center">
        <Image 
          src="/logo.png" 
          alt="logo" 
          width={40}
          height={40}
          className="h-10 w-10" 
        />
      </div>
    </div>
  );
}
