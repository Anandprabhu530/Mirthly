'use client'

import { analyze_data } from "@/utils/ai";
import { SetStateAction, useState } from "react";


export default function Home() {
  const [selectedValue, setSelctedValue] = useState("");
  const [data,setData] = useState(null)

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelctedValue(event.target.value)
  }

  const handleSubmit = async(event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const res = await analyze_data(selectedValue);
    setData(res);
  }
  
  return (
    <main className="p-10 w-full ">
      <div className="flex justify-center text-3xl">
        <h1>Your Carrer Guidance Here</h1>
      </div>
      {/* basic Input with his words and display the output*/}
      <div className="p-10 flex h-full justify-center">
        <form className="flex flex-col gap-4">
          <textarea className="w-[500px] h-[300px] bg-transparent outline-none resize-none border-2 border-white rounded-lg p-4 text-xl" onChange={handleChange}/>
          <button className="px-4 py-2 bg-blue-400" onClick={handleSubmit}>Submit</button>
          <button className="px-4 py-2 bg-blue-400 ml-6" onClick={() => {
            setData(null)
          }}>Clear</button>

        </form>
      </div>
        {data.recommendations.length != 0 && <div>
          <div className="flex flex-col items-center">
            Recommendations : 
            {data.recommendations.map((solodata,index) => {
              return (
                <div key={solodata}>{index+1}. {solodata}</div>
              )
            })}
          </div>
        </div>}
    </main>
  );
}
