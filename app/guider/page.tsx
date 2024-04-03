"use client";

import { ComboboxAcd } from "@/components/ComboboxAcd";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <main className="p-10 w-full border-2 border-white h-screen">
      <div className="flex h-full gap-6">
        <div className="border-2 rounded-xl border-red-500 flex flex-col basis-1/2">
          <div className="mx-8 py-6 w-11/12 h-fit text-xl font-semibold  border-b-[2px] border-[#c4c2c2]">
            Your Carrier Starts Here
          </div>
          {/* <div className="px-8 pt-4 pb-2">Work Environment</div> */}
          <div className="p-8">
            <ComboboxAcd setData={setData} setLoading={setLoading} />
          </div>
        </div>
        <div></div>
        <div className="border-2 border-red-500 flex basis-1/2 rounded-xl">
          {data ? (
            <div className="p-6 w-full">
              <div>Recommended Jobs : </div>
              <div className="grid grid-cols-2 gap-6 w-full pt-6">
                {data.recommendations.map((solodata, index) => {
                  return (
                    <div
                      key={index}
                      className="border-2 border-black rounded-md h-[100px] flex justify-center items-center relative"
                    >
                      {solodata.jobs}
                      <div className="absolute top-0 right-0 p-2">
                        {solodata.difficulty_score.toLowerCase() === "hard" ? (
                          <div className="text-red-500 font-semibold">Hard</div>
                        ) : solodata.difficulty_score.toLowerCase() ===
                          "medium" ? (
                          <div className="text-yellow-400 font-semibold">
                            Medium
                          </div>
                        ) : (
                          <div className="text-green-400 font-semibold">
                            Easy
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {data.preffered && (
                <div className="pt-6">Preffered job : {data.preffered}</div>
              )}
              {data.specific && (
                <div className="pt-6">Specific job : {data.specific}</div>
              )}
            </div>
          ) : loading ? (
            <div className="p-8 text-xl font-medium">Loading...</div>
          ) : (
            <div className="p-8 text-xl font-medium">
              Fill the form and get a step closer to choosing your carrer
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
