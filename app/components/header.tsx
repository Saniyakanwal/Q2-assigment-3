import Link from "next/link"


const Header = () => {
  return (
    <div className="m-3 bg-gradient-to-t from-blue-300 to bg-blue-700">
      <h1 className="underline decoration-double  text-2xl">ASSIGMENT-3</h1>
      <div className="flex flex-row-reverse text-end -my-6 mx-4 gap-4 ">
      <Link href="#">Contact</Link>
      <Link href="#">About</Link>
      <Link href="#">Home</Link>
      </div>
    </div>
  )
}

export default Header
