"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

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
  const { data: Test, error } = await supabase.auth.signUp(data);

  //insert into table with userid data.id(check once)
  // const { data, error } = await supabase.from('movies').insert(
  //   {
  //     name: 'The Empire Strikes Back',
  //     description:
  //       'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.',
  //   },
  // )

  if (error) {
    console.log(error);
    redirect("/error");
  }
  redirect("/guider");
}
