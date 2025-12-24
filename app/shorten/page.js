"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
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
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }


    return (
      <div className="min-h-[82.8vh] pt-28">
        <div className="mx-auto max-w-xl bg-purple-200 p-8 rounded-xl flex flex-col gap-5">
          <h1 className="text-center font-bold text-2xl">
            Generate your Short URLs
          </h1>

          <input
            value={url}
            onChange={(e) => seturl(e.target.value)}
            className="px-4 py-2 rounded-md border focus:outline-purple-600"
            placeholder="Enter your URL"
          />

          <input
            value={shorturl}
            onChange={(e) => setshorturl(e.target.value)}
            className="px-4 py-2 rounded-md border focus:outline-purple-600"
            placeholder="Enter your preferred short URL text"
          />

          <button
            onClick={generate}
            className="bg-purple-500 text-white rounded-md py-2 cursor-pointer font-semibold"
          >
            Generate
          </button>

          {generated && (
            <>
              <span className="font-bold text-lg">Your Link</span>
              <Link href={generated} target="_blank" rel="noopener noreferrer" className="underline">
                {generated}
              </Link>
            </>
          )}
        </div>
      </div>
    )
}

export default Shorten