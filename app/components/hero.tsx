import About from "./about"
import Contact from "./contact"


const Hero = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center p-8 text-5xl underline decoration-double text-blue-400">WELCOME TO MY ANOTHER PROJECT</h1>
     <h2 className="flex justify-center items-center p-8 text-4xl underline decoration-double text-blue-700 mt-0"> COFFEE SHOP</h2>
     <img  className= "p-20 mt-0"src="Images/coffee shop.jpg" alt="home picture" />      
      <About/>
      <Contact/>
    </div>
  )
}

export default Hero
