import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Profile />
    </main>
  );
}
