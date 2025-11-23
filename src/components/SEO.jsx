import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
    canonical
}) => {
    const siteTitle = 'Smart Construction & Developers';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Smart Construction & Developers - Leading construction company in Patna, Bihar. Specializing in residential & commercial construction, interior design, and civil engineering. Established 2018.';
    const defaultKeywords = 'construction company patna, civil contractors bihar, house plans patna, interior designers patna, turnkey projects bihar, building contractors patna, smart construction developers';

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={ogType} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Additional Meta Tags */}
            <meta name="author" content="Smart Construction & Developers" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-BR" />
            <meta name="geo.placename" content="Patna" />
            <meta name="geo.position" content="25.5941;85.1376" />

            {/* Structured Data - Local Business */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ConstructionBusiness",
                    "name": "Smart Construction & Developers",
                    "image": ogImage || "https://smartconstructiondevelopers.com/logo.jpg",
                    "@id": "https://smartconstructiondevelopers.com",
                    "url": window.location.origin,
                    "telephone": "+919308760389",
                    "email": "smartconstructiondevelopers@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Isapur Road, Near Islamia B.ed College",
                        "addressLocality": "Phulwari Sharif",
                        "addressRegion": "Bihar",
                        "postalCode": "801505",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 25.573667,
                        "longitude": 85.069417
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "18:00"
                    },
                    "founder": {
                        "@type": "Person",
                        "name": "Md Sufiyan Raza"
                    },
                    "foundingDate": "2018-01-01",
                    "priceRange": "₹₹",
                    "areaServed": [
                        {
                            "@type": "City",
                            "name": "Patna"
                        },
                        {
                            "@type": "State",
                            "name": "Bihar"
                        }
                    ],
                    "sameAs": [
                        "https://www.facebook.com/md.sufiyan.503",
                        "https://www.youtube.com/@smartconstructiondevelopers"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
