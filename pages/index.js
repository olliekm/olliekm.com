import Link from "next/link"

export default function Home({filtered}) {
  return (
    <>
        <div className="w-full relative h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] border-y-[1px] border-white/10 from-indigo-800/50 via-violet-600/10 to-sky-900/0 flex justify-center items-center">
          <h1 className="text-white font-normal text-3xl text-center font-mono">Hi, I'm <br /> <b className="font-bold text-8xl">oliver</b></h1>
          <div className="absolute bottom-0  p-2">
            <div className="bg-black/50 outline outline-1 text-white outline-white/10 flex p-3 rounded-3xl h-20 items-center w-48 space-x-4">
              <div className="overflow-hidden w-12 h-12 rounded-3xl"><img className=" " src="https://i.imgur.com/NyGVvH7.gif" alt="" /></div>
              <div className="flex flex-col">
                <h1 className="text-xl">{filtered.username}</h1>
                <div className="flex flex-col text-sm">
                  <h2>Solved: {filtered.problem_count}</h2>
                  <h2>Points: {Math.round(filtered.performance_points)}pp</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto sm:flex-row flex-col flex items-center px-20 py-10">
          <h1 className="text-white text-5xl font-bold font-mono">Follow my development journey!</h1>
          <p className="text-lg sm:pl-4 sm:pt-0 pt-4 text-white/80 italic">"Join me on my coding journey as I share the ups and downs of my development process. As a self-taught developer, I hope to inspire others to pursue their passion for coding. Let's grow together!" <br />- ChatGPT (2023)</p>
        </div>
        <div className="w-full overflow-hidden relative pl-10">
          <div className="flex overflow-x-auto p-2 space-x-4">
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-r from-gray-700/0 via-gray-black to-black"></div>
            <div className="h-96 flex flex-col justify-between w-64 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
              <div className="">
                <h1 className="text-2xl font-semibold text-white/90 mb-2 hover:underline decoration-indigo-900 cursor-pointer">Learning python for competitive programming 🐍</h1>
                <p className="text-md italic mb-2">Why I chose python, why I'm switching...</p>
                <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
              </div>
              <div className=" bg-indigo-600 p-2 w-max rounded-md px-3">
                Competitive programming
              </div>
            </div>
            <div className="h-96 flex flex-col justify-between w-64 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
              <div className="">
                <h1 className="text-2xl font-semibold text-white/90 mb-2 hover:underline decoration-cyan-900 cursor-pointer">Throwing CCC & Fermat 📄</h1>
                <p className="text-md italic mb-2">What happened in my first math & competitive programming contests...</p>
                <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
              </div>
              <div className=" bg-cyan-600 p-2 w-max rounded-md px-3">
                Academics
              </div>
            </div>
            <div className="h-96 flex flex-col justify-between w-64 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
              <div className="">
                <h1 className="text-2xl font-semibold text-white/90 mb-2 hover:underline decoration-pink-900 cursor-pointer">I'm going OVERKILL 🚀</h1>
                <p className="text-md italic mb-2">Making a completely overkill blog website. why? why not...</p>
                <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
              </div>
              <div className=" bg-pink-600 p-2 w-max rounded-md px-3">
                Web development
              </div>
            </div>
            <div className="h-96 w-64 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl"></div>
            <div className="h-96 w-64 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl"></div>
          </div>
        </div>
        <div className="h-min w-full pt-4 overflow-hidden">
          <div className="h-[1px] w-full bg-white/10 my-2"></div>
          <div className="p-10 text-white">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="text-4xl font-mono font-bold">A bit more about me...</h1>
                <h2 className="text-3xl font-mono italic text-white/60">Some of my goals:</h2>
              </div>
              {/* <div className="">
                <Link href={'/goals'}><button>See my other goals</button></Link>
              </div> */}
            </div>
            <div className="w-full md:flex hidden flex-row  py-8 space-x-4 items-center justify-center">
              <div className="h-80 w-64 flex group overflow-hidden relative flex-col  shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
                <div className="">
                  <h1 className="text-3xl font-bold">#2</h1>
                </div>
                <div className="">
                  <h1 className="text-3xl font-mono ">Get a high graduating average</h1>
                </div>
                <div className="absolute -top-2 left-0 opacity-0 w-full h-full group-hover:opacity-20 duration-200">
                  <img className="w-full h-full" src="https://1.bp.blogspot.com/-FW7omWxUWRQ/XtUD5bm11VI/AAAAAAAAKnQ/YfQuBnritZMTfRFnNEe8NNxSEQd_anoUgCLcBGAsYHQ/s1600/Funny%2BCat%2BGIF%2B%25E2%2580%25A2%2BSerious%2Bcat%2Bis%2Bready%2Bto%2Bgo%2Bto%2Bschool%2Bwith%2Bhis%2Bhat%2Band%2Bsmall%2Byellow%2Bbag.gif" alt="" />
                </div>
              </div>
              <div className="h-96 flex relative group overflow-hidden flex-col w-80 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
                <div className="">
                  <h1 className="text-5xl font-bold">#1</h1>
                </div>
                <div className="">
                  <h1 className="text-4xl font-mono ">Become a software engineer</h1>
                </div>
                <div className="absolute -top-2 left-0 opacity-0 w-full h-full group-hover:opacity-20 duration-200">
                  <img className="w-full h-full" src="https://media1.giphy.com/media/T3rgaqd1vT6idUS12Q/giphy.gif" alt="" />
                </div>
              </div>
              <div className="h-80 relative group overflow-hidden flex flex-col w-64 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
                <div className="">
                  <h1 className="text-3xl font-bold">#3</h1>
                </div>
                <div className="">
                  <h1 className="text-3xl font-mono">Improve at academics and software development</h1>
                </div>
                <div className="absolute -top-2 left-0 opacity-0 w-full h-full group-hover:opacity-20 duration-200">
                  <img className="w-full h-full" src="https://media.tenor.com/VQfP85vojrEAAAAM/study-reading.gif" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full md:hidden flex flex-col py-8 space-y-5 items-center justify-center">
              
              <div className="h-96 flex relative group overflow-hidden flex-col w-full shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
                <div className="">
                  <h1 className="text-5xl font-bold">#1</h1>
                </div>
                <div className="">
                  <h1 className="text-4xl font-mono ">Become a software engineer</h1>
                </div>
                <div className="absolute -top-2 left-0 opacity-0 w-full h-full group-hover:opacity-20 duration-200">
                  <img className="w-full h-full" src="https://media1.giphy.com/media/T3rgaqd1vT6idUS12Q/giphy.gif" alt="" />
                </div>
              </div>
              <div className="h-80 w-4/5 flex group overflow-hidden relative flex-col  shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
                <div className="">
                  <h1 className="text-3xl font-bold">#2</h1>
                </div>
                <div className="">
                  <h1 className="text-3xl font-mono ">Get a high graduating average</h1>
                </div>
                <div className="absolute -top-2 left-0 opacity-0 w-full h-full group-hover:opacity-20 duration-200">
                  <img className="w-full h-full" src="https://1.bp.blogspot.com/-FW7omWxUWRQ/XtUD5bm11VI/AAAAAAAAKnQ/YfQuBnritZMTfRFnNEe8NNxSEQd_anoUgCLcBGAsYHQ/s1600/Funny%2BCat%2BGIF%2B%25E2%2580%25A2%2BSerious%2Bcat%2Bis%2Bready%2Bto%2Bgo%2Bto%2Bschool%2Bwith%2Bhis%2Bhat%2Band%2Bsmall%2Byellow%2Bbag.gif" alt="" />
                </div>
              </div>
              <div className="h-80 relative group overflow-hidden flex flex-col w-4/5 shrink-0 outline outline-[1px] outline-white/10 rounded-2xl p-6 text-white/80 space-y-2">
                <div className="">
                  <h1 className="text-3xl font-bold">#3</h1>
                </div>
                <div className="">
                  <h1 className="text-3xl font-mono">Improve at academics and software development</h1>
                </div>
                <div className="absolute -top-2 left-0 opacity-0 w-full h-full group-hover:opacity-20 duration-200">
                  <img className="w-full h-full" src="https://media.tenor.com/VQfP85vojrEAAAAM/study-reading.gif" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white/10 my-2 "></div>
        <div className="h-auto p-10 text-white w-full cursor-default over">

          <h1 className="text-4xl font-mono font-bold">Even more about me</h1>
          <h2 className="text-2xl font-mono italic text-white/60">(this guy really likes to talk about himself)</h2>
          <div className="flex pt-10 text-2xl justify-evenly items-center font-mono pb-10">
            <div className="flex flex-col text-center space-y-4">
              <h1 className="text-9xl">🏫</h1>
              <small>I'm in high school</small>
            </div>
            <div className="flex flex-col text-center space-y-4">
              <h1 className="text-9xl">🍁</h1>              
              <small>I'm Canadian</small>
            </div>
            <div className="flex flex-col text-center space-y-4">
              <h1 className="text-9xl">🎧</h1>
              <small>I love music</small>
            </div>
          </div>
        </div>
        </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dmoj.ca/api/v2/user/olliekm`)
  const data = await res.json()
  let filtered = data.data.object
  // Pass data to the page via props
  return { props: { filtered } }
}
