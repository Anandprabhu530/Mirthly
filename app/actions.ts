"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { analyze_resume } from "@/utils/ai_resume";

export async function login(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/guider");
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { data: Test, error: errorsignup } = await supabase.auth.signUp(data);
  if (errorsignup) {
    console.log(errorsignup);
    redirect("/error");
  }
  console.log(`Returned Data`);
  console.log(Test.user.id);
  console.log();

  const { Insertdata, error } = await supabase
    .from("resume")
    .insert([{ id: `${Test.user.id}` }])
    .select();

  console.log(`Inserted Data`);
  console.log(Insertdata);
  console.log();

  if (error) {
    console.log(error);
    redirect("/error");
  }
  redirect("/guider");
}

export async function updateuserdata(user_data) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("resume")
    .update({ data: user_data })
    .eq("id", user.id);

  console.log("success");

  if (error) {
    console.log(error);
  }
}

export async function fetchUserData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: resume, error } = await supabase.from("resume").select("*");

  if (resume[0].data === null) {
    redirect("/resume");
  } else {
    const res = analyze_resume(resume[0].data);
    return res;
  }
}
