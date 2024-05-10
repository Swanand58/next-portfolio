import Image from "next/image";
import SocialCard from "./_components/page";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen p-8">
      <section className="flex gap-8 items-left mb-12">
        <div className="w-32 h-32 relative">
          <Image
            src="/logo.jpg"
            alt="swanand"
            layout="fill"
            className="rounded-full object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="mt-4 text-left">
          <h1 className="text-4xl font-bold">
            Software Engineer, tech enthusiast, and amateur musician.
          </h1>
          <p className="mt-4">
            I'm Swanand, a software developer based in Houston, Texas. I'm
            pursuing Master's
            <br /> degree in Computer Science from the Rice University.
          </p>
          <SocialCard />
        </div>
      </section>
    </main>
  );
}
