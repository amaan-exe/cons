import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery/1.jpeg';
import gallery2 from '../assets/gallery/2.jpeg';
import gallery3 from '../assets/gallery/3.jpeg';
import gallery4 from '../assets/gallery/4.jpeg';
import gallery5 from '../assets/gallery/5.jpeg';
import gallery6 from '../assets/gallery/6.jpeg';
import gallery7 from '../assets/gallery/7.jpeg';
import gallery8 from '../assets/gallery/8.jpeg';
import gallery9 from '../assets/gallery/9.jpeg';
import mahavirImage from '../assets/project/mahavir.jpg';
import aiimsImage from '../assets/project/aiims.jpg';
import khanImage from '../assets/project/khan.jpg';
import shafafImage from '../assets/project/shafaf.jpg';
import nephroImage from '../assets/project/nephro.jpg';
import galleryConcreteTesting1 from '../assets/gallery/gallery-concrete-testing-1.png';
import galleryRetrofitting1 from '../assets/gallery/gallery-retrofitting-1.png';
import galleryLabTesting1 from '../assets/gallery/gallery-lab-testing-1.png';
import galleryLabTesting2 from '../assets/gallery/gallery-lab-testing-2.png';
import floor from '../assets/gallery/image.png';
import retro from '../assets/gallery/retro.png';
import rewardCertificate from '../assets/gallery/reward-certificate.png';


const GalleryPage = () => {
    const galleryImages = [
        {
            id: 1,
            src: gallery1,
            alt: 'Construction',
            category: 'foundation'
        },
        {
            id: 2,
            src: gallery2,
            alt: 'foundation',
            category: 'foundation'
        },
        {
            id: 3,
            src: gallery3,
            alt: 'design',
            category: 'exterior design'
        },
        {
            id: 4,
            src: gallery4,
            alt: 'design',
            category: 'interior design'
        },
        {
            id: 5,
            src: gallery5,
            alt: 'design',
            category: 'interior design'
        },
        {
            id: 6,
            src: gallery6,
            alt: 'design',
            category: 'interior design'
        },
        {
            id: 7,
            src: gallery7,
            alt: 'design',
            category: 'interior design'
        },
        {
            id: 8,
            src: gallery8,
            alt: 'design',
            category: 'interior design'
        },
        {
            id: 9,
            src: gallery9,
            alt: 'design',
            category: 'exterior design'
        },
        {
            id: 10,
            src: mahavirImage,
            alt: 'project',
            category: 'completed project'
        },
        {
            id: 11,
            src: aiimsImage,
            alt: 'project',
            category: 'completed project'
        },
        {
            id: 12,
            src: khanImage,
            alt: 'project',
            category: 'completed project'
        },
        {
            id: 13,
            src: shafafImage,
            alt: 'project',
            category: 'completed project'
        },
        {
            id: 14,
            src: nephroImage,
            alt: 'project',
            category: 'completed project'
        },
        {
            id: 15,
            src: galleryConcreteTesting1,
            alt: 'Concrete Temperature Testing',
            category: 'Quality Control'
        },
        {
            id: 16,
            src: galleryRetrofitting1,
            alt: 'Structural Reinforcement',
            category: 'Retrofitting'
        },
        {
            id: 17,
            src: galleryLabTesting1,
            alt: 'Permeability Test',
            category: 'Lab Testing'
        },
        {
            id: 18,
            src: galleryLabTesting2,
            alt: 'Rapid Chloride Permeability Test',
            category: 'Lab Testing'
        },
        {
            id: 19,
            src: floor,
            alt: 'Floor',
            category: 'Floor Plan'
        },
        {
            id: 20,
            src: retro,
            alt: 'Retrofitting',
            category: 'Retrofitting'
        },

    ];

    return (
        <>
            <SEO
                title="Gallery"
                description="View our portfolio of construction projects, interior designs, and renovations in Patna."
                keywords="construction gallery, interior design photos, building photos patna, smart construction portfolio"
            />

            <div className="pt-20 min-h-screen bg-secondary-50 dark:bg-secondary-900">
                <div className="bg-primary-600 py-16 text-white text-center">
                    <h1 className="heading-xl mb-4">Our Gallery</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto px-4">
                        A visual journey through our finest construction and design work
                    </p>
                </div>

                <div className="container-custom py-16">
                    {galleryImages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg aspect-video bg-white dark:bg-secondary-800"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div>
                                            <p className="text-primary-400 text-sm font-semibold mb-1">{image.category}</p>
                                            <h3 className="text-white text-lg font-bold">{image.alt}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-secondary-500 dark:text-secondary-400 text-xl">
                                Gallery images coming soon...
                            </p>
                        </div>
                    )}
                </div>

                {/* Rewards Section */}
                <div className="bg-white dark:bg-secondary-800 py-16">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="heading-lg mb-4 text-secondary-900 dark:text-white">Our Rewards</h2>
                            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                                Recognition of our commitment to excellence and quality
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="group bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-4 shadow-xl transition-transform hover:scale-[1.02]">
                                <img
                                    src={rewardCertificate}
                                    alt="Award Certificate"
                                    className="w-full h-auto rounded-xl"
                                />
                                <div className="mt-6 text-center bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg border-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                                        IIT PATNA Certificate
                                    </p>
                                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">
                                        Hover to view
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryPage;
