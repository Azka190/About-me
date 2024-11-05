import React from 'react'

function Hero() {
  return (
    <div>
         <div className="text-center mt-20 animate-fade-slide">
        <h1 className="text-4xl font-semibold  mb-3 ">Azka Rehman</h1>
        <p className="">
          Crafting user-friendly applications with innovative design.
        </p>
      </div>
      <div className="flex justify-center mt-44 animate-fade-slide">
        <img
          src="/FigmaBook1.png"
          alt=""
          className="hover:transform hover:translate-y-[-20px] transition-transform duration-300 ease-in-out"
        />
        <img
          src="/Nextjs.png"
          alt=""
          className="hover:transform hover:translate-y-[-20px] transition-transform duration-300 ease-in-out"
        />
        <img
          src="/React.png"
          alt=""
          className="hover:transform hover:translate-y-[-20px] transition-transform duration-300 ease-in-out"
        />
        <img
          src="/JS.png"
          alt=""
          className="hover:transform hover:translate-y-[-20px] transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  )
}

export default Hero