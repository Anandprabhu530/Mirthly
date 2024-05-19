"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { updateuser_data } from "@/utils/types";

export async function login(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    console.log(error);
    redirect("/loginerror");
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
  if (errorsignup?.status === 422) {
    redirect("/signuperror");
  }

  const { error } = await supabase
    .from("resume")
    .insert([{ id: `${Test.user?.id}` }])
    .select();

  if (error) {
    console.log(error);
    redirect("/error");
  }
  redirect("/guider");
}

export async function updateuserdata(user_data: updateuser_data) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("resume")
    .update({ data: user_data })
    .eq("id", user?.id);

  if (error) {
    console.log(error);
  }
}

export async function fetchUserData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: resume, error } = await supabase
      .from("resume")
      .select("*")
      .eq("id", user.id);
    if (error) {
      redirect("/error");
    }

    if (resume![0].data === null) {
      redirect("/resume");
    } else {
      return resume![0].data;
    }
  } else {
    redirect("/error");
  }
}
