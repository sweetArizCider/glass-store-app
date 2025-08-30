import Image from "next/image";
import { ThemeInit } from "../../.flowbite-react/init";

export default function App() {
  return (
    <>
      <ThemeInit />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol
            className="
          font-mono
          list-inside
          list-decimal
          text-sm/6
          text-center
          sm:text-left"
          >
            <li className="mb-2 tracking-[-.01em]">
              Welcome to Glass Store TRC!
            </li>
          </ol>
        </main>
      </div>
    </>
  );
}
