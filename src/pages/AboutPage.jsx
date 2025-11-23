import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Smart Construction & Developers - Patna's leading construction company since 2018. Led by Md Sufiyan Raza, we deliver excellence in design, construction & engineering."
                keywords="about smart construction, construction company patna history, md sufiyan raza, patna builders, construction services bihar, civil engineers patna"
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
                        <h1 className="heading-xl mb-6">About Us</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Building Excellence in North India Since 2018
                        </p>
                    </motion.div>
                </div>
            </section>

            <About />

            {/* Mission & Vision */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="heading-md mb-4">Our Mission</h3>
                            <p className="text-secondary-600 leading-relaxed">
                                To deliver value-added interior and architecture design and execution
                                projects with superior workmanship, finest materials, and complete
                                customer satisfaction. We aim to create work and living spaces that
                                enhance the quality of life.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="heading-md mb-4">Our Vision</h3>
                            <p className="text-secondary-600 leading-relaxed">
                                To be recognized as the most trusted and leading construction company
                                in North India, known for innovation, quality, and timely project
                                delivery. We strive to build long-lasting relationships with our
                                clients through excellence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
