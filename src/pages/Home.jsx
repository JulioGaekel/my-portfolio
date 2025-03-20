const Home = () => {
    return (
        <Section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Julio</h1>
            <p className="text-xl mb-6">I am a software developer passionate about building cool applications.</p>
            <a
                href="/projects"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
            >
                View My Work
            </a>
        </Section>
    );
};

export default Home;
