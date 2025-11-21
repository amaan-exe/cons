import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Clients = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const clients = [
        'Mahavir Cancer Sansthan, Patna',
        'Shafaf Construction Pvt. Ltd.',
        'Luck Construction',
        'Pearl Engineer & Developer',
        'Bihar State Disaster Management Authority, Patna',
        'Khanqah Mujeebia, Phulwari Sharif',
        'AIIMS Patna',
        'Nephrocare Health Services Limited, Hyderabad',
    ];

    return (
        <section ref={ref} className="section-padding bg-secondary-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 text-primary-300 rounded-full font-semibold text-sm mb-4">
                        Our Clients
                    </span>
                    <h2 className="heading-lg text-white mb-4">
                        Trusted by Leading Organizations
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We are proud to serve prestigious clients across Bihar and beyond,
                        delivering excellence in every project.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-white font-medium leading-tight">{client}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-6 py-3">
                        <svg
                            className="w-6 h-6 text-primary-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-white font-semibold">
                            Trusted Partner for Government & Private Organizations
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
