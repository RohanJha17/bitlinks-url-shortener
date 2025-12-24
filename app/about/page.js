import React from 'react'

const About = () => {
  return (
    <section className="min-h-[82.8vh] bg-purple-100 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-purple-200/60 rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">
          About BitLinks
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          BitLinks is a simple, fast, and privacy-focused URL shortener built
          to make sharing links effortless. Unlike many other URL shorteners,
          we don’t force you to sign up or track your activity.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Our goal is to provide a clean and straightforward experience where
          you can generate short URLs instantly and use them anywhere.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Built using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,
          and <strong>MongoDB</strong>, BitLinks focuses on performance,
          simplicity, and modern web standards.
        </p>
      </div>
    </section>
  )
}

export default About
