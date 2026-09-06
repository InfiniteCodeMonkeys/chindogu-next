import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop min-h-screen">
      <div className="flex flex-col w-full">
        {/* HERO */}
        <section className="pb-32 border-b border-outline-variant flex flex-col gap-gutter relative">
          <h1 className="pt-32 flex flex-col gap-unit font-display text-display uppercase tracking-tighter">
            <span className="text-primary">We build things</span>
            <span className="text-outline-variant">People actually use.</span>
            <span className="text-secondary">
              Eventually. <span className="text-outline-variant">We hope.</span>
            </span>
          </h1>
        </section>

        {/* PHILOSOPHY */}
        <section className="reveal-on-scroll py-32 border-b border-outline-variant flex flex-col gap-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Our Philosophy
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[600px]">
            We strive to build tools that solve real problems. The creative
            process is rarely linear, and we value the lessons learned in every
            iteration, whether successful or not.
          </p>
        </section>

        {/* FLAGSHIP */}
        <section className="reveal-on-scroll py-32 border-b border-outline-variant flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-secondary flex-shrink-0" />
            <h2 className="min-w-0 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
              Current Project: Notewell
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full border border-outline-variant bg-surface-container-low">
            {/* Content panel */}
            <div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant min-h-[400px]">
              <div className="flex flex-col gap-8">
                <p className="font-body-md text-body-md text-primary max-w-[400px]">
                  Notewell is our attempt to fix digital distraction. It uses
                  spaced repetition and active recall to help you build deep,
                  permanent knowledge from your notes.
                </p>
              </div>
              <a
                href="https://notewell.io"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-16 w-fit font-label-caps text-label-caps uppercase px-8 py-4 border border-primary bg-background text-primary hover:bg-primary hover:text-on-primary transition-none"
              >
                View Notewell
              </a>
            </div>

            {/* Visual / terminal panel */}
            <div className="p-8 flex flex-col relative overflow-hidden bg-surface-container-lowest min-h-[400px]">
              <div className="relative z-10 flex flex-col h-full w-full gap-8">
                <div className="flex items-center gap-2 border-b border-outline-variant pb-4 w-full">
                  <div className="w-2 h-2 bg-outline-variant" />
                  <div className="w-2 h-2 bg-outline-variant" />
                  <div className="w-2 h-2 bg-primary" />
                  <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant truncate">
                    notewell.io
                  </span>
                </div>

                <a
                  href="https://notewell.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 min-h-[180px] border border-outline-variant overflow-hidden bg-surface-container-lowest"
                >
                  <Image
                    src="/notewell.png"
                    alt="The Notewell homepage: “Consume Less. Retain More.”"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover object-top grayscale contrast-125 opacity-60 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                </a>

                <div className="font-code-sm text-code-sm text-primary flex items-baseline gap-2">
                  <span>Building a better way to remember.</span>
                  <span className="opacity-50 blink-cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="reveal-on-scroll py-32 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-secondary flex-shrink-0" />
            <h2 className="min-w-0 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
              Get In Touch
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[600px]">
            For any inquiries, please reach out.
          </p>
          <a
            href="mailto:mike@chindogulabs.com"
            className="w-fit font-code-sm text-code-sm text-primary border-b border-secondary pb-1 hover:text-secondary transition-colors break-all"
          >
            mike@chindogulabs.com
          </a>
        </section>
      </div>
    </main>
  );
}
