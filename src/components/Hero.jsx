import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import khanquahImage from '../assets/khanquah_masjid_construction.png';
import cranesImage from '../assets/construction_site_cranes.png';
import buildingImage from '../assets/building_construction_progress.png';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [khanquahImage, cranesImage, buildingImage];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);
    return (
        <>
            {/* Orange accent bar below header */}
            <div className="w-full h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400"></div>

            <section className="relative min-h-screen flex flex-col overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    {heroImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Smart Construction & Developers - Professional Construction Services in Patna ${index + 1}`}
                            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-secondary-900/75" />
                </div>

                {/* Main Content - Centered */}
                <div className="relative z-10 flex-1 flex items-center justify-center py-12 md:py-20">
                    <div className="container-custom text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* SCD Logo Text */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mb-4 md:mb-8"
                            >
                                <h2 className="font-heading text-4xl sm:text-6xl md:text-9xl lg:text-[12rem] font-black tracking-tight leading-none">
                                    <span className="text-primary-500 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]">S</span>
                                    <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">C</span>
                                    <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">D</span>
                                </h2>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="font-heading text-xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide px-4 break-words"
                            >
                                PERFORMANCE EXCELLENCE
                                <br />
                                <span className="text-white">SINCE 2018</span>
                            </motion.h1>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="relative z-10 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 py-12"
                >
                    <div className="container-custom text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Are you interested in our services?
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-white text-secondary-900 font-bold text-lg rounded-md hover:bg-secondary-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Contact us
                        </Link>

                        {/* Social Media Icons */}
                        <div className="mt-8 pt-6 border-t border-white/30">
                            <p className="text-white font-semibold mb-4">Follow Us</p>
                            <div className="flex gap-4 justify-center">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/md.sufiyan.503"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-white"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com/@smartconstructiondevelopers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-white"
                                    aria-label="YouTube"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.957 3.433 0 4.734 0 6.25v11.49c0 1.517.957 2.818 4.385 3.064 3.604.246 11.631.245 15.23 0 3.428-.246 4.385-1.547 4.385-3.064V6.25c0-1.517-.957-2.818-4.385-3.064zM10 15.46V8.54l5.15 3.46-5.15 3.46z" />
                                    </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/919308760389"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-white"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;
