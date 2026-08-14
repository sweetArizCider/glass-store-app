"use client";

import { useState } from "react";

const HAPPY_BIRD_MESSAGES = [
  "Chirp chirp! You are doing great today.",
  "Happy Bird says: spread your wings and smile!",
  "Tiny steps still count. Keep flying forward.",
  "You are brighter than a sunny morning sky.",
];

const HAPPY_BIRD_ACTIVITIES = [
  "Sing your happiest song",
  "Find a cozy branch",
  "Share good vibes with friends",
];

export default function App() {
  const [message, setMessage] = useState(HAPPY_BIRD_MESSAGES[0]);

  const handleNewMessage = () => {
    const randomMessage =
      HAPPY_BIRD_MESSAGES[Math.floor(Math.random() * HAPPY_BIRD_MESSAGES.length)];
    setMessage(randomMessage);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-lime-100 p-6">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white/80 p-8 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold text-sky-700 md:text-5xl">
          Happy Bird App
        </h1>
        <p className="text-8xl" aria-hidden>
          🐦
        </p>
        <p className="text-lg text-slate-700">{message}</p>
        <button
          type="button"
          onClick={handleNewMessage}
          className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
        >
          New Happy Chirp
        </button>
      </section>

      <section className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/70 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-sky-800">Bird Joy List</h2>
        <ul className="space-y-2 text-slate-700">
          {HAPPY_BIRD_ACTIVITIES.map((activity) => (
            <li key={activity} className="rounded-xl bg-white/80 p-3">
              {activity}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
