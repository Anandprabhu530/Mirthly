import Link from "next/link";

const page = () => {
  return (
    <div className="flex gap-10 p-6">
      <Link href="/guider" className="border-2 border-black px-2 py-2">
        Guider
      </Link>

      <Link href="/resume" className="border-2 border-black px-2 py-2">
        Resume Builder
      </Link>
    </div>
  );
};

export default page;
