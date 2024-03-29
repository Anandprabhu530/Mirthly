"use client";

import { Button } from "@/components/ui/button";
import { ComboboxForm } from "../../components/ComboboxForm";
import { analyze_data } from "@/utils/ai";
import { SetStateAction, useState } from "react";
import { DialogDemo } from "../../components/DialogDemo";

export default function Home() {
  // const [selectedValue, setSelctedValue] = useState("");
  // const [data, setData] = useState();

  // const handleChange = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setSelctedValue(event.target.value);
  // };

  // const handleSubmit = async (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   const res = await analyze_data(selectedValue);
  //   setData(res);
  // };

  return (
    <main className="p-10 w-full border-2 border-white h-screen">
      <div className="flex h-full gap-10">
        <div className="border-2 rounded-xl border-red-500 flex flex-col basis-2/3">
          <div className="mx-8 py-6 w-11/12 h-fit text-xl font-semibold  border-b-[2px] border-[#c4c2c2]">
            Your Carrier Starts Here
          </div>
          <div className="px-8 pt-4 pb-2">Work Environment</div>
          <DialogDemo>Click Here</DialogDemo>
        </div>
        <div className="border-2 border-red-500 flex justify-center basis-1/3">
          Section 2
        </div>
      </div>
    </main>
  );
}
