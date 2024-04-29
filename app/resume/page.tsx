"use client";

import { ComboboxRes } from "@/components/ComboboxRes";
import { InputGit } from "@/components/InputGit";
import { Test } from "@/components/Text";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const Resume = () => {
  const [data, setData] = useState({
    Fullname: "John Doe",
    Email: "Johndoe@gmail.com",
    Number: "+96 54546-56485",
    Location: "Sunnyvile",
    Education: "Almod University",
    Education_From: "2019",
    Education_To: "2023",
    Experience_Description:
      "lorem ipsum eojsfo oewroiqpc wihisccbjk zejkfh poweip2qe  of eoiso rgojoesd ",
    Experience_From: "2085",
    Experience_To: "2086",
    Experience_Company: "Almod Company",
  });

  const [gitName, setgitName] = useState(null);
  const [gitData, setgitData] = useState();

  const handlesubmit = async () => {
    const res = await fetch(
      `https://api.github.com/users/${gitName}/repos`
    ).then((data) => data.json());
    setgitData(res);
  };

  const handlechange = (event) => {
    setgitName(event?.target.value);
  };

  return (
    <main>
      <div className="h-screen">
        <div className="flex border-2 border-black h-full">
          <div className="border-2 border-red-500 basis-1/2">
            <div className="w-full flex justify-center items-center h-full">
              <Test />
            </div>
          </div>
          <div className="border-2 border-red-500 basis-1/2 p-8">
            <div className=" border-2 border-black h-full">
              <div className="p-2 font-bold text-2xl">{data.Fullname}</div>
              <div className="flex gap-4 pl-2">
                <div>Email: {data.Email}</div>
                <div>|</div>
                <div>{data.Number}</div>
                {data.Location.length != 0 && (
                  <div className="flex gap-4">
                    <div>|</div>
                    <div>{data.Location}</div>
                  </div>
                )}
              </div>
              <div className="border-b border-black pb-2"></div>
              <div className="p-2 text-2xl font-semibold">Education</div>
              <div className="px-2 flex w-full justify-between">
                <div className="font-semibold">{data.Education}</div>
                <div>
                  {data.Education_From} - {data.Education_To}
                </div>
              </div>
              {data.Experience_Company.length != 0 && (
                <div>
                  <div className="border-b border-black pb-2"></div>
                  <div className="p-2 text-2xl font-semibold">Experience</div>
                  <div className="px-2">
                    <div className="flex w-full justify-between">
                      <div className="font-semibold">
                        {data.Experience_Company}
                      </div>
                      <div>
                        {data.Experience_From} - {data.Experience_To}
                      </div>
                    </div>
                    <div>{data.Experience_Description}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
