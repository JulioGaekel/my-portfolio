import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold"><a href="/">My Portfolio</a></h1>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="https://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L8 6M6 6l12 12"
                                />
                            ) : (
                             <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
            {isOpen && (
                <motion.ul
                    key="mobile-menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden px-4 pb-4 space-y-2 font-medium bg-gray-800 text-right overflow-hidden">
                    <li><Link to="/" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/projects" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/contact" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </motion.ul>
            )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;
