import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="w-full text-2xl font-semibold h-screen gap-6 items-center justify-center flex flex-col">
      <div>
        Email ID and password do not match. Please use correct Password.
      </div>
      <Link href="/" className="text-blue-400 underline">
        Login Here
      </Link>
    </div>
  );
}
