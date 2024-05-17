import { fetchUserData } from "@/app/actions";
import Navbar from "@/components/Navbar";
import { analyze_resume } from "@/utils/ai_resume";

export default async function analyze() {
  // const data = await fetchUserData();
  const data = {
    Fullname: "srty",
    Email: "ml",
    Number: "k",
    Location: "mk",
    Education: "abc Institute",
    Degree: "Bachelors of ",
    Education_From: "jjm",
    Education_To: "o",
    Experience_Description: "Worker with C++ Systems.",
    Experience_Role: "Software Developer",
    Experience_From: "2019",
    Experience_To: "2024",
    Experience_Company: "dwsa",
    project1: "Streaming Application",
    Project1_Description: "Built a WEB-rtc application with c++;",
    project2: "Game Engine",
    Project2_Description: "Build a game engine with c++;",
  };
  const response_data = {
    Experience_Improvements:
      "Software Developer with expertise in C++ systems and a proven track record of building high-performance applications.",
    project_name:
      "Project names should be concise and descriptive, highlighting the key technologies and outcomes achieved.",
    project1_Description: [
      "Developed a real-time video and audio streaming application using WebRTC and C++.",
      "Implemented low-latency communication protocols and optimized performance for seamless user experience.",
    ],
    project2_Description: [
      "Designed and implemented a custom game engine in C++ from scratch.",
      "Developed advanced rendering techniques, physics simulations, and AI algorithms for immersive gameplay.",
    ],
    additional_recommendations: [
      "Quantify accomplishments with specific metrics and results whenever possible.",
      "Highlight relevant skills and technologies used in each project.",
      "Tailor the resume to each job application, emphasizing the skills and experience most relevant to the role.",
    ],
  };

  return (
    <div>
      <div className="p-4">
        <Navbar />
      </div>
      <div className="lg:flex p-4 gap-6">
        <div className="border-2 border-white rounded-xl lg:basis-1/2 p-4 pl-6 flex flex-col">
          <div>
            <div className="text-2xl font-semibold pb-4 w-full flex justify-center items-center">
              Resume Analysis
            </div>
            <div className="font-semibold text-xl lg:text-2xl">
              Things that can be improved in your Experience Section
            </div>
            <div className="pb-4 text-lg pt-4">
              {response_data.Experience_Improvements}
            </div>
          </div>
          <div>
            <div className="font-semibold text-xl lg:text-2xl pt-4 pb-2">
              Additional Recommendations
            </div>
            {response_data.additional_recommendations.map((solodata, index) => {
              return (
                <div className="py-1 text-lg" key={index}>
                  {index + 1}. {solodata}
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-6 pt-6 lg:pt-0">
          <div className="border-2 border-white rounded-xl p-4 pl-6 pt-6">
            <div className="font-semibold text-xl">
              Project Name Improvements
            </div>
            <div className="pb-4">{response_data.project_name}</div>
          </div>
          <div className="border-2 border-white rounded-xl p-4 pl-6">
            <div className="font-semibold text-xl pb-2">
              Project 1 Description Improvements
            </div>
            {response_data.project1_Description.map((solodata, index) => {
              return (
                <div key={index}>
                  {index + 1}. {solodata}
                </div>
              );
            })}
            <div className="font-semibold text-xl pt-4 pb-2">
              Project 2 Description Improvements
            </div>
            {response_data.project2_Description.map((solodata, index) => {
              return (
                <div key={index}>
                  {index + 1}. {solodata}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
