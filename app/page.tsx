"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
const page = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="flex gap-10 p-6">
        <Button>
          <Link href="/guider">Guider</Link>
        </Button>
        <Button>
          <Link href="/resume">Resume Builder</Link>
        </Button>
        <Button>
          <Link href="/analyze">Resume Analyzer</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-10 p-6 w-full h-screen justify-center items-center">
      <Button onClick={() => console.log(signIn("github"))}>
        Login with Github
      </Button>
    </div>
  );
};

export default page;
