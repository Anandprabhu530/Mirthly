"use client";

import { clicked_button } from "@/utils/supabase/server";

export default function analyze() {
  const handleclick = () => {
    const res = clicked_button();
    console.log(res);
  };
  return (
    <div>
      <div>Hello World</div>
      <button
        className="p-2 border-2 border-white text-white bg-transparent"
        onClick={handleclick}
      >
        Submit
      </button>
    </div>
  );
}
