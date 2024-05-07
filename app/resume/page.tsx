"use client";
import { Form_Builder } from "@/components/Form_Builder";
import { useState } from "react";

const Resume = () => {
  const [data, setData] = useState({
    Fullname: "",
    Email: "",
    Number: "",
    Location: "",
    Education: "",
    Degree: "",
    Education_From: "",
    Education_To: "",
    Experience_Description: "",
    Experience_From: "",
    Experience_To: "",
    Experience_Company: "",
    project1: "",
    Project1_Description: "",
    project2: " ",
    Project2_Description: "",
  });
  return (
    <main>
      <div className="h-screen">
        <div className="flex h-full">
          <div className="basis-1/2">
            <div className="w-full flex justify-center items-center h-full">
              <Form_Builder data={data} setData={setData} />
            </div>
          </div>
          <div className="basis-1/2 p-8">
            <div className=" border-2 border-white h-full rounded-xl p-4">
              <div className="p-2 font-bold text-2xl">
                {data.Fullname.length === 0 ? (
                  <div>Your Name</div>
                ) : (
                  <div>{data.Fullname}</div>
                )}
              </div>
              <div className="flex gap-4 pl-2">
                {data.Email.length === 0 ? (
                  <div>Your Email Id</div>
                ) : (
                  <div>{data.Email}</div>
                )}
                <div>|</div>
                {data.Number.length === 0 ? (
                  <div>Your Mobile Number</div>
                ) : (
                  <div>{data.Number}</div>
                )}
                <div>|</div>
                {data.Location.length !== 0 ? (
                  <div>
                    <div className="flex gap-4">
                      <div>{data.Location}</div>
                    </div>
                  </div>
                ) : (
                  <div>Your Location</div>
                )}
              </div>
              <div className="border-b border-white pb-2 mx-2"></div>
              {data.Education.length != 0 ? (
                <div>
                  <div className="p-2 text-2xl font-semibold">Education</div>
                  <div className="px-2">
                    <div className="flex w-full justify-between">
                      <div className="font-semibold text-lg">
                        {data.Education}
                      </div>
                      <div>
                        {data.Education_From} - {data.Education_To}
                      </div>
                    </div>
                    <div className="font-semibold text-lg">{data.Degree}</div>
                  </div>
                </div>
              ) : (
                <div className="p-2 text-2xl font-semibold pb-20">
                  Education
                </div>
              )}
              <div className="border-b border-white pb-2 mx-2"></div>
              {data.Experience_Company.length != 0 ? (
                <div>
                  <div className="p-2 text-2xl font-semibold">Experience</div>
                  <div className="px-2">
                    <div className="flex w-full justify-between">
                      <div className="font-semibold text-lg">
                        {data.Experience_Company}
                      </div>
                      <div>
                        {data.Experience_From} - {data.Experience_To}
                      </div>
                    </div>
                    <div>{data.Experience_Description}</div>
                  </div>
                </div>
              ) : (
                <div className="p-2 text-2xl font-semibold pb-20">
                  Experience (Optional)
                </div>
              )}
              <div className="border-b border-white pb-2 mx-2"></div>
              {data.project1.length === 0 ? (
                <div>
                  <div className="p-2 text-2xl font-semibold pb-20">
                    Projects
                    <div className="text-xl pt-4 font-semibold pb-20">
                      Poject 1
                      <div className="font-normal pt-2 text-xl">
                        Project Description
                      </div>
                    </div>
                    <div className="text-xl font-semibold pb-20">
                      Project 2
                      <div className="font-normal pt-2 text-xl">
                        Project Description
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <div className="p-2 text-2xl font-semibold">Projects</div>
                    <div className="pl-2">
                      <div className="text-lg font-medium pb-1">
                        {data.project1}
                      </div>
                      <div>{data.Project1_Description}</div>
                    </div>
                  </div>
                  <div>
                    <div className="pl-2 pt-4">
                      <div className="text-lg font-medium pb-1">
                        {data.project2}
                      </div>
                      <div>{data.Project2_Description}</div>
                    </div>
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
