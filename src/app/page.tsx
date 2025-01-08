import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto font-russo">
      <div
        id="about"
        className="h-1/3 w-2/3 mx-auto p-12 flex flex-col justify-center pt-24"
      >
        <p className="text-xl py-3">
          Chindogu Labs is the holding company for our projects focused on
          education and productivity.
        </p>
        <p className="text-xl py-3">
          Our goal is to create tools that help people learn more effectively
          and efficiently.
        </p>
        <p className="text-xl py-3">
          What is Chindōgu? Chindōgu is the Japanese art of inventing ingenious
          and simple gadgets that, on the face of it, seem like an ideal
          solution to a particular problem. However, chindogu has a distinctive
          feature: anyone actually attempting to use one of these inventions
          would find that it causes so many new problems, or such significant
          social embarrassment, that effectively it has no utility whatsoever.
        </p>
        <p className="text-xl pt-3">
          Many of our projects are experimental and may end up looking like
          chindōgu in the end.
        </p>
      </div>
      <div id="portfolio" className="h-1/3 p-12">
        <h2 className="text-3xl pb-6">projects</h2>
        <div>
          <div className="flex flex-col gap-4">
            <Link href="https://wwww.extragrad.com" prefetch>
              <div className="border-2 p-4">
                <h3>extragrad</h3>
                <p>
                  you don&apos;t have to go back to school. discuss your
                  favorite book with an expert.
                </p>
              </div>
            </Link>
            <Link href="https://wwww.thecurricula.com" prefetch>
              <div className="border-2 p-4">
                <h3>theCurricula</h3>
                <p>
                  the internet is full of resources for learning. but it&apos;s
                  hard to know where to start. let AI create a course for you.
                </p>
              </div>
            </Link>
            <div className="border-2 border-dashed p-4">
              <h3>noteBuddy (coming soon)</h3>
              <p>
                auto generate flashcards from your notion notes and use spaced
                repitition to study them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="h-1/3 text-center p-12">
        For any inquiries, please reach out to{" "}
        <a href="mailto:mike@chindogulabs.com">mike@chindogulabs.com</a>
      </div>
    </main>
  );
}
