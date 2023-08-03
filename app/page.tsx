import Landing from "@/components/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Landing />
    </main>
  );
}
