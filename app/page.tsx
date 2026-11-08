import { BuyButton } from "./buy-button";
import { PRICE_LABEL } from "@/lib/price";

const features = [
  {
    title: "Off in the dark",
    body: "The lamp reads the room. At 15 lux or below it turns completely off. It comes back at 40 lux, so it does not flicker. Dimmed is still a light on the lid. Off is off.",
  },
  {
    title: "Any song",
    body: "Music listens to what the Mac plays, not a microphone. Bass, melody, and hits each move the brightness. The quiet parts go dark.",
  },
  {
    title: "A switch, not Terminal",
    body: "One menu-bar control. The logo stays where you left it after you quit. You approve the Mac password once, not every time you change it.",
  },
];

const questions = [
  {
    q: "Which Macs?",
    a: "Only the new MacBook Pro with the PROLED XDR display, the one with the glowing logo.",
  },
  {
    q: "Does Music use the microphone?",
    a: "No. It hears the audio leaving the Mac. Nothing is recorded or uploaded.",
  },
  {
    q: "What do I get for the money?",
    a: "A one-time license for one Mac. The part you cannot get from the free Terminal command, or from a dimmer, is Off in the dark. Music is included.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <a href="#top" className="text-sm font-medium tracking-wide">
          LidLight
        </a>
        <BuyButton compact />
      </header>
      <main id="top" className="mx-auto w-full max-w-5xl px-6 pb-24">
        <section className="grid items-center gap-16 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm text-muted">MacBook Pro with PROLED XDR</p>
            <h1 className="mt-4 max-w-xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              Too bright in a dark room.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              macOS dims the glowing logo with the room. It never turns it
              off. LidLight does, the moment the room drops to 15 lux.
            </p>
            <div className="mt-8">
              <BuyButton />
              <p className="mt-3 text-sm text-muted">
                {PRICE_LABEL} once. One Mac. 14-day refund.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-72 w-56 rounded-[2rem] border border-white/15 bg-gradient-to-b from-zinc-800 to-black shadow-2xl">
              <div className="absolute left-1/2 top-16 h-16 w-16 -translate-x-1/2 rounded-full bg-white shadow-[0_0_40px_12px_rgba(255,255,255,0.45)]" />
              <p className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-[0.2em] text-zinc-500">
                LID
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/10 py-16 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <h2 className="text-xl font-medium">{feature.title}</h2>
              <p className="mt-3 leading-7 text-muted">{feature.body}</p>
            </div>
          ))}
        </section>

        <section className="border-t border-white/10 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {PRICE_LABEL}, once.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            Pay on this page. Stripe emails the receipt. The license key and
            the Mac download follow in a second email.
          </p>
          <div className="mt-8">
            <BuyButton />
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Questions</h2>
          <div className="mt-8 divide-y divide-white/10">
            {questions.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="text-lg font-medium">{item.q}</h3>
                <p className="mt-2 max-w-2xl leading-7 text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
