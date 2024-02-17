import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-12 p-24">
      <h1 className="text-4xl font-semibold">
        <a href="/">{"Eli Talpa"}</a>
      </h1>
      <div>
        <h2 className="text-center mb-3">{"Links"}</h2>
        <ul className="list-disc">
          <li>
            <a
              href="https://github.com/elitalpa"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {"github.com/elitalpa"}
            </a>
          </li>
          <li>
            <a
              href="https://eli-talpa.com"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {"eli-talpa.com"}
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
