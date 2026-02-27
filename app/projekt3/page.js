import Link from 'next/link';

export default function Projekt3() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f8f8f8] text-[#1a1a1a] relative">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#1a1a1a]"
        aria-label="Go Back"
      >
        <i className="ri-arrow-left-line text-xl"></i>
      </Link>
      <h1 className="text-5xl font-serif mb-8 text-center">Project 3</h1>
    </div>
  );
}