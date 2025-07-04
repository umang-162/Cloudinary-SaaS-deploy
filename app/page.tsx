"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Transform & Compress Media with{" "}
          <span className="text-sky-400">Cloudinary SaaS</span>
        </h1>
        <p className="text-lg text-zinc-400 mb-8">
          Seamlessly upload, resize, and optimize videos and images for your
          favorite social media platforms — all in one secure and blazing-fast
          cloud solution.
        </p>

        

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/sign-in">
            <button className="px-6 py-2 bg-zinc-800 border border-sky-600 text-sky-400 hover:bg-zinc-700 rounded-lg font-medium transition">
              Sign In
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
