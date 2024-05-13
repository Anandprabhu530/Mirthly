import { fetchUserData } from "@/app/actions";
import { analyze_resume } from "@/utils/ai_resume";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


const data = {
  "Fullname": "srty",
  "Email": "ml",
  "Number": "k",
  "Location": "mk",
  "Education": "abc Institute",
  "Degree": "Bachelors of ",
  "Education_From": "jjm",
  "Education_To": "o",
  "Experience_Description": "Worker with C++ Systems.",
  "Experience_Role": "Software Developer",
  "Experience_From": "2019",
  "Experience_To": "2024",
  "Experience_Company": "dwsa",
  "project1": "Streaming Application",
  "Project1_Description": "Built a WEB-rtc application with c++;",
  "project2": "Game Engine",
  "Project2_Description": "Build a game engine with c++;"
}

const response_data = {
  Experience_Improvements: 'Reframe your experience as a Software Developer to highlight your skills in C++ systems development and web application development. Use specific examples to demonstrate your contributions and achievements.',
  project_name: 'When naming projects in your resume, consider using keywords that potential employers will be searching for. For example, instead of "Streaming Application", you could name it "Real-time Video Streaming Application Using WebRTC".',
  project1_Description: [
    'Optimized and enhanced the C++ codebase of the WebRTC application to improve performance and scalability.',
    'Developed a custom video codec that significantly reduced latency and bandwidth consumption.',
    'Integrated the application with various third-party services to provide seamless user experience.'
  ],
  project2_Description: [
    'Designed and implemented the core architecture of the game engine, ensuring high performance and extensibility.',
    'Developed a physics engine using C++ that enabled realistic and dynamic gameplay.',
    'Created tools and frameworks to streamline the game development process, reducing production time and costs.'
  ],
  additional_recommendations: [
    'Quantify your accomplishments whenever possible. For example, instead of saying "Improved performance", you could say "Reduced latency by 25%".',
    'Use action verbs that convey your skills and responsibilities. For example, instead of saying "Worked on a project", you could say "Led the development of a project".',
    'Proofread your resume carefully for any errors in grammar or spelling.'
  ]
}


export default async function analyze() {
  const res = await analyze_resume(data);
  console.log(res);
  return (
    <div>
      <div className="text-xl font-semibold">Resume Analysis</div>
      <div>
        <div>Things that can be improved in your Experience Section</div>
        <div>{response_data.Experience_Improvements}</div>
        <div>Project Name Improvements</div>
        <div>{response_data.project_name}</div>
        <div>Project 1 Description Improvements</div>
        {response_data.project1_Description.map((solodata,index)=>{return(<div key={index}>{index+1}. {solodata}</div>)})}
        <div>Project 2 Description Improvements</div>
        {response_data.project2_Description.map((solodata,index)=>{return(<div key={index}>{index+1}. {solodata}</div>)})}
        <div>Additional Recommendations</div>
        {response_data.additional_recommendations.map((solodata,index)=>{return(<div key={index}>{index+1}. {solodata}</div>)})}
      </div>
    </div>
  );
}
