import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const CareersPage = () => {
    const benefits = [
        {
            title: 'Professional Growth',
            description: 'Opportunities to work on diverse projects across the India & Middle East and local markets.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'Skill Development',
            description: 'Continuous learning environment to improve your skills and meet new challenges.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: 'Inclusive Culture',
            description: 'A diverse team from various backgrounds sharing a common goal of excellence.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <SEO
                title="Careers"
                description="Join the Smart Construction & Developers team. We are committed to recruiting and retaining qualified, motivated staff."
                keywords="careers, jobs, construction jobs, civil engineering jobs, patna jobs, bihar jobs"
            />

            {/* Page Header */}
            <section className="relative bg-gradient-secondary py-24 mt-20">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="heading-xl mb-6 text-white">Careers at SCD</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
                            Build your future with a team committed to excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white dark:bg-secondary-900">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="heading-lg mb-6 text-secondary-900 dark:text-white">
                                Join Our <span className="text-primary-600">Growing Team</span>
                            </h2>
                            <div className="space-y-6 text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                                <p>
                                    <span className="font-bold text-primary-600">SCD</span> is committed to recruiting and retaining qualified, motivated staff who can support our clients effectively on projects throughout the India & Middle East.
                                </p>
                                <p>
                                    We are involved in a wide array of projects, large and small, in various markets. Our extensive portfolio provides numerous opportunities for our staff to improve their skills and to meet new challenges.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-secondary-50 dark:bg-secondary-800 rounded-3xl p-8 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                                Why Work With Us?
                            </h3>
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-1">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Training Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-12 shadow-xl">
                            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                                Training @ <span className="text-primary-600">SCD</span>
                            </h2>
                            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                                As part of SCD ongoing professional development and training programs, our staff has the opportunity to attend training sessions conducted by SCD employees and outside experts. Training is designed to keep staff current with new technologies and provide for professional growth and business skills development.
                            </p>
                        </div>
                    </motion.div>

                    {/* Internship Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 md:p-12 shadow-xl">
                            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                                Internship
                            </h2>
                            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed mb-6">
                                <span className="font-bold text-primary-600">SCD</span> provides internship opportunities for international and local students in various locations across India , 
                                Middle East and Gulf Region, allowing them to gain hands-on professional experience and skills in various fields.
                            </p>
                            <div className="mt-8">
                                <p className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                                    Interested in working at SCD?
                                </p>
                                <a
                                    href="mailto:contact@smartconstruction.com"
                                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    View Open Positions
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Diversity Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
                    >
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">A Diverse & Inclusive Workplace</h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                <span className="font-bold text-primary-400">SCD</span> has a diverse employee base made up of individuals with widely varying backgrounds who are at different stages of their professional careers. They share a common goal: serving our clients according to the highest standards of excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:contact@smartconstruction.com"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Send us your Resume
                                </a>
                                <a
                                    href="https://wa.me/918409640040?text=Hi%2C%20I%20am%20interested%20in%20applying%20for%20a%20job%20at%20SCD.%20Here%20is%20my%20resume."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Send via WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default CareersPage;
