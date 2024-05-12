import { analyze_resume } from "@/utils/ai";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function analyze() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user?.id);

  let { data: resume, error } = await supabase.from("resume").select("*");

  if (resume[0].data === null) {
    redirect("/builder");
  } else {
    const res = analyze_resume(resume[0].data);
  }

  return (
    <div>
      <div>Hello World</div>
      <button className="p-2 border-2 border-white text-white bg-transparent">
        Submit
      </button>
    </div>
  );
}
