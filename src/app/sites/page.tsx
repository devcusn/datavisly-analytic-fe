import Link from "next/link";

const SitesPage = () => {
  const sites = [
    {
      id: 1,
      url: "cusnsoft.xyz",
      visitors: 0,
      percentage: "0%",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8">
      {/* My Personal Sites header area */}
      <div className="flex flex-col w-full mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">
          My Personal Sites
        </h1>
        <div className="h-px w-full bg-gray-700 mb-6"></div>

        <div className="flex justify-between items-center w-full">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              {/* <Search className="h-4 w-4 text-gray-400" /> */}
            </div>
            <input
              type="text"
              placeholder="Press / to search sites"
              className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="bg-[#ff6100] cursor-pointer hover:bg-orange-700 text-white px-4 py-2 rounded-md flex items-center">
            <span className="mr-1">+</span>
            Add Website
          </button>
        </div>
      </div>

      {/* Site list area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sites.map((site) => (
          <div
            key={site.id}
            className="bg-gray-800 rounded-md p-4 hover:bg-gray-750 transition duration-200"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <Link href={"site"} className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-white font-medium">{site.url}</span>
              </div>
              <button className="text-gray-400 hover:text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="6" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="18" r="2" fill="currentColor" />
                </svg>
              </button>
            </div>

            <div className="relative pt-2">
              <div className="h-1 w-full bg-gray-700 rounded-full">
                <div
                  className="h-1 bg-blue-500 rounded-full"
                  style={{ width: site.percentage }}
                ></div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="text-white">
                  <span className="font-semibold">{site.visitors}</span>
                  <span className="text-gray-400 ml-1">
                    visitors in last 24h
                  </span>
                </div>
                <div className="text-gray-400">~{site.percentage}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitesPage;
