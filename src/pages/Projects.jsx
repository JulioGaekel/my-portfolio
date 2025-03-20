import projects from "../projectsData";

const Projects = () => {
    return (
        <section className="min-h-screen bg-gray-100 p-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2cl font-semibold text-gray-700">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4">
                            <a href={project.github} target="_blank" className="text-blue-500 hover:underline mr-4">GitHub</a>
                            <a href={project.live} target="_blank" className="text-green-500 hover:underline">Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
