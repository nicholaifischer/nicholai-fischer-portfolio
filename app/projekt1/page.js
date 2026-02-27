import Link from 'next/link';
import Image from 'next/image';

export default function Projekt1() {
  return (
    <div className="min-h-screen p-8 bg-[#8a8a8a] text-white relative font-sans">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#1a1a1a] z-50"
        aria-label="Go Back"
      >
        <i className="ri-arrow-left-line text-xl"></i>
      </Link>

      <div className="max-w-5xl mx-auto flex gap-6 pt-16">
        {/* Left Column */}
        <div className="w-[380px] flex flex-col gap-6">

          {/* Meeting Widget */}
          <div className="bg-[#242426] rounded-[32px] p-6 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-medium tracking-tight">Meeting on Friday</h2>
                <p className="text-[#a0a0a0] text-sm mt-1">25 July, 2025</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
                Work time <i className="ri-briefcase-4-line"></i>
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 bg-[#2e2e30] rounded-xl flex items-center px-4 py-3 border border-white/5">
                <i className="ri-time-line text-[#a0a0a0] mr-3"></i>
                <span className="text-sm font-medium">11:30</span>
              </div>
              <i className="ri-arrow-right-line text-[#a0a0a0]"></i>
              <div className="flex-1 bg-[#2e2e30] rounded-xl flex items-center px-4 py-3 border border-white/5">
                <span className="text-sm font-medium">12:00</span>
              </div>
            </div>

            <div className="bg-[#2e2e30] rounded-xl flex justify-between items-center px-4 py-3 border border-white/5 mb-6">
              <div className="flex items-center text-[#a0a0a0]">
                <i className="ri-group-line mr-3"></i>
                <span className="text-sm">People</span>
              </div>
              <i className="ri-add-circle-line text-xl text-white"></i>
            </div>

            <div className="flex gap-4">
              <button className="w-12 h-12 bg-[#2e2e30] border border-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="ri-sound-module-line"></i>
              </button>
              <button className="flex-1 rounded-full bg-gradient-to-r from-[#d9a4cd] to-[#e48cc6] text-white font-medium shadow-lg hover:opacity-90 transition-opacity">
                Create A Meeting
              </button>
            </div>
          </div>

          {/* Call Duration Widget */}
          <div className="bg-[#242426] rounded-[32px] p-6 shadow-xl relative overflow-hidden h-[340px]">
            <div className="flex justify-between items-start mb-6 z-10 relative">
              <h2 className="text-lg font-medium tracking-tight">Call duration</h2>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
                All stats <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            <div className="flex items-end mb-8 z-10 relative">
              <div className="text-5xl font-semibold tracking-tighter">2387</div>
              <div className="text-xl text-[#a0a0a0] ml-2 mb-1">min</div>
            </div>

            {/* Chart Area */}
            <div className="absolute bottom-6 left-6 right-6 h-32 flex items-end gap-2 justify-between z-10">

              {/* Target Line */}
              <div className="absolute top-2 w-full border-t border-[#d86bb0]/50 z-0"></div>
              {/* Target Badge */}
              <div className="absolute top-0 left-0 -mt-3 bg-[#d86bb0] text-xs font-semibold px-2 py-0.5 rounded-full z-20">
                387 min
              </div>

              {/* Bars */}
              <div className="w-[10%] h-[20%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
              <div className="w-[10%] h-[30%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
              <div className="w-[10%] h-[45%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
              <div className="w-[10%] h-[35%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
              <div className="w-[14%] h-full bg-gradient-to-t from-[#8a8a8a] to-white rounded-md shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10 relative"></div>
              <div className="w-[10%] h-[60%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
              <div className="w-[10%] h-[40%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
              <div className="w-[10%] h-[15%] bg-[#363638] rounded-md custom-stripes opacity-70"></div>
            </div>

            {/* Chart Labels */}
            <div className="absolute bottom-1 left-6 right-6 flex justify-between text-[#808080] text-xs font-medium px-2">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
            </div>
          </div>

        </div>

        {/* Right Column (Profiles & Chat) */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-[#242426] rounded-[32px] p-8 shadow-xl flex-1 flex flex-col border border-white/5">
            {/* Header / Adrian Profile */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
              <div className="relative">
                <Image src="/assets/avatars/adrian.png" alt="Adrian" width={64} height={64} className="rounded-full bg-peach-300 border-2 border-[#242426]" />
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#242426]"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Adrian Ward</h3>
                <p className="text-[#a0a0a0] text-sm">@adrianward</p>
              </div>
              <button className="ml-auto flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
                Follow <i className="ri-add-line"></i>
              </button>
            </div>

            {/* Private Message Task Details */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Private Message</h2>
              <button className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors">
                Others <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-4 mb-8 text-sm">
              <div className="text-[#808080]">Assign</div>
              <div className="flex items-center gap-2 font-medium">
                <Image src="/assets/avatars/jane.png" alt="Jane" width={24} height={24} className="rounded-full bg-purple-300" />
                Jane Davidson
              </div>

              <div className="text-[#808080]">Date</div>
              <div className="font-medium text-white">24 March 2023</div>

              <div className="text-[#808080]">Tags</div>
              <div className="flex gap-2">
                <span className="bg-[#f2baba] text-[#8c3535] px-2 py-0.5 rounded-md text-xs font-semibold">Design</span>
                <span className="bg-[#baccf2] text-[#354f8c] px-2 py-0.5 rounded-md text-xs font-semibold">Moodboard</span>
              </div>
            </div>

            {/* Chat Input Field */}
            <div className="bg-[#2a2a2c] rounded-2xl p-4 shadow-inner mb-8 border border-white/5">
              <div className="flex items-center gap-1 text-[#e0e0e0] opacity-90 mb-6 font-medium">
                Hello, let&apos;s meet <span className="bg-[#4a4a4d] px-1 rounded mx-1 italic">together</span> |
              </div>
              <div className="flex justify-between items-end">
                <div className="flex bg-white text-black rounded-lg overflow-hidden shadow">
                  <button className="w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-100">B</button>
                  <button className="w-8 h-8 flex items-center justify-center italic hover:bg-gray-100">i</button>
                  <button className="w-8 h-8 flex items-center justify-center underline hover:bg-gray-100">U</button>
                  <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 line-through">S</button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#a0a0a0] hover:bg-white/20"><i className="ri-more-fill"></i></button>
                  <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#a0a0a0] hover:bg-white/20"><i className="ri-add-line"></i></button>
                  <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
                  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c178db] to-[#ea7ecc] flex items-center justify-center text-white shadow-lg hover:opacity-90">
                    <i className="ri-send-plane-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Statistics List */}
            <div className="border-t border-white/10 pt-6 mt-auto">
              <h3 className="text-lg font-medium mb-6">Statistics of other users</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src="/assets/avatars/finn.png" alt="Finn" width={48} height={48} className="rounded-full bg-blue-300" />
                  <div>
                    <h4 className="font-semibold text-white">Finn Foste</h4>
                    <p className="text-sm text-[#a0a0a0]">@finnfoste</p>
                  </div>
                  <button className="ml-auto text-sm font-medium hover:text-white/80 flex items-center">
                    View <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <Image src="/assets/avatars/evie.png" alt="Evie" width={48} height={48} className="rounded-full bg-amber-100" />
                  <div>
                    <h4 className="font-semibold text-white">Evie Bennet</h4>
                    <p className="text-sm text-[#a0a0a0]">@eviebennet</p>
                  </div>
                  <button className="ml-auto text-sm font-medium hover:text-white/80 flex items-center">
                    View <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required style for the custom stripes in the chart */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-stripes {
          background-image: repeating-linear-gradient(
            -45deg,
            #444446,
            #444446 6px,
            #363638 6px,
            #363638 12px
          );
        }
      `}} />
    </div>
  );
}