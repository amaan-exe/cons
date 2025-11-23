import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CompactServiceCarousel from '../components/CompactServiceCarousel';
import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Smart Construction & Developers - Best construction company in Patna, Bihar. Expert civil contractors for residential & commercial projects, house plans, and turnkey construction."
                keywords="construction company patna, civil contractors bihar, best builders in patna, house plan designer patna, turnkey construction bihar, home renovation patna"
            />
            <Hero />
            <Services />

            {/* Featured Services Pricing */}
            <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full font-semibold text-sm mb-4">
                            Quick Quote
                        </span>
                        <h2 className="heading-lg mb-4 dark:text-white">Popular Services</h2>
                        <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                            Get instant quotes for our most requested services
                        </p>
                    </motion.div>

                    <CompactServiceCarousel />
                </div>
            </section>

            <About />
            <Clients />
            <Contact />
        </>
    );
};

export default Home;
