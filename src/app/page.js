import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="ml-5">
        <h1>Tailwind Projects</h1>
      </div>
      <div className="py-50 ml-5 text-sky-500">
        <ul>
          <li>
            <Link href="/FirstProject">First Project</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
