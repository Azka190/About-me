import React from "react";

function Work() {
  return (
    <div className="text-[#C7C3C3]">
      <div className="text-center mt-36">
        <h1 className="text-4xl font-semibold  mb-3 ">Work</h1>
      </div>
      <div className="bg-[#434345] ml-10 mr-[500px] mt-10 p-10 rounded-lg animate-fade-slide">
        <h1 className="text-4xl text-center text-white mb-6">Calculator</h1>
        <div className="flex gap-10 items-center">
          <div className="w-1/2">
            <img src="Cal.png" alt="Calculator" className="w-full h-auto" />
          </div>
          <div className="w-1/2 text-white">
            <p>
              I created a fully responsive calculator using Next.js and Tailwind
              CSS. This project allows users to perform basic arithmetic
              operations like addition, subtraction, multiplication, and
              division. I built it using React components, ensuring a clean,
              interactive user experience with smooth button transitions and
              real-time calculation updates. Tailwind CSS helped me to style the
              calculator with a modern, minimalistic design.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#434345] ml-[500px] mr-10 mt-20 p-10 rounded-lg animate-fade-slide ">
        <h1 className="text-4xl text-center text-white mb-6">Digital Agency</h1>
        <div className="flex gap-10 items-center">
        <div className="w-1/2 text-white">
            <p>
            I developed a sleek and modern Digital Agency website using Next.js and Tailwind CSS. The site features responsive design, showcasing various services, portfolios, and client testimonials with a focus on user-friendly navigation. I utilized Next.js for optimized performance and SEO, while Tailwind CSS allowed me to create a clean, visually appealing layout with customized animations and hover effects.
            </p>
          </div>
          <div className="w-1/2">
            <img src="Agency.png" alt="Digital Agency" className="w-full h-auto" />
          </div>
          
        </div>
      </div>
      <div className="bg-[#434345] ml-10 mr-[500px] mt-20 p-10 rounded-lg animate-fade-slide">
        <h1 className="text-4xl text-center text-white mb-6">To DO APP</h1>
        <div className="flex gap-10 items-center">
          <div className="w-1/2">
            <img src="toDo.png" alt="To DO APP" className="w-full h-auto" />
          </div>
          <div className="w-1/2 text-white">
            <p>
            I created a fully functional To-Do app using Next.js and Tailwind CSS, designed to help users manage tasks efficiently. The app allows users to add, delete, and mark tasks as complete, with a minimalistic and responsive interface. Leveraging React's state management, I ensured real-time updates for a seamless user experience, while Tailwind CSS helped me style the app with a clean and organized layout.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#434345] ml-[500px] mr-10 mt-20 p-10 rounded-lg animate-fade-slide">
        <h1 className="text-4xl text-center text-white mb-6">Textile Mill Website</h1>
        <div className="flex gap-10 items-center">
        <div className="w-1/2 text-white">
            <p>
            I built a comprehensive website for a textile mill using Next.js and Tailwind CSS, designed to showcase products, services, and the company’s heritage. The site features a responsive design with sections for product categories, client testimonials, and company history. Using Next.js ensured fast loading times and SEO optimization, while Tailwind CSS allowed me to create a visually appealing, professional layout with custom styling and smooth transitions.
            </p>
          </div>
          <div className="w-1/2">
            <img src="Textile.png" alt="textileMill" className="w-full h-auto" />
          </div>
         
        </div>
      </div>
    
    </div>
  );
}

export default Work;
