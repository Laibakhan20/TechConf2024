import Link from "next/link"

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen relative z-10  text-white"  style={{ backgroundImage: "url('/image2.jpg')" }}>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center  relative z-10  text-white ">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to TechConf 2024</h2>
        <p className="text-lg sm:text-xl mb-6">Join us for an exciting conference on the latest in technology.</p>
        <p className="text-sm sm:text-lg mb-4">November 15, 2024 • San Francisco, CA</p>
        <Link href="#register" className="bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-blue-500">
          Register Now
        </Link>
      </div>
    </section>
  )
}

export default Hero