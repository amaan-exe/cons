import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const GalleryPage = () => {
    const galleryImages = [
        {
            id: 1,
            src: '/src/assets/services/putty-work.png',
            alt: 'Putty Work',
            category: 'Interior'
        },
        // Add more images here as they become available
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
            </div>
        </>
    );
};

export default GalleryPage;
