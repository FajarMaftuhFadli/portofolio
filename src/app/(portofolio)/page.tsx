export default function Home() {
  return (
    <main>
      <section className="flex items-center h-screen p-16 bg-gradient-to-br from-[#24273a] to-[#181926] text-[#cad3f5]">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-[#cad3f5]">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn&#39;t find this page.
            </p>
            <p className="mt-4 mb-8 text-[#a5adcb]">
              But dont worry, you can find plenty of other things on my links.
            </p>
            <a
              rel="noopener noreferrer"
              href="/links"
              className="px-8 py-3 font-semibold rounded bg-[#363a4f] text-[#cad3f5]"
            >
              Back to links
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
