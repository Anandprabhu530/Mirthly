"use client";

import { ComboboxAcd } from "@/components/ComboboxAcd";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface solodata_type {
  jobs: string;
  difficulty_score: string;
  description: string;
  steps: [];
  tasks: string;
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
    <main className="p-10 w-full h-screen">
      <div className="flex h-full gap-6">
        <div className="border-2 rounded-xl border-white h-full flex flex-col basis-1/2">
          <div className="mx-8 py-6 w-11/12 h-fit text-xl font-semibold  border-b-[2px] border-[#c4c2c2]">
            Your Carrier Starts Here
          </div>
          <div className="p-8">
            <ComboboxAcd setData={setData} />
          </div>
        </div>
        <div className="border-2 border-white  flex basis-1/2 rounded-xl">
          {data.recommendations.length !== 0 ? (
            <div className="p-6 w-full">
              <div className="font-semibold text-xl">Recommended Jobs : </div>
              <div className="grid grid-cols-2 gap-6 w-full pt-6">
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
                          <Dialog.Content className="fixed top-1/2 left-1/2 bg-black -translate-x-1/2 -translate-y-1/2 p-10 rounded-md shadow-md border-2 border-white">
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
                            <div>{solodata.tasks}</div>
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
