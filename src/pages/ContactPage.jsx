import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Smart Construction & Developers. Head Office: Isapur Road, Phulwari Sharif, Patna. Phone: +91 9308760389. Email: smartconstructiondevelopers@gmail.com"
                keywords="contact smart construction, construction company patna contact, builders patna phone, phulwari sharif construction, patna construction contact, civil contractor number"
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
                        <h1 className="heading-xl mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Let's Discuss Your Next Project
                        </p>
                    </motion.div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default ContactPage;
