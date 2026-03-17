import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Added relative class to pin the GitHub button to the screen corner
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      {/* ================= GitHub Button ================= */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <a
          href="https://github.com/peter-soroush/My_Tailwind_NextJs_projects_Prac"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300"
        >
          {/* Hidden on mobile to save space */}
          <span className="hidden md:block font-medium tracking-wide">
            View Source Code
          </span>

          {/* Inline SVG for GitHub Logo with a slight scale effect on hover */}
          <svg
            height="32"
            width="32"
            viewBox="0 0 16 16"
            className="fill-current group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
      {/* ================================================= */}

      {/* Title Section */}
      <div className="mb-16 text-center">
        <h1 className="text-amber-700 text-4xl md:text-5xl font-bold tracking-wider">
          Tailwind Projects
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          Choose a project to explore
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex max-md:flex-col md:flex-row justify-center items-center gap-12 px-6">
        {/* First Project */}
        <Link href="/FirstProject" className="group">
          <div className="relative w-72 h-[450px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:z-10">
            {/* Using fill instead of manual width/height to perfectly fit the frame */}
            <Image
              src="/Projects/FirstProject.png"
              alt="Clipboard Website"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            {/* Dark overlay that fades out on hover */}
            <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
          </div>
          <h3 className="mt-6 text-center text-xl font-bold text-gray-700 group-hover:text-amber-600 transition-colors">
            Clipboard Project
          </h3>
        </Link>

        {/* Second Project */}
        <Link href="/SecondProject" className="group">
          <div className="relative w-72 h-[450px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:z-10">
            <Image
              src="/Projects/SecondProject.png"
              alt="LoopStudio"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
          </div>
          <h3 className="mt-6 text-center text-xl font-bold text-gray-700 group-hover:text-amber-600 transition-colors">
            LoopStudios Project
          </h3>
        </Link>
        <Link href="/Fylo" className="group">
          <div className="relative w-72 h-[450px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:z-10">
            {/* Using fill instead of manual width/height to perfectly fit the frame */}
            <Image
              src="/Projects/FirstProject.png"
              alt="Clipboard Website"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            {/* Dark overlay that fades out on hover */}
            <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
          </div>
          <h3 className="mt-6 text-center text-xl font-bold text-gray-700 group-hover:text-amber-600 transition-colors">
            Fylo
          </h3>
        </Link>
      </div>
    </main>
  );
}
