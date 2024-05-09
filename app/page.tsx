// import { signIn } from "next-auth/react";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import { headers } from "next/headers";
// import { clicked_button, signInWithGithub } from "@/utils/supabase";
export default function page(){
  // const { data: session, status } = useSession();
  // if (status === "authenticated") {
  //   return (
  //     <div className="flex gap-10 p-6">
  //       <Button>
  //         <Link href="/guider">Guider</Link>
  //       </Button>
  //       <Button>
  //         <Link href="/resume">Resume Builder</Link>
  //       </Button>
  //       <Button>
  //         <Link href="/analyze">Resume Analyzer</Link>
  //       </Button>
  //     </div>
  //   );
  // }
  // const origin = headers().get('origin');
  async function handleclick(){
    'use server'
    // console.log("Data")
    const a = 10;
  }

  return (
    <form action={handleclick}>
      <button type="submit">Update User Name</button>
    </form>
  );
};
