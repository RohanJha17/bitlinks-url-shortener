import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-[82.8vh] bg-purple-100 flex items-center justify-center px-6 pt-16">
      <div className="w-full max-w-xl bg-purple-200/60 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          Contact Us
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg outline-none border border-purple-300 focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg outline-none border border-purple-300 focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg outline-none border border-purple-300 focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <button
            type="submit"
            className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
