import Landing from "@/components/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Landing />
    </main>
  );
}
