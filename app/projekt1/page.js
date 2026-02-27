import Link from 'next/link';
import Image from 'next/image';

export default function Projekt1() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] p-8 font-sans flex items-center justify-center relative">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#1a1a1a] z-50 border border-gray-100"
        aria-label="Go Back"
      >
        <i className="ri-arrow-left-line text-xl"></i>
      </Link>

      {/* MacOS Browser Window Container */}
      <div className="w-full max-w-[1280px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col h-[85vh] min-h-[800px]">

        {/* Browser Top Bar */}
        <div className="h-12 border-b border-gray-100 flex items-center px-4 relative bg-white">
          <div className="flex gap-2 w-24">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex gap-4 text-gray-400">
            <i className="ri-arrow-left-s-line text-lg cursor-pointer hover:text-gray-600"></i>
            <i className="ri-arrow-right-s-line text-lg cursor-pointer hover:text-gray-600"></i>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bg-gray-50 flex items-center justify-center px-12 py-1.5 rounded-md text-sm text-gray-500 max-w-sm w-full font-medium">
            <i className="ri-lock-line mr-2 text-xs"></i>
            memonest.com
          </div>

          <div className="ml-auto flex items-center gap-4 text-gray-400">
            <i className="ri-download-line cursor-pointer hover:text-gray-600"></i>
            <i className="ri-add-line cursor-pointer hover:text-gray-600"></i>
            <i className="ri-file-copy-line cursor-pointer hover:text-gray-600"></i>
          </div>
        </div>

        {/* Dashboard Main Grid Layout */}
        <div className="flex-1 flex overflow-hidden">

          {/* Left Sidebar */}
          <div className="w-[280px] border-r border-gray-100 p-6 flex flex-col bg-white overflow-y-auto">
            {/* Logo */}
            <div className="flex items-center gap-3 font-semibold text-xl mb-8 tracking-tight text-gray-900">
              <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center shadow-inner">
                <div className="w-4 h-4 rounded-sm border-2 border-white"></div>
              </div>
              Memonest
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 p-2 rounded-xl border border-gray-100 mb-8 cursor-pointer hover:bg-gray-50">
              <Image src="/assets/avatars/daniel.png" alt="Daniel" width={40} height={40} className="rounded-full bg-gray-200" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">Daniel Fetchi</div>
                <div className="text-xs text-gray-500 truncate">danielfetchi@gmail.co.id</div>
              </div>
              <i className="ri-expand-up-down-line text-gray-400"></i>
            </div>

            {/* Menu Navigation */}
            <nav className="flex flex-col gap-1 mb-8">
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gray-100 text-gray-900 font-semibold text-sm">
                <i className="ri-home-4-line text-lg"></i>
                Home
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer">
                <i className="ri-file-copy-2-line text-lg"></i>
                All files
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer mt-2">
                <i className="ri-lock-2-line text-lg"></i>
                Private files
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer">
                <i className="ri-group-line text-lg"></i>
                Shared with me
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer">
                <i className="ri-delete-bin-7-line text-lg"></i>
                Deleted files
              </div>
            </nav>

            {/* Favorite Folders */}
            <div className="mb-auto">
              <div className="text-xs font-semibold text-gray-400 mb-2 px-3 tracking-wider">Favorite Folders</div>
              <nav className="flex flex-col gap-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 font-semibold text-sm hover:bg-gray-50 cursor-pointer">
                  <i className="ri-folder-fill text-gray-500 text-lg"></i>
                  UI Design
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer">
                  <i className="ri-folder-fill text-gray-500 text-lg"></i>
                  Animation
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer">
                  <i className="ri-folder-fill text-gray-500 text-lg"></i>
                  Assets
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-50 cursor-pointer">
                  <i className="ri-folder-fill text-gray-500 text-lg"></i>
                  UI Kit
                </div>
              </nav>
            </div>

            {/* Storage Widget */}
            <div className="mt-8 bg-[#18181b] rounded-2xl p-4 text-white">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium text-sm">Storage almost full</div>
                <i className="ri-arrow-right-line text-gray-400 text-sm"></i>
              </div>
              <div className="h-1.5 bg-gray-700 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-white w-3/4 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 mb-4">12 GB of 16 GB used</div>
              <button className="w-full bg-white text-black text-sm font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Upgrade plan
              </button>
            </div>

            {/* Bottom Links */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-1.5 text-gray-500 font-medium text-sm hover:text-gray-900 cursor-pointer">
                <i className="ri-settings-3-line text-lg"></i>
                Settings
              </div>
              <div className="flex items-center gap-3 px-3 py-1.5 text-gray-500 font-medium text-sm hover:text-gray-900 cursor-pointer">
                <i className="ri-question-answer-line text-lg"></i>
                Support
              </div>
            </div>
          </div>

          {/* Right Main Content Panel */}
          <div className="flex-1 bg-white p-10 overflow-y-auto">

            {/* Main Header / Search */}
            <div className="flex justify-between items-center mb-10">
              <div className="relative w-96">
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer">
                  <i className="ri-notification-3-line"></i>
                </div>
                <button className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm">
                  <i className="ri-add-line"></i> Invite members
                </button>
              </div>
            </div>

            {/* Welcome Section */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">Welcome back, Daniel Fetchi</h1>
                <p className="text-gray-500 text-sm">Glad to have you back! Let&apos;s get started.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <i className="ri-folder-add-line"></i> Create folder
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <i className="ri-upload-cloud-2-line"></i> Upload files
                </button>
              </div>
            </div>

            {/* Folder Section */}
            <div className="mb-10">
              <h2 className="text-lg font-bold tracking-tight text-gray-900 mb-4">Folder</h2>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <i className="ri-folder-line text-lg text-gray-400"></i>
                      UI UX Design
                    </div>
                    <i className="ri-more-2-fill text-gray-400 hover:text-gray-600"></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Files Section */}
            <div className="mb-10">
              <h2 className="text-lg font-bold tracking-tight text-gray-900 mb-4">Recent files</h2>
              <div className="grid grid-cols-3 gap-4">

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-sm cursor-pointer transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <i className="ri-file-text-line text-xl text-gray-500"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900 truncate">Invoice December 2024</div>
                    <div className="text-xs text-gray-500 mt-0.5">267 KB · .pdf</div>
                  </div>
                  <i className="ri-more-2-fill text-gray-400 hover:text-gray-600 self-start"></i>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-sm cursor-pointer transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <i className="ri-image-line text-xl text-gray-500"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900 truncate">Farewell Company A</div>
                    <div className="text-xs text-gray-500 mt-0.5">5 MB · .png</div>
                  </div>
                  <i className="ri-more-2-fill text-gray-400 hover:text-gray-600 self-start"></i>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-sm cursor-pointer transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <i className="ri-file-text-line text-xl text-gray-500"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900 truncate">QA 1_Fizzy app</div>
                    <div className="text-xs text-gray-500 mt-0.5">12 MB · .pdf</div>
                  </div>
                  <i className="ri-more-2-fill text-gray-400 hover:text-gray-600 self-start"></i>
                </div>

              </div>
            </div>

            {/* All Files Table */}
            <div>
              <h2 className="text-lg font-bold tracking-tight text-gray-900 mb-4">All files</h2>

              {/* Filters / Search */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <i className="ri-filter-3-line"></i> Filter
                  </button>
                  <div className="relative">
                    <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input type="text" placeholder="Look up anything..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-100" />
                  </div>
                </div>
                <div className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
                  <i className="ri-more-2-fill"></i>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-[auto_1fr_1.5fr_1fr] gap-4 py-3 px-4 bg-gray-50 rounded-lg text-xs font-semibold tracking-wide text-gray-500 border border-gray-100 uppercase mb-2">
                <div className="w-5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded border border-gray-300"></div>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">FILE NAME <i className="ri-expand-up-down-line opacity-50"></i></div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">SHARED BY <i className="ri-expand-up-down-line opacity-50"></i></div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">LAST MODIFIED <i className="ri-expand-up-down-line opacity-50"></i></div>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col gap-2">

                {/* Row 1 */}
                <div className="grid grid-cols-[auto_1fr_1.5fr_1fr] gap-4 py-3 px-4 items-center group hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="w-5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-gray-400"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-gray-200">
                      <i className="ri-file-text-line text-lg text-gray-500"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 truncate">Invoice January 2025</div>
                      <div className="text-xs text-gray-500">267 KB · .pdf</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/assets/avatars/adrian.png" alt="Adrian" width={28} height={28} className="rounded-full bg-peach-300 border border-gray-200 flex-shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="font-medium text-sm text-gray-900 truncate">James Whitemore</span>
                      <span className="text-xs text-gray-500 truncate">jameswith@gmail.co.id</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 truncate">
                    11 January 2025
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-[auto_1fr_1.5fr_1fr] gap-4 py-3 px-4 items-center group hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="w-5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-gray-400"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-gray-200">
                      <i className="ri-image-line text-lg text-gray-500"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 truncate">Design Gathering A</div>
                      <div className="text-xs text-gray-500">3 MB · .png</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/assets/avatars/elizabeth.png" alt="Elizabeth" width={28} height={28} className="rounded-full bg-orange-300 border border-gray-200 flex-shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="font-medium text-sm text-gray-900 truncate">Elizabeth Harley</span>
                      <span className="text-xs text-gray-500 truncate">elizabeth12@gmail.co.id</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 truncate">
                    23 October 2024
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-[auto_1fr_1.5fr_1fr] gap-4 py-3 px-4 items-center group hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="w-5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-gray-400"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-gray-200">
                      <i className="ri-box-3-line text-lg text-gray-500"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 truncate">Fizzy file 2</div>
                      <div className="text-xs text-gray-500">1.2 GB · .fig</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/assets/avatars/finn.png" alt="Finn" width={28} height={28} className="rounded-full bg-blue-300 border border-gray-200 flex-shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="font-medium text-sm text-gray-900 truncate">Michael Dawson</span>
                      <span className="text-xs text-gray-500 truncate">dawsonmich@gmail.co.id</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 truncate">
                    21 May 2024
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-[auto_1fr_1.5fr_1fr] gap-4 py-3 px-4 items-center group hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="w-5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-gray-400"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-gray-200">
                      <i className="ri-file-text-line text-lg text-gray-500"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 truncate">Design Catalog</div>
                      <div className="text-xs text-gray-500">50 MB · .pdf</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/assets/avatars/daniel.png" alt="Reynold" width={28} height={28} className="rounded-full bg-gray-200 border border-gray-200 flex-shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="font-medium text-sm text-gray-900 truncate">Reynold Arkhan</span>
                      <span className="text-xs text-gray-500 truncate">hireynold@gmail.co.id</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 truncate">
                    19 April 2024
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}