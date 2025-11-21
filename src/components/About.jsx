import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        {
            icon: '🏆',
            title: 'Quality Assurance',
            description: 'Using finest materials and superior workmanship',
        },
        {
            icon: '⏱️',
            title: 'Timely Delivery',
            description: 'Track record of completing projects on time',
        },
        {
            icon: '👥',
            title: 'Expert Team',
            description: 'Experienced designers and project managers',
        },
        {
            icon: '💼',
            title: 'Professional Service',
            description: 'Dedicated to customer satisfaction',
        },
    ];

    return (
        <section ref={ref} className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
                            About Us
                        </span>
                        <h2 className="heading-lg mb-6">
                            Building Excellence Since 2022
                        </h2>
                        <div className="space-y-4 text-secondary-600 text-lg leading-relaxed">
                            <p>
                                <strong className="text-secondary-900">Smart Construction & Developers</strong> is a Patna-based professionally managed company specializing in Design, Construction, Maintenance & Engineering.
                            </p>
                            <p>
                                We are one of the leading execution contractors in North India, associated with top architects and builders. Our clients range from large corporations to small companies, including prestigious Indian organizations.
                            </p>
                            <p>
                                Our business focuses on delivering value-added interior and architecture design and execution projects for commercial, hotel, and residential clients. We have earned a well-deserved reputation for implementing and completing top-quality projects on time with complete customer satisfaction.
                            </p>
                            <p>
                                Our strength lies in proficient execution backed by experienced in-house designers and project managers with expertise in turnkey interior designing, planning, and project execution services.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                    className="flex items-start space-x-3"
                                >
                                    <span className="text-3xl">{feature.icon}</span>
                                    <div>
                                        <h4 className="font-semibold text-secondary-900 mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-secondary-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Company Info Card */}
                        <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-heading font-bold mb-6">
                                Company Information
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-primary-100 text-sm mb-1">Managing Proprietor</p>
                                    <p className="font-semibold text-lg">Md Sufiyan Raza</p>
                                </div>
                                <div>
                                    <p className="text-primary-100 text-sm mb-1">Established</p>
                                    <p className="font-semibold">22nd February 2022</p>
                                </div>
                                <div>
                                    <p className="text-primary-100 text-sm mb-1">Type</p>
                                    <p className="font-semibold">Proprietorship</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-secondary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                                <div className="text-secondary-700 font-medium">Projects</div>
                            </div>
                            <div className="bg-secondary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
                                <div className="text-secondary-700 font-medium">Major Clients</div>
                            </div>
                            <div className="bg-secondary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                                <div className="text-secondary-700 font-medium">Satisfaction</div>
                            </div>
                            <div className="bg-secondary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
                                <div className="text-secondary-700 font-medium">Years</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
