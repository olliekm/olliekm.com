import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Layout({children}) {
    const router = useRouter()
  return (
    <div className='h-auto bg-gradient-to-r from-black via-gray-900 to-black min-h-screen w-full font-["Open_Sans"] font-sans'>
        <div className="absolute top flex justify-center w-full h-auto sm:p-5 p-3 z-20 sm:text-xl text-md shrink-0 whitespace-nowrap">
            <div className={`rounded-full border-[1px] bg-black/70 backdrop-blur-sm space-x-2 border-white/20 0 sm:p-2 p-1`}>
            <Link href={'/'}><button className={router.pathname == "/" ? "sm:px-8 px-4 py-3 font-semibold rounded-full hover:outline-none outline outline-[1px] hover:bg-white/10 hover:text-white text-indigo-300 cursor-pointer duration-200" : "sm:px-8 px-4 py-3 font-semibold text-white bg-black rounded-full hover:bg-white/10 hover:text-indigo-300 cursor-pointer duration-200"} >ollie</button></Link>
            <Link href={'/posts'}><button className={router.pathname == "/posts" ? "sm:px-8 px-4 py-3 font-semibold rounded-full hover:outline-none outline outline-[1px] hover:bg-white/10 hover:text-white text-purple-300 cursor-pointer duration-200" : "sm:px-8 px-4 py-3 font-semibold text-white bg-black rounded-full hover:bg-white/10 hover:text-purple-300 cursor-pointer duration-200"} >posts</button></Link>
            <Link href={'/projects'}><button className={router.pathname == "/projects" ? "sm:px-8 px-4 py-3 font-semibold rounded-full hover:outline-none outline outline-[1px] hover:bg-white/10 hover:text-white text-blue-300 cursor-pointer duration-200" : "sm:px-8 px-4 py-3 font-semibold text-white bg-black rounded-full hover:bg-white/10 hover:text-blue-300 cursor-pointer duration-200"} >projects</button></Link>
            <Link href={'/resume'}><button className={router.pathname == "/resume" ? "sm:px-8 px-4 py-3 font-semibold rounded-full hover:outline-none outline outline-[1px] hover:bg-white/10 hover:text-white text-emerald-300 cursor-pointer duration-200" : "sm:px-8 px-4 py-3 font-semibold text-white bg-black rounded-full hover:bg-white/10 hover:text-emerald-300 cursor-pointer duration-200"} >resume</button></Link>
            </div>
        </div>
        <div className="min-h-screen w-full flex justify-center">
        <div className="xl:w-1/2 xl:min-w-[60rem] w-full h-full outline outline-[1px] outline-white/10 flex flex-col items-center pt-14 space-y-6 bg-black">
            <div className="h-[1px] w-full bg-white/10 mb-10"></div>
            {children}
            <div className=" w-full relative">
            <div className="w-full absolute bottom-0 flex-col justify-center text-gray-200 py-2 border-t-[1px] border-white/10 bg-black">
                <div className="flex justify-end pr-3">
                <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer">github</a>
                <div className="px-2">|</div>
                <a href="http://overkill.olliekm.com" target="_blank" rel="noopener noreferrer">OVERKILL💀</a>
                <div className="px-2">|</div>
                <small className="">© 2023 Oliver Kwun-Morfitt. All rights reserved.</small>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>  
  )
}

export default Layout