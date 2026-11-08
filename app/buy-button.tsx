"use client";

import { PRICE_LABEL } from "@/lib/price";
import { useState } from "react";

export function BuyButton({ compact = false }: { compact?: boolean }) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function buy() {
    setPending(true);
    setError(null);
    const response = await fetch("/api/checkout", { method: "POST" });
    const body = (await response.json().catch(() => null)) as {
      url?: string;
      error?: string;
    } | null;
    if (response.ok && body?.url) {
      window.location.href = body.url;
      return;
    }
    setError(body?.error ?? "Checkout could not start.");
    setPending(false);
  }

  return (
    <div className={compact ? "" : "flex flex-col items-start gap-3"}>
      <button
        type="button"
        onClick={buy}
        disabled={pending}
        className="rounded-full bg-[#f4f1ea] px-5 py-3 text-sm font-medium text-[#111] disabled:opacity-60"
      >
        {pending ? "Opening checkout…" : `Buy LidLight · ${PRICE_LABEL}`}
      </button>
      {error ? <p className="max-w-sm text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
