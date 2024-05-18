import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="w-full text-2xl font-semibold h-screen gap-6 items-center justify-center flex flex-col">
      <div>User does not exists. Please consider creating an account.</div>
      <Link href="/" className="text-blue-400 underline">
        Register Here
      </Link>
    </div>
  );
}
