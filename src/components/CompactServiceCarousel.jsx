import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import puttyImage from '../assets/services/putty-work.png';
import plasterImage from '../assets/services/plaster-work.png';
import paintingImage from '../assets/services/painting.png';
import popImage from '../assets/services/pop-work.png';
import gypsumImage from '../assets/services/gypsum-work.png';
import tilingImage from '../assets/services/tiling-work.png';

const CompactServiceCarousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const services = [
        {
            id: 1,
            name: 'Putty Work',
            icon: '🎨',
            image: puttyImage,
            description: 'Professional wall putty application for smooth, flawless finishes',
            priceRange: '₹15 - ₹25/sq.ft',
            color: 'from-pink-500 to-rose-600',
        },
        {
            id: 2,
            name: 'Plaster Work',
            icon: '🏗️',
            image: plasterImage,
            description: 'Expert plastering services for walls and ceilings',
            priceRange: '₹40 - ₹60/sq.ft',
            color: 'from-orange-500 to-red-600',
        },
        {
            id: 3,
            name: 'Painting Services',
            icon: '🖌️',
            image: paintingImage,
            description: 'Premium painting solutions for interior and exterior',
            priceRange: '₹18 - ₹35/sq.ft',
            color: 'from-blue-500 to-indigo-600',
        },
        {
            id: 4,
            name: 'POP Work',
            icon: '✨',
            image: popImage,
            description: 'Plaster of Paris false ceiling and decorative work',
            priceRange: '₹80 - ₹150/sq.ft',
            color: 'from-purple-500 to-violet-600',
        },
        {
            id: 5,
            name: 'Gypsum Work',
            icon: '🏛️',
            image: gypsumImage,
            description: 'Modern gypsum board installation and finishing',
            priceRange: '₹70 - ₹120/sq.ft',
            color: 'from-teal-500 to-cyan-600',
        },
        {
            id: 6,
            name: 'Tiling Work',
            icon: '🔲',
            image: tilingImage,
            description: 'Professional tile installation for floors and walls',
            priceRange: '₹50 - ₹100/sq.ft',
            color: 'from-amber-500 to-yellow-600',
        },
    ];

    const scrollLeft = () => {
        const container = document.getElementById('service-cards-container');
        if (container) {
            container.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        const container = document.getElementById('service-cards-container');
        if (container) {
            container.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    const handleWhatsApp = (service) => {
        const whatsappMessage = `*Service Inquiry*
━━━━━━━━━━━━━━━━━━━━

📋 *Service:* ${service.name}
💰 *Price Range:* ${service.priceRange}

I'm interested in getting a quote for this service. Please provide more details.

━━━━━━━━━━━━━━━━━━━━
_Inquiry from Smart Construction & Developers Website_`;

        const whatsappNumber = '917004859323';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="relative">
            {/* Scroll Container */}
            <div
                id="service-cards-container"
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex-shrink-0 w-[320px] md:w-[360px] group"
                    >
                        {/* Card */}
                        <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>

                                {/* Icon Badge */}
                                <div className="absolute top-4 right-4 bg-white dark:bg-secondary-900 rounded-full p-3 shadow-lg">
                                    <span className="text-2xl">{service.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 font-heading">
                                    {service.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-2 flex-grow">
                                    {service.description}
                                </p>

                                {/* Price */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-500">
                                            {service.priceRange.split(' ')[0]}
                                        </span>
                                        <span className="text-sm text-secondary-500 dark:text-secondary-400">
                                            {service.priceRange.split(' ').slice(1).join(' ')}
                                        </span>
                                    </div>
                                    <p className="text-xs text-secondary-400 dark:text-secondary-500 mt-1">*Material charges extra</p>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handleWhatsApp(service)}
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-secondary-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 hidden md:block"
                aria-label="Scroll left"
            >
                <svg className="w-6 h-6 text-secondary-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-secondary-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 hidden md:block"
                aria-label="Scroll right"
            >
                <svg className="w-6 h-6 text-secondary-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* View All Link */}
            <div className="text-center mt-8">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400 font-semibold transition-colors"
                >
                    View All Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default CompactServiceCarousel;
