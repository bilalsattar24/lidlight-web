import { Suspense } from "react";

async function Receipt({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  return (
    <p className="mt-4 text-lg leading-8 text-muted">
      Stripe is emailing the receipt
      {sessionId ? " for this checkout" : ""}. The license key and the Mac
      download follow in a second email once license delivery is connected.
    </p>
  );
}

export default function Thanks({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  return (
    <main className="mx-auto flex min-h-full max-w-xl flex-col justify-center px-6 py-24">
      <p className="text-sm text-muted">LidLight</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Payment received.
      </h1>
      <Suspense
        fallback={
          <p className="mt-4 text-lg leading-8 text-muted">
            Stripe is emailing the receipt.
          </p>
        }
      >
        <Receipt searchParams={searchParams} />
      </Suspense>
      <a className="mt-8 text-sm underline" href="/">
        Back to LidLight
      </a>
    </main>
  );
}
