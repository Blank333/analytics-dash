import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen ">
      <main className="flex flex-col gap-8 items-center justify-center  w-full">
        <h1 className="text-2xl">Welcome</h1>
        <Link href={"/dashboard"}>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Open Dashboard
          </button>
        </Link>
      </main>
    </div>
  );
}
