import Landing from "@/components/Landing";
import ContactUs from "@/components/contactUs";
import Services from "@/components/services";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Landing />
      <Services />
      <Stats />
      <ContactUs />
    </main>
  );
}
