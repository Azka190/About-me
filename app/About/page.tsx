import React from "react";
import Navbar from "../components/Navbar";


function page() {
  return (
    
    <div className="max-w-4xl mx-auto p-5">
      <Navbar />
  <div className="text-center mt-20">
    <h1 className="text-4xl font-semibold m-20">About Me</h1>
  </div>


  <div className="flex justify-center">
    <img src="Photo.png" alt="Azka Rehman" className="" />
  </div>


  <div className="text-center">
    <h1 className="text-4xl font-semibold mt-20 mb-10">Background</h1>
    <p className="text-lg leading-relaxed ">
      Hi! I’m Azka Rehman, a passionate and dedicated web developer with a strong focus on front-end technologies. I am currently pursuing my degree at Virtual University and working on my Final Year Project, a Full Stack Job Portal. My expertise lies in crafting visually appealing and responsive user interfaces using tools like Next.js, Tailwind CSS, and React. I’m always eager to learn new things and enjoy bringing creative solutions to life through code.
    </p>
    <p className="text-lg leading-relaxed mt-4 ">
      Beyond development, I’ve had hands-on experience with projects ranging from e-commerce platforms to weather apps and task management systems. Each project has helped me refine my skills in problem-solving, design, and collaboration. I'm particularly interested in exploring emerging technologies like Apple Vision Pro to build innovative solutions.
    </p>
    <p className="text-lg leading-relaxed mt-4 ">
      When I'm not coding, I enjoy keeping up with the latest trends in web development and continuously improving my craft.
    </p>
  </div>
</div>

  );
}

export default page;
