import React, {useState, useEffect, useRef} from 'react'
import { useRouter } from 'next/router'
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from '../utils/firebase';
import Head from 'next/head'
import Link from 'next/link';

function Posts() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortby, setSortby] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const router = useRouter()
  const [hasRendered, setHasRendered] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasFetched, setHasFetched] = useState(false)

  const tags = {
    'Web development': 'bg-pink-600',
    'Academics': 'bg-cyan-600',
    'Competitive programming': 'bg-indigo-600'
  }
  
  useEffect(() => {
    if(hasRendered){
      if(sortby !== ''){
        router.query.sort = sortby
        router.push(router)
      } else {
        router.push('/posts')
      }
    } else {
      setHasRendered(true)
    }
  }, [sortby]);
  
  useEffect(() => {
    if(hasRendered){
      if(selectedTag !== ''){
        router.query.tag = selectedTag
        router.push(router)
      } else {
        router.push({ 
          pathname: '/posts', 
          undefined, 
        })
      }
    } else {
      setHasRendered(true)
    }
  }, [selectedTag]);
  
  useEffect(() => {
    if(!router.isReady) return
    setHasFetched(false)
    getAll()
  }, [selectedTag, sortby])
  

  useEffect(() => {
    if(!hasRendered) return
    if(router.query.tag !== undefined){
      setSelectedTag(router.query.tag)
    }
    if(router.query.sort !== undefined){
      setSortby(router.query.sort)
    }
  }, [router.query, hasRendered])

  

  async function getAll() {
    console.log('fetching')
    setPosts([])
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if(selectedTag !== ''){
        if(doc.data().tag == selectedTag){
          console.log('3')
          setPosts(posts => [...posts, doc.data()])
        }
      } else {
        setPosts(posts => [...posts, doc.data()])
      }
    });
    setHasFetched(true)


  }

  


  const initialValues = {
    order: query.order || 'all',
    tag: query.tag || 'all'
  }

  return (
    <div className='min-h-screen w-full font-sans'>
        <Head>
          <title>Posts {selectedTag == '' ? `` : `- ${selectedTag}`}</title>
        </Head>
        <div className="w-full h-48 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] border-y-[1px] border-purple-100/10 from-purple-600/50 via-purple-400/10 to-sky-900/0 flex justify-center items-center">
          <h1 className="text-white font-normal text-3xl text-center font-mono">My blog posts</h1>
        </div>
        <div className="w-full h-screen relative">
          <div className="sticky top-0 w-full h-auto z-20 bg-black">
            
            <div className="w-full flex justify-between z-20 bg-black">
              <div className="p-4 hidden md:block">
                <input type="text" placeholder='Search' className='rounded-full px-6 py-3 border-1 border border-white/10 bg-black outline-none text-white' />
              </div>
              <div className="p-4 md:hidden flex items-center">
                <button className="p-4 border-1 border border-white/10 bg-black rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-white/40 w-5 h-5' viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center z-10">
                <div className="p-4 flex-1">
                  {
                    selectedTag !== '' &&
                    <button disabled className={` ${tags[selectedTag]} text-white p-2 w-max rounded-md px-3 shrink-0`} onClick={() => {setSelectedTag('Web development')}}>
                      {selectedTag}
                    </button>
                  }
                </div>
                <div className="w-[1px] h-full bg-white/10"></div>
                <div className="p-4 w-max">
                  <button className='py-3 px-6 rounded-full border-[1px] border-white/10 text-white' onClick={() => setFiltersOpen(!filtersOpen)}>
                    {
                      sortby == '' ? 
                      'Sort by':sortby
                    }
                  </button>
                </div>
              </div>
            </div>


            <div className="h-[1px] w-full bg-white/10"></div>
            <div className={`p-4 flex items-center duration-150 ${filtersOpen ? '-translate-y-0 opacity-100':'-translate-y-full opacity-0 hidden'} z-10`}>
              <div className="text-white flex-1 flex items-center space-x-4 overflow-x-auto">
                <button className=" bg-pink-600 p-2 w-max rounded-md px-3 shrink-0" onClick={() => {setSelectedTag('Web development')}}>
                  Web development
                </button>
                <button className=" bg-cyan-600 p-2 w-max rounded-md px-3 shrink-0" onClick={() => {setSelectedTag('Academics')}}>
                  Academics
                </button>
                <button className=" bg-indigo-600 p-2 w-max rounded-md px-3 shrink-0" onClick={() => {setSelectedTag('Competitive programming')}}>
                  Competitive programming
                </button>
              </div>
              <div className="w-auto flex items-center text-white space-x-2 justify-end px-4">
                <button className={`${sortby == 'Newest'?'border-white/100':'border-white/10'} border border-1 px-5 py-2 rounded-full`} onClick={() => {setSortby('Newest')}}>Newest</button>
                <button className={`${sortby == 'Oldest'?'border-white/100':'border-white/10'} border border-1 px-5 py-2 rounded-full`} onClick={() => {setSortby('Oldest')}}>Oldest</button>
                <button className='border-1 border border-red-600/50 px-5 py-2 rounded-full' onClick={() => {setSortby(''); setSelectedTag(''); router.push('/posts')}}>Reset</button>

              </div>
            </div>
            {
              filtersOpen &&
              <div className="h-[1px] w-full bg-white/10 mb-2"></div>
            }
            <div className="h-full p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {
                posts.length > 0 ?(
                  posts.map((post, i) => (
                    <Link key={i} href={'/post/'+post.title}>
                    <div className=" h-72 justify-between flex flex-col shrink-0 outline outline-[1px] outline-white/10 rounded-2xl text-white p-4">
                      <div className="">
                        <h1 className="text-xl font-semibold text-white/90 mb-2 hover:underline decoration-indigo-900 cursor-pointer">{post.title}</h1>
                        <p className="text-md italic text-sm mb-2">{post.description}</p>
                        <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
                      </div>
                      <div className={` ${tags[post.tag]} p-2 w-max rounded-md px-3 text-sm`}>
                        {post.tag}
                      </div>
                    </div>
                    </Link>
                  ))
                ):(
                  <div className="h-full w-full flex justify-center items-center row-span-full col-span-full">
                    <h1 className='text-white text-3xl text-center my-32 font-mono'>{hasFetched ? 'There are no posts that meet the filtering criteria':'Loading...'}</h1>
                  </div>
                )
              }
              {/* <div className=" h-72 justify-between flex flex-col shrink-0 outline outline-[1px] outline-white/10 rounded-2xl text-white p-4">
                <div className="">
                  <h1 className="text-xl font-semibold text-white/90 mb-2 hover:underline decoration-indigo-900 cursor-pointer">Learning python for competitive programming 🐍</h1>
                  <p className="text-md italic text-sm mb-2">Why I chose python, why I'm switching...</p>
                  <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
                </div>
                <div className=" bg-indigo-600 p-2 w-max rounded-md px-3 text-sm">
                  Competitive programming
                </div>
              </div>
              <div className=" justify-between flex flex-col shrink-0 outline outline-[1px] outline-white/10 rounded-2xl text-white p-4">
                <div className="">
                  <h1 className="text-xl font-semibold text-white/90 mb-2 hover:underline decoration-indigo-900 cursor-pointer">Learning python for competitive programming 🐍</h1>
                  <p className="text-md italic text-sm mb-2">Why I chose python, why I'm switching...</p>
                  <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
                </div>
                <div className=" bg-indigo-600 p-2 w-max rounded-md px-3 text-sm">
                  Competitive programming
                </div>
              </div>
              <div className="h-72 justify-between flex flex-col shrink-0 outline outline-[1px] outline-white/10 rounded-2xl text-white p-4">
                <div className="">
                  <h1 className="text-xl font-semibold text-white/90 mb-2 hover:underline decoration-indigo-900 cursor-pointer">Learning python for competitive programming 🐍</h1>
                  <p className="text-md italic text-sm mb-2">Why I chose python, why I'm switching...</p>
                  <button className="outline outline-[1px] outline-white/10 rounded-md px-2 py-2">See more</button>
                </div>
                <div className=" bg-indigo-600 p-2 w-max rounded-md px-3 text-sm">
                  Competitive programming
                </div>
              </div> */}
            </div>

          </div>
        </div>

    </div>
  )
}

export default posts