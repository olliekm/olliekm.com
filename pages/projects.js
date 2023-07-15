import React from 'react'

function projects() {
  return (
    <div className='min-h-screen h-auto text-white w-full'>
        <div className="w-full h-48 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] border-y-[1px] border-purple-100/10 from-blue-600/50 via-blue-400/10 to-sky-900/0 flex justify-center items-center">
          <h1 className="text-white font-normal text-3xl text-center font-mono">My work</h1>
        </div>
        <div className="h-auto w-full">
            <div className="flex sm:flex-row flex-col h-auto px-16 py-8 bg-gradient-to-l from-emerald-700 via-black to-black">
                <div className="flex flex-col text-start sm:w-1/2 w-full justify-center sm:mb-0 mb-4">
                    <h1 className='text-4xl font-semibold underline underline-offset-[2px] decoration-emerald-500 flex'>
                        Kelp
                        <a href="https://kelp-ics-3-u.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-gray-500' viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                        </a>
                    </h1>
                    <small className='text-xl mt-4 mb-2'>Technologies used:</small>
                    <div className="flex flex-wrap gap-2 items-start">
                        <div className="bg-blue-500 px-2 py-1 rounded-lg">React.js</div>
                        <div className="bg-white text-black px-2 py-1 rounded-lg">Next.js</div>
                        <div className="bg-blue-300 px-2 py-1 rounded-lg">TailwindCSS</div>
                        <div className="bg-red-500 px-2 py-1 rounded-lg">Firebase</div>
                    </div>
                    <p className='mt-4 pr-4'>
                        An online forum for students learning to program. Includes features such as: user profiles, posting, and user authentication.
                    </p>
                </div>
                <div className="sm:w-1/2 w-full aspect-video bg-[url('https://i.imgur.com/pUDmVfD.png')] bg-top bg-[length:125%] hover:bg-[length:130%] duration-100 border-[1px] border-white/20 rounded-xl"></div>
            </div>
            <div className="h-[1px] w-full bg-white/10 "></div>
            <div className="flex sm:flex-row flex-col h-auto px-16 py-8 bg-gradient-to-r from-purple-100 via-black to-black">
                <div className="sm:mb-0 mb-4 sm:w-1/2 w-full aspect-video bg-[url('https://i.imgur.com/jXxluoB.png')] bg-center bg-[length:125%] hover:bg-[length:130%] duration-100 border-[1px] border-white/20 rounded-xl"></div>
                <div className="flex flex-col text-end sm:w-1/2 w-full">
                    <h1 className='text-4xl font-semibold underline underline-offset-[2px] decoration-purple-100 flex justify-end'>
                        <a href="https://obsessive.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-gray-500' viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                        </a>    
                        Obsessive
                    </h1>
                    <small className='text-xl mt-4 mb-2'>Technologies used:</small>
                    <div className="flex flex-wrap gap-2 justify-end">
                        <div className="bg-blue-500 px-2 py-1 rounded-lg">React.js</div>
                        <div className="bg-white text-black px-2 py-1 rounded-lg">Next.js</div>
                        <div className="bg-blue-300 px-2 py-1 rounded-lg">TailwindCSS</div>
                        <div className="bg-green-500 px-2 py-1 rounded-lg">Supabase</div>
                    </div>
                    <p className='mt-4 pl-4'>
                        A lifestyle website centered around hobbiests of audio, coffee, and cars.
                    </p>
                </div>
            </div>
            <div className="h-[1px] w-full bg-white/10 "></div>
            <div className="flex sm:flex-row flex-col h-auto px-16 py-8 bg-gradient-to-l from-indigo-700 via-black to-black">
                <div className="flex flex-col text-start sm:w-1/2 w-full justify-center sm:mb-0 mb-4">
                    <h1 className='text-4xl font-semibold underline underline-offset-[2px] decoration-indigo-500 flex '>
                        olliekm.com
                        <a href="https://olliekm.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-gray-500' viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                        </a>    
                    </h1>
                    <small className='text-xl mt-4 mb-2'>Technologies used:</small>
                    <div className="flex flex-wrap gap-2 items-start">
                        <div className="bg-blue-500 px-2 py-1 rounded-lg">React.js</div>
                        <div className="bg-white text-black px-2 py-1 rounded-lg">Next.js</div>
                        <div className="bg-blue-300 px-2 py-1 rounded-lg">TailwindCSS</div>
                        <div className="bg-red-500 px-2 py-1 rounded-lg">Firebase</div>
                    </div>
                    <p className='mt-4 pr-4'>
                        My personal website includes a a blog with markdown parsing and sorting features.
                    </p>
                </div>
                <div className="sm:w-1/2 w-full aspect-video bg-[url('https://i.imgur.com/G1GyDNK.png')] bg-top bg-[length:200%] hover:bg-[length:220%] duration-100 border-[1px] border-white/20 rounded-xl"></div>
            </div>
            <div className="h-[1px] w-full bg-white/10 "></div>
            <div className="flex sm:flex-row flex-col h-auto px-16 py-8 bg-gradient-to-r from-teal-700 via-black to-black">
                <div className="sm:w-1/2 w-full aspect-video sm:mb-0 mb-4 bg-[url('https://media.tenor.com/Qr-XdO8yvJkAAAAM/under-construction.gif')] bg-center bg-[length:100%] hover:bg-[length:120%] duration-100 border-[1px] border-white/20 rounded-xl"></div>
                <div className="flex flex-col text-end sm:w-1/2 w-full">
                    <h1 className='text-4xl font-semibold underline underline-offset-[2px] decoration-teal-500'>Tides</h1>
                    <small className='text-xl mt-4 mb-2'>Technologies used:</small>
                    <div className="flex flex-wrap gap-2 justify-end">
                        <div className="bg-blue-500 px-2 py-1 rounded-lg">React.js</div>
                        <div className="bg-white text-black px-2 py-1 rounded-lg">Next.js</div>
                        <div className="bg-blue-300 px-2 py-1 rounded-lg">TailwindCSS</div>
                        <div className="bg-red-500 px-2 py-1 rounded-lg">Firebase</div>
                    </div>
                    <p className='mt-4 pl-4'>
                        Bringing school clubs online! Tides creates an online space for school clubs to better interact with their members and makes it easier for students to balance extracuricullar activities
                    </p>
                </div>
            </div>
            <div className="h-[1px] w-full bg-white/10 "></div>
            <div className="flex sm:flex-row flex-col h-auto px-16 py-8 bg-gradient-to-l from-rose-700 via-black to-black">
                <div className="flex flex-col text-start sm:w-1/2 w-full sm:mb-0 mb-4">
                    <h1 className='text-4xl font-semibold underline underline-offset-[2px] decoration-rose-500'>Competitive Programming</h1>
                    <small className='text-xl mt-4 mb-2'>Technologies used:</small>
                    <div className="flex flex-wrap gap-2 items-start">
                        <div className="bg-yellow-500 px-2 py-1 rounded-lg">Python</div>
                    </div>
                    <p className='mt-4 pr-4'>
                        I learned Python in order to practice and improve at algorithmic thinking.
                    </p>
                </div>
                <div className="sm:w-1/2 w-full aspect-video bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWYxN3U2dXc1NGY2ejhjdDRlZHBxeWx0ZWNwdGVwN2JsbHpuOHBzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/o0vwzuFwCGAFO/giphy.gif')] bg-center bg-[length:100%] hover:bg-[length:120%] duration-100 border-[1px] border-white/20 rounded-xl"></div>
            </div>
        </div>
    </div>
  )
}

export default projects