import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="isolate bg-white h-full flex flex-col">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-6">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CosmoCut</span>
              <img className="h-8" src="logo.svg" alt="CosmoCut Logo" />
            </Link>
          </div>
        </nav>
      </div>
      <main className="relative p-6 flex justify-center items-center grow">
        <div className="flex flex-col gap-6 text-center items-center max-w-2xl -mt-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Send your short links to space
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            This landing page is a mockup lol. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Anim aute id magna aliqua
            ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
            sunt amet fugiat veniam occaecat fugiat.
          </p>
          <div className="flex flex-col gap-2">
            <a href="/#" className="w w-60">
              <img src="https://deta.space/buttons/dark.svg" alt="" />
            </a>
            <Link
              to="/app/links/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Dashboard <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
      <div className="absolute overflow-hidden inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
