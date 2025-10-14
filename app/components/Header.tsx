import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Header() {
  return (
    <header className="bg-white shadow-lg px-4 md:px-12 pb-1 pt-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Left sideko logo */}
        <div className="flex items-center space-x-3">
          <div className="flex flex-col gap-1">
             <a href="#"> <img
                src="/matat-logo.png"
                alt="Matat Logo"
                className="h-13 w-auto"
              />      
</a>
          </div>
          </div>

        {/* Right side text links */}
        <nav className="flex space-x-9 text-base font-bold">
          <a href="#" className="underline underline-offset-5">Home</a>
          <a href="#" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">VIBEZ Project</a>
          <a href="#" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">Database</a>
          <a href="#"className="group" >
            <div className="flex items-center gap-2">
             <IoIosMail
             className="text-blue-600 text-2xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
            Message Us
             </div>
          </a>
            <a href="#" className="group">
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-600 text-base transition-transform duration-300 ease-in-out group-hover:scale-125" />
          <span>055-9909090</span>
        </div>
      </a>


        </nav>
      </div>
    </header>
  );
}
