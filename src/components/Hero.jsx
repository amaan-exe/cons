import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_construction_site_1763758467050.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Smart Construction & Developers - Professional Construction Services in Patna"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/70 to-primary-900/60" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 py-32">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block px-4 py-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 font-semibold text-sm mb-6"
                        >
                            Established 2022 • Patna, Bihar
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Building Dreams Into{' '}
                            <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">
                                Reality
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
                        >
                            Leading construction company in North India specializing in design,
                            construction, maintenance & engineering. Delivering excellence with
                            every project.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/contact"
                                className="btn-primary inline-flex items-center justify-center group"
                            >
                                Get Free Quote
                                <svg
                                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </Link>

                            <Link
                                to="/projects"
                                className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary-900 inline-flex items-center justify-center"
                            >
                                View Our Projects
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
                        >
                            <div>
                                <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
                                <div className="text-gray-300 text-sm">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
                                <div className="text-gray-300 text-sm">Client Satisfaction</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary-400 mb-2">2+</div>
                                <div className="text-gray-300 text-sm">Years Experience</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center">
                    <span className="text-white text-sm mb-2">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <svg
                            className="w-6 h-6 text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
