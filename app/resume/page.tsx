"use client";

import { Button } from "@/components/ui/button";
import { analyze_data } from "@/utils/ai";
import { useState } from "react";

const Resume = () => {
  const [data, setData] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();
    const res = await analyze_data("I love maths but I don't like coding");
    console.log(res);
  };

  return (
    <main>
      <div className="border-2 border-black p-8  ">
        <div className="text-4xl font-semibold">Get your Resume Reviewed</div>
        <div className="pt-8 flex flex-col gap-2">
          Choose your Resume:
          <input type="file" />
          <Button onClick={handlesubmit}>Click Me</Button>
        </div>
        {data.length != 0 && (
          <div className="pt-8">
            <div>You Resume needs to be developed</div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Resume;
