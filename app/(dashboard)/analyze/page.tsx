import { fetchUserData } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function analyze() {
  const data = await fetchUserData();
  console.log(data);
  return (
    <div>
      <div>Hello World</div>
      <button className="p-2 border-2 border-white text-white bg-transparent">
        Submit
      </button>
    </div>
  );
}
