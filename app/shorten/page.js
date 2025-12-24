"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        seturl("")
        setshorturl("")
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        alert(result.message)
    })
    .catch((error) => console.error(error));
  }

  return (
    <div className='min-h-[82.8vh] pt-28'>
      <div className='mx-auto max-w-xl bg-purple-200 p-8 rounded-xl flex flex-col gap-5'>
        <h1 className='text-center font-bold text-2xl'>Generate your Short URLs</h1>
        <div className='flex flex-col gap-2'>
          <input type="text"
          value={url}
          className='px-4 py-2 focus:outline-blue-500 rounded-md bg-white border border-gray-300'
          placeholder='Enter your URL'
          onChange={(e) => seturl(e.target.value)}/>

          <input type="text" 
          value={shorturl}
          className='px-4 py-2 focus:outline-blue-500 rounded-md bg-white border border-gray-300'
          placeholder='Enter your prefered short URL text'
          onChange={(e) => setshorturl(e.target.value)}/>

          <button className='bg-purple-500 rounded-md shadow-lg px-3 py-1 text-white my-4' onClick={generate}>Generate</button>
        </div>

        {generated && <> <span className='font-bold text-lg'>Your Link </span> <code> <Link className='hover:underline' target="_blank" href={generated}>{generated}</Link>
          </code> </>}
      </div>
    </div>
  )
}

export default Shorten
