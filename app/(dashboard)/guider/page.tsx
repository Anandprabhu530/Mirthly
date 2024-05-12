"use client";

import { ComboboxAcd } from "@/components/ComboboxAcd";
import Navbar from "@/components/Navbar";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface solodata_type {
  jobs: string;
  difficulty_score: string;
  description: string;
  steps: [];
  tasks: [];
}

export default function Home() {
  const [data, setData] = useState({
    recommendations: [],
    specific: "",
    preffered: "",
  });
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handlesubmit = () => {
    setToggle(true);
  };

  return (
    <main className="w-full h-screen">
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:p-6">
        <div className="w-full h-full basis-1/2">
          <div className="w-full pb-6 pt-6 lg:pt-0">
            <Navbar />
          </div>
          <div className="lg:border-2 rounded-xl lg:border-white lg:h-fit flex flex-col w-full">
            <div className="lg:mx-8 lg:py-6 flex justify-center items-center lg:w-11/12 w-full h-fit text-xl font-semibold lg:border-b-[2px] lg:border-[#c4c2c2]">
              Your Carrier Starts Here
            </div>
            <div className="lg:p-8 w-full">
              <ComboboxAcd setData={setData} />
            </div>
          </div>
        </div>
        <div className="border-2 border-white flex basis-1/2 rounded-xl">
          {data.recommendations.length !== 0 ? (
            <div className="p-6 w-full">
              <div className="font-semibold text-xl">Recommended Jobs : </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full pt-6">
                {data.recommendations.map(
                  (solodata: solodata_type, index: number) => {
                    return (
                      <Dialog.Root key={index}>
                        <Dialog.Trigger
                          onClick={handlesubmit}
                          className="border-2 border-white font-semibold cursor-pointer rounded-md h-[100px] flex justify-center items-center relative"
                        >
                          {solodata.jobs}
                          <div className="absolute top-0 right-0 p-2">
                            {solodata.difficulty_score.toLowerCase() ===
                            "hard" ? (
                              <div className="text-red-500 font-semibold">
                                Hard
                              </div>
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
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                          <Dialog.Content className="fixed top-1/2 left-1/2 bg-black -translate-x-1/2 -translate-y-1/2 p-4 lg:p-10 rounded-md w-[80%] overflow-auto shadow-md border-2 border-white">
                            <div>
                              <div className="pb-2 text-xl font-semibold">
                                What is {solodata.jobs}
                              </div>
                              <div>{solodata.description}</div>
                            </div>
                            <div className="pt-4"></div>
                            <div className="pb-2 text-xl font-semibold">
                              Day to day work as a {solodata.jobs}
                            </div>
                            {solodata.tasks &&
                              solodata.tasks.map((day_to_day_task, index) => {
                                return (
                                  <div key={index}>
                                    {index + 1} . {day_to_day_task}
                                  </div>
                                );
                              })}
                            <div className="pt-4">
                              <div className="pb-2 text-xl font-semibold">
                                Steps to become a {solodata.jobs}
                              </div>
                              <div>
                                {solodata.steps.map(
                                  (datasolo: string, index: number) => {
                                    return (
                                      <div key={index}>
                                        {index + 1}. {datasolo}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    );
                  }
                )}
              </div>

              {data.preffered && (
                <div className="pt-6 font-semibold text-xl">
                  Preffered job : {data.preffered}
                </div>
              )}
              {data.specific && (
                <div className="pt-6 font-semibold text-xl">
                  Specific job : {data.specific}
                </div>
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
