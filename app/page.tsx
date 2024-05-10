// // import { signIn } from "next-auth/react";
// // import Link from "next/link";
// // import { useSession } from "next-auth/react";
// // import { Button } from "@/components/ui/button";
// // import { headers } from "next/headers";

// import { clicked_button } from "@/utils/supabase";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";

// // import { clicked_button, signInWithGithub } from "@/utils/supabase";
// export default function page() {
//   // const { data: session, status } = useSession();
//   // if (status === "authenticated") {
//   //   return (
//   //     <div className="flex gap-10 p-6">
//   //       <Button>
//   //         <Link href="/guider">Guider</Link>
//   //       </Button>
//   //       <Button>
//   //         <Link href="/resume">Resume Builder</Link>
//   //       </Button>
//   //       <Button>
//   //         <Link href="/analyze">Resume Analyzer</Link>
//   //       </Button>
//   //     </div>
//   //   );
//   // }
//   // const origin = headers().get('origin');
//   async function handleclick() {
//     "use server";
//     const origin = headers().get("origin");
//     console.log("Inside Server");
//     const supabase = clicked_button();
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "github",
//       options: {
//         redirectTo: origin,
//       },
//     });
//     if (error) {
//       console.log(error);
//     } else {
//       redirect(data.url);
//     }
//     console.log("Success");
//   }

//   return (
//     <form action={handleclick}>
//       <button type="submit">Update User Name</button>
//     </form>
//   );
// }

import Image from "next/image";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { clicked_button } from "@/utils/supabase";

export default function LoginForm() {
  const signIn = async () => {
    "use server";

    console.log("Inside");
    const supabase = clicked_button();
    console.log(supabase);
    const origin = headers().get("origin");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://www.google.com`,
      },
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      redirect(data.url);
    }
  };

  return (
    <form
      action={signIn}
      className="flex-1 flex min-h-screen justify-center items-center"
    >
      <button className="hover:bg-gray-800 p-8 rounded-xl">
        Sign in with GitHub
      </button>
    </form>
  );
}
