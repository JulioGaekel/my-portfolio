import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <div className="flex justify-center gap-6 mb-3 text-xl">
                <a
                    href="https://github.com/JulioGaekel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/julio-gaekel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                >
                    <FaLinkedin />
                </a>
            </div>
            <p className="text-sm text-gray-400">® {new Date().getFullYear()} Julio Gaekel. All rights reserved. </p>
        </footer>
    );
};

export default Footer;
