"use client";
import Link from "next/link";
import { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = async () => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        alert(data.error || data.message || "Failed to generate URL");
        return;
      }

      setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${data.shorturl}`);
      seturl("");
      setshorturl("");
      alert("Short URL generated successfully!");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };


  return (
    <div className="min-h-[82.8vh] pt-28">
      <div className="mx-auto max-w-xl bg-purple-200 p-8 rounded-xl flex flex-col gap-5">
        <h1 className="text-center font-bold text-2xl">
          Generate your Short URLs
        </h1>

        <input
          value={url}
          onChange={(e) => seturl(e.target.value)}
          className="px-4 py-2 rounded-md border"
          placeholder="Enter your URL"
        />

        <input
          value={shorturl}
          onChange={(e) => setshorturl(e.target.value)}
          className="px-4 py-2 rounded-md border"
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
  );
};

export default Shorten;
