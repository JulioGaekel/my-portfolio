import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration:1}}
            >
                Hi, I'm Julio
            </motion.h1>
            <motion.p
                className="text-xl mb-6 px-4"
                initial={{ opacity: 0 }}
                animate={{opacity: 1 }}
                transition={{ delay: 1, duration: 1}}
            >
                I am a software developer passionate about building cool applications.
            </motion.p>
            <a
                href="/projects"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
            >
                View My Work
            </a>
            <p className="mt-4 text-sm text-gray-100 italic">
  🚧 You’re viewing a live build of my portfolio — updates and new projects are on the way!
</p>
        </div>
    );
};

export default Home;
