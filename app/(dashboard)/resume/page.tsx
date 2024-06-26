"use client";
import { updateuserdata } from "@/app/actions";
import { Form_Builder } from "@/components/Form_Builder";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import generatePDF, { Resolution, Options } from "react-to-pdf";

const options: Options = {
  method: "open",
  resolution: Resolution.HIGH,
  page: {
    margin: 5,
  },
  canvas: {
    qualityRatio: 1,
  },
};

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
    Experience_Role: "",
    Experience_From: "",
    Experience_To: "",
    Experience_Company: "",
    project1: "",
    Project1_Description: "",
    project2: "",
    Project2_Description: "",
  });
  const [submitted, setsubmitted] = useState(false);

  if (submitted) {
    updateuserdata(data);
    setsubmitted(false);
    //download pdf
    const downloadarea = () => document.getElementById("pdf_download");
    generatePDF(downloadarea, options);
  }

  return (
    <main>
      <div>
        <div className="flex flex-col lg:flex-row lg:h-screen w-full">
          <div className="lg:basis-1/2 h-fit lg:overflow-hidden w-full pt-6">
            <Navbar />
            <div className="w-full flex p-0 lg:hidden text-xl font-semibold justify-center items-center pt-6 lg:pt-0">
              Build Your Resume
            </div>
            <div className="w-full flex justify-center h-full pt-4">
              <Form_Builder
                data={data}
                setData={setData}
                setsubmitted={setsubmitted}
              />
            </div>
          </div>

          <div
            id="pdf_download"
            className="lg:basis-1/2 lg:p-8 p-4 bg-white text-black lg:overflow-auto"
          >
            <div className="border-2 border-black h-full p-2 lg:p-4">
              <div className="p-2 font-bold lg:text-2xl">
                {data.Fullname.length === 0 ? (
                  <div>Your Name</div>
                ) : (
                  <div>{data.Fullname}</div>
                )}
              </div>
              <div className="flex gap-2 lg:gap-4 pl-2">
                {data.Email.length === 0 ? (
                  <div>Your Email Id</div>
                ) : (
                  <div className="lg:text-lg text-xs">{data.Email}</div>
                )}
                <div>|</div>
                {data.Number.length === 0 ? (
                  <div>Your Mobile Number</div>
                ) : (
                  <div className="lg:text-lg text-xs">{data.Number}</div>
                )}
                <div>|</div>
                {data.Location.length !== 0 ? (
                  <div>
                    <div className="flex gap-4">
                      <div className="lg:text-lg text-xs">{data.Location}</div>
                    </div>
                  </div>
                ) : (
                  <div>Your Location</div>
                )}
              </div>
              <div className="border-b border-black pb-2 mx-2 lg:text-md text-xs"></div>
              {data.Education.length != 0 ? (
                <div>
                  <div className="p-2 lg:text-2xl font-semibold lg:text-md text-md">
                    Education
                  </div>
                  <div className="px-2 lg:text-md text-xs">
                    <div className="flex w-full justify-between">
                      <div className="font-semibold lg:text-lg text-xs">
                        {data.Education}
                      </div>
                      <div className="lg:text-lg text-xs">
                        {data.Education_From} - {data.Education_To}
                      </div>
                    </div>
                    <div className="font-semibold lg:text-lg text-xs">
                      {data.Degree}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-2 text-2xl font-semibold pb-20">
                  Education
                </div>
              )}
              <div className="border-b border-black pb-2 mx-2"></div>
              {data.Experience_Company.length != 0 && (
                <div>
                  <div className="p-2 lg:text-2xl font-semibold text-md">
                    Experience
                  </div>
                  <div className="px-2">
                    <div className="flex w-full justify-between">
                      <div className="font-semibold lg:text-lg text-xs">
                        {data.Experience_Company}
                      </div>
                      <div className="lg:text-lg text-xs">
                        {data.Experience_From} - {data.Experience_To}
                      </div>
                    </div>
                    <div className="lg:text-lg text-xs font-semibold">
                      {data.Experience_Role}
                    </div>
                    <div className="lg:text-lg text-xs">
                      {data.Experience_Description}
                    </div>
                  </div>
                  <div className="border-b border-black pb-2 mx-2"></div>
                </div>
              )}

              {data.project1.length === 0 ? (
                <div>
                  <div className="p-2 lg:text-2xl text-xs font-semibold pb-20">
                    Projects
                    <div className="lg:text-xl text-xs pt-4 font-semibold pb-20">
                      Poject 1
                      <div className="font-normal pt-2 lg:text-xl text-xs">
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
                    <div className="p-2 font-semibold lg:text-2xl">
                      Projects
                    </div>
                    <div className="pl-2">
                      <div className="lg:text-lg text-xs font-semibold pb-1">
                        {data.project1}
                      </div>
                      <div className="lg:text-lg text-xs">
                        {data.Project1_Description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pl-2 pt-4">
                      <div className="lg:text-lg text-xs font-semibold pb-1">
                        {data.project2}
                      </div>
                      <div className="lg:text-lg text-xs">
                        {data.Project2_Description}
                      </div>
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
