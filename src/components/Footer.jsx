import { Link } from 'react-router-dom';
import logo from '../assets/gallery/logo.jpg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary-900 text-gray-300">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4 mb-6">
                            <img
                                src={logo}
                                alt="Smart Construction & Developers Logo"
                                className="w-16 h-16 object-contain rounded-lg shadow-lg"
                            />
                            <div>
                                <h3 className="font-heading font-bold text-2xl leading-tight tracking-wide mb-1">
                                    <span className="text-primary-500 text-3xl">S</span>
                                    <span className="text-white">mart </span>
                                    <span className="text-primary-500 text-3xl">C</span>
                                    <span className="text-white">onstruction</span>
                                </h3>
                                <p className="text-lg text-gray-300 font-medium flex items-center gap-2">
                                    <span className="text-primary-400">&</span>
                                    <span className="text-primary-500 text-2xl font-bold">D</span>
                                    <span className="text-white">evelopers</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading construction company in Patna, Bihar, specializing in design,
                            construction, maintenance & engineering. Building excellence since 2022.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="mailto:smartconstructiondevelopers@gmail.com"
                                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </a>
                            <a
                                href="tel:+917004859323"
                                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Phone"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-white text-lg mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-primary-400 transition-colors inline-flex items-center group"
                                >
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-primary-400 transition-colors inline-flex items-center group"
                                >
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="hover:text-primary-400 transition-colors inline-flex items-center group"
                                >
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="hover:text-primary-400 transition-colors inline-flex items-center group"
                                >
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-primary-400 transition-colors inline-flex items-center group"
                                >
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold text-white text-lg mb-6">
                            Contact Info
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-sm leading-relaxed">
                                    Isapur Road, Near Islamia B.ed College,
                                    Phulwari Sharif, Patna-801505, Bihar
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href="tel:+917004859323"
                                    className="text-sm hover:text-primary-400 transition-colors"
                                >
                                    +91 700 485 9323
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:smartconstructiondevelopers@gmail.com"
                                    className="text-sm hover:text-primary-400 transition-colors break-all"
                                >
                                    smartconstructiondevelopers@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Smart Construction & Developers. All rights reserved.
                        </p>
                        <a
                            href="https://ignius-olive.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 text-sm transition-transform hover:scale-105"
                        >
                            <span className="text-gray-500 group-hover:text-gray-300 transition-colors">Made by</span>
                            <span className="font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Ignius Studios
                            </span>
                            <span className="text-gray-500 group-hover:text-gray-300 transition-colors">with</span>
                            <span className="text-red-500 animate-pulse">❤️</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
