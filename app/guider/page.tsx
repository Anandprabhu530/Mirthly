"use client";

import { analyze_data } from "@/utils/ai";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [selectedValue, setSelctedValue] = useState("");
  const [data, setData] = useState();

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelctedValue(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const res = await analyze_data(selectedValue);
    setData(res);
  };

  return (
    <main className="p-10 w-full ">
      <div className="flex">
        <div className="basis-2/3">
          <div className="flex justify-center text-3xl ">
            <h1>Your Carrer Guidance Here</h1>d
          </div>
          <div className="p-10 flex h-full justify-center border-2 border-white">
            <form className="flex flex-col gap-4 w-full">
              <textarea
                className="w-full h-[300px] bg-transparent outline-none resize-none border-2 border-white rounded-lg p-4  text-xl"
                onChange={handleChange}
              />
              <button
                className="px-4 py-2 bg-[#0170f1] rounded-xl"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {data && (
          <div className="basis-1/3">
            <div className="flex flex-col items-center">
              Recommendations :
              {data.recommendations.map((solodata, index) => {
                return (
                  <div key={solodata}>
                    {index + 1}. {solodata}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
