{/* Apple-style modal for Vitamin B only */}
      {showModal && (supplement.id === 'vitamin-b-modal' || supplement.id === 'vitamin-b-modal') && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl ring-1 ring-black/10 max-w-6xl w-half px-12 md:px-16 py-16 md:py-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Close"
              className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
            >
              <span className="text-xl">Ã—</span>
            </button>

            <p className="text-xs font-semibold tracking-wider uppercase tracking-wider underline text-gray-500 text-center mb-3">
              The energy vitamins
            </p>

            <p className="text-2xl md:text-3xl font-bold leading-snug text-center text-black max-w-2xl mx-auto md:mb-10">
              Often not enough in modern diets, yet vital for steady{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">energy and focus</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Benefits</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="before:content-['â€¢'] before:mr-2 before:text-gray-500">Converts food into energy</li>
                  <li className="before:content-['â€¢'] before:mr-2 before:text-gray-500">Supports focus & clarity</li>
                  <li className="before:content-['â€¢'] before:mr-2 before:text-gray-500">Helps reduce fatigue</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Timeline</p>
                <p className="text-sm text-gray-700">Often felt in 1â€“2 weeks</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Safety</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="before:content-['â€¢'] before:mr-2 before:text-gray-500">Generally well-tolerated</li>
                  <li className="before:content-['â€¢'] before:mr-2 before:text-gray-500">Check interactions if on meds</li>
                </ul>
              </div>
            </div>
            

            {/* Retail pills (unchanged) */}
            <div className="mt-2 md:mt-8">
              <div className="bg-gray-50 rounded-lg p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-center gap-4"></div>

                <div className="mt-6 md:mt-1">
                  <div className="bg-gray-50 rounded-lg px-5 py-2 md:px-6 md:py-3">
                    <p className="text-sm font-semibold italic tracking-wide text-gray-500 text-center mb-2">Take me there.</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                    <a href="https://www.hollandandbarrett.com/" target="_blank" rel="noopener noreferrer" aria-label="Holland & Barrett" className="inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 motion-reduce:transition-none">
                      <img src="images/HBPILL.png" alt="Holland & Barrett" width="80" height="50" className="transition duration-150 ease-out cursor-pointer select-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] motion-safe:hover:brightness-105 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]" draggable={false}/>
                    </a>
                    <a href="https://www.iherb.com/" target="_blank" rel="noopener noreferrer" aria-label="iHerb" className="inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 motion-reduce:transition-none">
                      <img src="images/iherbpill.png" alt="iHerb" width="80" height="50" className="transition duration-150 ease-out cursor-pointer select-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] motion-safe:hover:brightness-105 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]" draggable={false}/>
                    </a>
                    <a href="https://healf.com/en-uk/" target="_blank" rel="noopener noreferrer" aria-label="Healf" className="inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 motion-reduce:transition-none">
                      <img src="images/healfpill.png" alt="Healf" width="80" height="50" className="transition duration-150 ease-out cursor-pointer select-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] motion-safe:hover:brightness-105 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]" draggable={false}/>
                    </a>
                    <a href="https://www.thorne.com/" target="_blank" rel="noopener noreferrer" aria-label="Thorne" className="inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 motion-reduce:transition-none">
                      <img src="images/thornepill.png" alt="Thorne" width="80" height="50" className="transition duration-150 ease-out cursor-pointer select-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] motion-safe:hover:brightness-105 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]" draggable={false}/>
                    </a>
                    <a href="https://www.amazon.co.uk/" target="_blank" rel="noopener noreferrer" aria-label="Amazon UK" className="inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 motion-reduce:transition-none">
                      <img src="images/amazonpill.png" alt="Amazon UK" width="80" height="50" className="transition duration-150 ease-out cursor-pointer select-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] motion-safe:hover:brightness-105 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]" draggable={false}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>