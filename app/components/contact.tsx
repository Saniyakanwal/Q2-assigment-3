

const Contact = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center p-8 text-5xl underline decoration-double text-blue-400">CONTACT US</h1>
      <p className=" flex text-lg font-semibold justify-center items-center text-blue-300">Call Us:</p>
<a href="tel:+11234567890" className= " flex justify-center items-center text-blue-500">+92 3123456789</a>
<p className=" flex  justify-center items-center text-blue-300 text-lg font-semibold">Email Us:</p>
<a href="mailto:info@coffeeshop.com" className=" flex text-blue-500 justify-center items-center">info@coffeeshop.com</a>
<p className="text-blue-300 text-lg font-semibold">Opening Hours:</p>
<p className="text-blue-500">Monday - Friday: 9:00 AM - 9:00 PM</p>
<p className="text-blue-500">Saturday - Sunday: 10:00 AM - 10:00 PM</p>

    </div>
  )
}

export default Contact
