import React from 'react'
import Head from 'next/head'
function resume() {
  return (
    <div className='min-h-screen h-auto mb-30'>
      <Head>
        <title>olliekm | resume</title>
      </Head>
      <iframe src="https://drive.google.com/file/d/1XTO5qzjcRgxYKh8rOJhdqUqvsuviB1Hi/preview" className='w-full h-screen aspect-[2/3]
      ' allow="autoplay"></iframe>
    </div>
  )
}

export default resume