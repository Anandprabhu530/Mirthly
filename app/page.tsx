'use client'

import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelctedValue] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelctedValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedValue)
  }
  
  return (
    <main className="p-10 h-screen w-full border-2 border-white">
      <div className="flex justify-center text-3xl">
        <h1>Your Carrer Guidance Here</h1>
      </div>
      <div className="p-10 flex border-2 border-white h-full justify-center">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <p className="text-xl">Preffered Work Environment :</p>
            <select onChange={handleChange} className="outline-none bg-transparent border border-white rounded-md p-2">
            <option className="bg-transparent option-transparent text-black" value="Fast-paced">Fast-paced</option>
            <option className="bg-transparent option-transparent text-black" value="Dynamic">Dynamic</option>
            <option className="bg-transparent option-transparent text-black" value="Structured">Structured</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-xl">Preferred Activities :</p>
            <select onChange={handleChange} className="outline-none bg-transparent border border-white rounded-md p-2">
            <option className="bg-transparent option-transparent text-black" value="Problem Solver">Problem Solver</option>
            <option className="bg-transparent option-transparent text-black" value="Managing">Managing</option>
            <option className="bg-transparent option-transparent text-black" value="Planner">Planner</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-xl">Favorite Subjects in School :</p>
            <select onChange={handleChange} className="outline-none bg-transparent border border-white rounded-md p-2">
            <option className="bg-transparent option-transparent text-black" value="Tamil">Tamil</option>
            <option className="bg-transparent option-transparent text-black" value="Maths">Maths</option>
            <option className="bg-transparent option-transparent text-black" value="Computer Science">Computer Science</option>
              <option className="bg-transparent option-transparent text-black" value="Physics">Physics</option>
              <option className="bg-transparent option-transparent text-black" value="Chemistry">Chemistry</option>
              <option className="bg-transparent option-transparent text-black" value="Accounting">Accounting</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-xl">Values :</p>
            <select onChange={handleChange} className="outline-none bg-transparent border border-white rounded-md p-2">
            <option className="bg-transparent option-transparent text-black" value="mercedes">A high earning potential</option>
            <option className="bg-transparent option-transparent text-black" value="volvo">Making a positive impact on the world</option>
            <option className="bg-transparent option-transparent text-black" value="saab">A good work-life balance
            </option>
            <option className="bg-transparent option-transparent text-black" value="mercedes">The opportunity to learn and grow continuously
            </option>
            <option className="bg-transparent option-transparent text-black" value="mercedes">Working in a creative and innovative environment
            </option>
            <option className="bg-transparent option-transparent text-black" value="mercedes">Helping people and making a difference in their lives
            </option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-400" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </main>
  );
}
