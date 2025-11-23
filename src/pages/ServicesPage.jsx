import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import PricingCarousel from '../components/PricingCarousel';
import ServiceDetailCarousel from '../components/ServiceDetailCarousel';

const ServicesPage = () => {
    const machinery = [
        'Wood Cutting Machine',
        'Molding Machine',
        'Surface Planner',
        'Drilling Machine',
        'Spraying Compressors',
        'Mixture Machine',
        'Vibrator & Civil Equipment',
    ];

    return (
        <>
            <SEO
                title="Our Services"
                description="Comprehensive construction services in Patna - Drawing & Designing, Project Execution, Interior Design, Civil Work, Carpentry, Electrical, Painting & more. Professional turnkey solutions."
                keywords="construction services patna, interior design services, civil work patna, carpentry services, electrical work, painting services, turnkey projects bihar, house plan approval patna"
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
                        <h1 className="heading-xl mb-6">Our Services</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Comprehensive Construction & Interior Solutions
                        </p>
                    </motion.div>
                </div>
            </section>

            <Services />

            {/* Detailed Service Pricing */}
            <section className="section-padding bg-white dark:bg-secondary-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full font-semibold text-sm mb-4">
                            Detailed Services
                        </span>
                        <h2 className="heading-lg mb-4 dark:text-white">Individual Service Pricing</h2>
                        <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                            Explore our specialized services with detailed pricing for Putty, Plaster, Painting, POP, Gypsum, Tiling, Flooring & Waterproofing
                        </p>
                    </motion.div>

                    <ServiceDetailCarousel />
                </div>
            </section>

            {/* Machinery & Equipment */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="heading-lg mb-4">Our Machinery & Equipment</h2>
                        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                            State-of-the-art equipment ensuring precision and quality in every
                            project
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {machinery.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-secondary-50 rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="font-semibold text-secondary-900">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
