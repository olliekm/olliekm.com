import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";
import { useRouter } from 'next/router'
import { collection, doc, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../../utils/firebase';
import remarkGfm from 'remark-gfm'
import Head from 'next/head';

function PostReadingPage() {
    const router = useRouter()
    const { id } = router.query
    const [postData, setPostData] = useState()
    async function getData(){
        console.log(id)
        const q = query(collection(db, "posts"), where("title", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setPostData(doc.data())
          console.log(doc.data())
          document.getElementById('space').innerHTML = doc.data().text
        });
        
    }

    useEffect(()=>{
        if(!router.isReady) return;
        getData()

    }, [router.isReady]);
    

  return (
    <div className='min-h-screen text-white h-auto py-8 px-4 w-full'>
        <Head>
          <title>olliekm - {postData?.title}</title>
        </Head>
        <h1 className='text-4xl font-bold mb-16'>{postData?.title}</h1>
        <article className='prose prose-md font-sans prose-invert ' id='space'>
        </article>
    </div>
  )
}

export default PostReadingPage