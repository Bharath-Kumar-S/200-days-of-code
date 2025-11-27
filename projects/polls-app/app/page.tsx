import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Polls App
        </h1>
        <input
          type="text"
          placeholder="Create a new poll..."
          className="w-full rounded border border-zinc-300 bg-zinc-100 px-4 py-2 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-blue-400 dark:focus:ring-blue-900"
        />
      </main>
    </div>
  );
}
