import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppinsExtraBold = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-200 min-h-[82.8vh] pt-24">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppinsExtraBold.className}`}>
            The best URL shortener in the market
          </p>
          <p className="text-center px-24">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className="btns flex gap-3 justify-start items-center p-4 text-white">
                <Link href="/shorten"><button className='cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-1 text-[16px] font-semibold'>Try Now</button></Link>
                <Link href="/github"><button className='cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-1 text-[16px] font-semibold' target="_blank">GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="vector" />
        </div>
      </section>
    </main>
  );
}
