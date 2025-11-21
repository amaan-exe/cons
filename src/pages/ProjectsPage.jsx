import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import interiorImage from '../assets/interior_design_modern_1763758486955.png';
import architecturalImage from '../assets/architectural_planning_1763758506550.png';
import completedImage from '../assets/completed_building_1763758525596.png';

const ProjectsPage = () => {
    const completedProjects = [
        {
            title: 'Mahavir Cancer Sansthan',
            location: 'Patna',
            category: 'Healthcare',
            image: completedImage,
        },
        {
            title: 'AIIMS Patna',
            location: 'Patna',
            category: 'Healthcare',
            image: interiorImage,
        },
        {
            title: 'Bihar State Disaster Management Authority',
            location: 'Patna',
            category: 'Government',
            image: architecturalImage,
        },
        {
            title: 'Khanqah Mujeebia',
            location: 'Phulwari Sharif',
            category: 'Religious',
            image: completedImage,
        },
        {
            title: 'Nephrocare Health Services',
            location: 'Hyderabad',
            category: 'Healthcare',
            image: interiorImage,
        },
        {
            title: 'Shafaf Construction Projects',
            location: 'Patna',
            category: 'Commercial',
            image: architecturalImage,
        },
    ];

    return (
        <>
            <SEO
                title="Our Projects"
                description="Explore Smart Construction & Developers' portfolio - Completed projects including AIIMS Patna, Mahavir Cancer Sansthan, Bihar State Disaster Management Authority & more."
                keywords="construction projects patna, completed projects bihar, aiims patna construction, healthcare construction, commercial projects patna"
            />

            {/* Page Header */}
            <section className="relative bg-gradient-secondary py-24 mt-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="heading-xl mb-6">Our Projects</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            A Showcase of Excellence and Quality Craftsmanship
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Completed Projects */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
                            Portfolio
                        </span>
                        <h2 className="heading-lg mb-4">Completed Projects</h2>
                        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                            Delivering excellence across healthcare, commercial, government, and
                            residential sectors
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-heading font-bold text-secondary-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-secondary-600">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>{project.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ongoing Projects */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
                            In Progress
                        </span>
                        <h2 className="heading-lg mb-4">Ongoing Projects</h2>
                        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                            Currently working on exciting new projects across Bihar
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-10 h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                            Multiple Projects in Progress
                        </h3>
                        <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
                            We are currently executing several turnkey projects across commercial,
                            residential, and institutional sectors. Contact us to learn more about
                            our ongoing work.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
