import { fetchUserData } from "@/app/actions";
import Navbar from "@/components/Navbar";
import { analyze_resume } from "@/utils/ai_resume";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function analyze() {
  const data = await fetchUserData();
  const response_data = await analyze_resume(data);
  
  return (
    <div>
      <div className="p-4">
        <Navbar/>
      </div>
      <div className="flex p-4 gap-6">
        <div className="border-2 border-white rounded-xl basis-1/2 p-4 pl-6 flex flex-col">
          <div>
          <div className="text-2xl font-semibold pb-4 w-full flex justify-center items-center">Resume Analysis</div>
          <div className="font-semibold text-2xl">Things that can be improved in your Experience Section</div>
          <div className="pb-4 text-lg pt-4">{response_data.Experience_Improvements}</div>
          </div>
          <div>
          <div className="font-semibold text-2xl pt-4 pb-2">Additional Recommendations</div>
          {response_data.additional_recommendations.map((solodata,index)=>{return(<div className="py-1 text-lg" key={index}>{index+1}. {solodata}</div>)})}
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-6">
          <div className="border-2 border-white rounded-xl p-4 pl-6">
            <div className="font-semibold text-xl">Project Name Improvements</div>
            <div className="pb-4">{response_data.project_name}</div>
          </div>
          <div className="border-2 border-white rounded-xl p-4 pl-6">
            <div className="font-semibold text-xl pb-2">Project 1 Description Improvements</div>
            {response_data.project1_Description.map((solodata,index)=>{return(<div key={index}>{index+1}. {solodata}</div>)})}
            <div className="font-semibold text-xl pt-4 pb-2">Project 2 Description Improvements</div>
            {response_data.project2_Description.map((solodata,index)=>{return(<div key={index}>{index+1}. {solodata}</div>)})}
          </div>
        </div>
      </div>
    </div>
  );
}
