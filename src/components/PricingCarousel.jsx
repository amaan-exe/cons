import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pricingPackages = [
        {
            id: 1,
            name: 'Basic Package',
            category: 'Residential',
            price: '₹2,50,000',
            duration: 'Starting from',
            features: [
                'Architectural Design',
                'Basic Interior Layout',
                'Civil Work Supervision',
                'Material Consultation',
                'Project Timeline: 3-4 months',
                'Basic Electrical & Plumbing',
            ],
            popular: false,
            color: 'from-blue-500 to-blue-600',
        },
        {
            id: 2,
            name: 'Premium Package',
            category: 'Residential & Commercial',
            price: '₹5,00,000',
            duration: 'Starting from',
            features: [
                'Complete Architectural Design',
                'Premium Interior Design',
                'Turnkey Project Execution',
                'Custom Carpentry & Furniture',
                'POP & Gypsum Work',
                'Complete Electrical & Plumbing',
                'Painting & Finishing',
                'Project Timeline: 4-6 months',
                '1 Year Warranty',
            ],
            popular: true,
            color: 'from-primary-500 to-primary-700',
        },
        {
            id: 3,
            name: 'Luxury Package',
            category: 'Premium Projects',
            price: '₹10,00,000',
            duration: 'Starting from',
            features: [
                'Luxury Architectural Design',
                'High-End Interior Design',
                'Complete Turnkey Solution',
                'Premium Materials & Finishes',
                'Custom Furniture & Fixtures',
                'Smart Home Integration',
                'Landscaping & Outdoor Design',
                'Project Timeline: 6-8 months',
                '2 Year Warranty',
                'Dedicated Project Manager',
            ],
            popular: false,
            color: 'from-accent-600 to-accent-800',
        },
        {
            id: 4,
            name: 'Renovation Package',
            category: 'Home Renovation',
            price: '₹1,50,000',
            duration: 'Starting from',
            features: [
                'Space Planning & Design',
                'Demolition & Reconstruction',
                'Electrical Rewiring',
                'Plumbing Updates',
                'Flooring & Tiling',
                'Painting & Finishing',
                'Project Timeline: 2-3 months',
            ],
            popular: false,
            color: 'from-green-500 to-green-600',
        },
        {
            id: 5,
            name: 'Commercial Package',
            category: 'Office & Retail',
            price: '₹8,00,000',
            duration: 'Starting from',
            features: [
                'Commercial Space Design',
                'Office Interior Design',
                'Complete Civil Work',
                'HVAC Installation',
                'False Ceiling & Partitions',
                'Electrical & IT Infrastructure',
                'Branding & Signage',
                'Project Timeline: 5-7 months',
                '1 Year Warranty',
            ],
            popular: false,
            color: 'from-purple-500 to-purple-700',
        },
        {
            id: 6,
            name: 'Civil Drawings',
            category: 'Design Services',
            price: '₹15,000',
            duration: 'Starting from',
            features: [
                'Floor Plans (2D)',
                'Elevations (Front/Side)',
                'Section Drawings',
                'Structural Details',
                '3D Front Elevation',
                'Working Drawings',
                'Project Timeline: 1 week',
            ],
            popular: false,
            color: 'from-cyan-500 to-blue-600',
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % pricingPackages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + pricingPackages.length) % pricingPackages.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div
                                className={`relative bg-gradient-to-br ${pricingPackages[currentIndex].color} rounded-3xl shadow-2xl overflow-hidden`}
                            >
                                {/* Popular Badge */}
                                {pricingPackages[currentIndex].popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-yellow-400 text-secondary-900 px-6 py-2 rounded-bl-2xl font-bold text-sm">
                                            ⭐ MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="p-8 md:p-12 text-white">
                                    {/* Category */}
                                    <div className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">
                                        {pricingPackages[currentIndex].category}
                                    </div>

                                    {/* Package Name */}
                                    <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                                        {pricingPackages[currentIndex].name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl md:text-6xl font-bold">
                                                {pricingPackages[currentIndex].price}
                                            </span>
                                            <span className="text-xl opacity-80">+</span>
                                        </div>
                                        <div className="text-lg opacity-90 mt-1">
                                            {pricingPackages[currentIndex].duration}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {pricingPackages[currentIndex].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <svg
                                                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-lg">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="/contact"
                                        className="inline-block w-full md:w-auto bg-white text-secondary-900 font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Get Started →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Previous package"
            >
                <svg
                    className="w-6 h-6 text-secondary-900 group-hover:text-primary-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Next package"
            >
                <svg
                    className="w-6 h-6 text-secondary-900 group-hover:text-primary-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
                {pricingPackages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-12 h-3 bg-primary-600'
                            : 'w-3 h-3 bg-secondary-300 hover:bg-secondary-400'
                            }`}
                        aria-label={`Go to package ${index + 1}`}
                    />
                ))}
            </div>

            {/* Package Counter */}
            <div className="text-center mt-4 text-secondary-600 font-medium">
                {currentIndex + 1} / {pricingPackages.length}
            </div>
        </div>
    );
};

export default PricingCarousel;
