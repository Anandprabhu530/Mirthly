"use client";

import { ComboboxRes } from "@/components/ComboboxRes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Resume = () => {
  const [data, setData] = useState("");

  const handlesubmit = () => {
    console.log("first");
  };

  return (
    <main>
      <div>
        <div className="flex border-2 border-black">
          <div className="border-2 border-red-500 basis-1/2 p-8">
            <div className="pb-8">Build your resume</div>
            <ComboboxRes />
          </div>
          <div className="border-2 border-red-500 basis-1/2">world</div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
