export default function Hero() {
  return (
    <section className="text-gray-800 bg-gray-100">
      <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="font-mono text-4xl font-bold leading-none sm:text-5xl">
          Hi, I&#39;m <span className="dark:text-blue-500">Fajar</span>!
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          I am a DevOps Engineer and I love anything related to Cloud Computing.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold bg-blue-600 rounded text-gray-50">
            Contact me
          </button>
          <button className="px-8 py-3 m-2 text-lg text-gray-900 border border-gray-300 rounded">
            About me
          </button>
        </div>
      </div>
    </section>
  );
}
