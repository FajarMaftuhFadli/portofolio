import Image from 'next/image';

export default function Link() {
  const links = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/fajarmaftuhfadli/',
    },
    {
      name: 'Github',
      link: 'https://github.com/FajarMaftuhFadli',
    },
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/id/froggologies/',
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-br from-[#24273a] to-[#181926] fixed top-0 bottom-0 left-0 right-0 -z-10"></div>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-20 mx-auto space-y-10 text-center">
        <div className="relative w-40 h-40 overflow-hidden bg-white border-4 border-[#cad3f5] rounded-full">
          <Image src="/frog.png" width={500} height={500} alt="fajar" />
        </div>
        <div className="space-y-4 text-[#cad3f5]">
          <h1 className="text-xl font-bold">Fajar Maftuh Fadli</h1>
          <p>
            Froggus ipsum dolor sit amet, consectetur adipiscing elit. Ribbit ac
            ante croak, tristique elit vel, volutpat sem. Proin croak sapien vel
            orci feugiat, sed.
          </p>
        </div>
        <div className="w-full font-semibold text-[#cad3f5]">
          <ul className="space-y-4 transition-colors">
            <li>
              <a
                rel="noopener noreferrer"
                href="/"
                className="block w-full p-6 bg-[#363a4f] transition-colors rounded-md border-4 border-[#363a4f] hover:border-[#cad3f5]"
              >
                Website
              </a>
            </li>
            {links.map((v, i) => (
              <li key={i}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={v.link}
                  className="block w-full p-6 bg-[#363a4f] rounded transition-colors border-4 border-[#363a4f] hover:border-[#cad3f5]"
                >
                  {v.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
