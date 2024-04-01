import { Button } from "@/components/ui/button";
import { ComboboxAcd } from "@/components/ComboboxAcd";
import { analyze_data } from "@/utils/ai";
import { useState } from "react";

export default function Home() {
  return (
    <main className="p-10 w-full border-2 border-white h-screen">
      <div className="flex h-full gap-6">
        <div className="border-2 rounded-xl border-red-500 flex flex-col basis-2/3">
          <div className="mx-8 py-6 w-11/12 h-fit text-xl font-semibold  border-b-[2px] border-[#c4c2c2]">
            Your Carrier Starts Here
          </div>
          {/* <div className="px-8 pt-4 pb-2">Work Environment</div> */}
          <div className="p-8">
            <ComboboxAcd>Click Here</ComboboxAcd>
          </div>
        </div>
        <div></div>
        <div className="border-2 border-red-500 flex basis-1/3 rounded-xl">
          <div className="p-6">Hello World</div>
        </div>
      </div>
    </main>
  );
}
