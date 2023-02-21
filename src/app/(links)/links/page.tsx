import Image from 'next/image';

export default function Link() {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fajarmaftuhfadli',
    },
    {
      name: 'Github',
      url: 'https://github.com/FajarMaftuhFadli',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/froggologies',
    },
    {
      name: 'Accredible',
      url: 'https://www.credential.net/profile/fajarmaftuhfadli/wallet#gs.qlkirc',
    },
    {
      name: 'Mongkeytype',
      url: 'https://monkeytype.com/profile/froggologies',
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-br from-[#24273a] via-[#1e2030] to-[#181926] fixed top-0 -bottom-24 left-0 right-0 -z-10"></div>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-6 py-20 mx-auto space-y-10 text-center sm:px-10 md:px-20">
        <div className="relative w-40 h-40 overflow-hidden bg-white border-4 border-[#cad3f5] rounded-full shadow-lg">
          <Image
            src="/frog.png"
            fill={true}
            quality={25}
            sizes="33vw"
            alt="frog avatar"
          />
        </div>
        <div className="space-y-6 text-[#cad3f5]">
          <h1 className="text-4xl font-bold">Fajar Maftuh Fadli</h1>
          <p className="text-[#a5adcb]">
            Froggus ipsum dolor sit amet, consectetur adipiscing elit. Ribbit ac
            ante croak, tristique elit vel, volutpat sem. Proin croak sapien vel
            orci feugiat, sed.
          </p>
        </div>
        <div className="w-full font-semibold text-[#cad3f5]">
          <ul className="space-y-6 text-lg tracking-wider">
            <li>
              <a
                rel="noopener noreferrer"
                href="/"
                className="block shadow-lg w-full p-6 bg-[#363a4f] transition-all rounded ring-4 ring-[#363a4f] hover:ring-[#cad3f5]"
              >
                Website
              </a>
            </li>
            {links.map((v, i) => (
              <li key={i}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={v.url}
                  className="block shadow-lg w-full p-6 bg-[#363a4f] rounded transition-all ring-4 ring-[#363a4f] hover:ring-[#cad3f5]"
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
