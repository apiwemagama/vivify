import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 gap-4">
                    {/* Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">COMPANY</h5>
                        <ul>
                            <li><a href="/" className="hover:text-gray-400">All</a></li>
                            <li><a href="/favourites" className="hover:text-gray-400">Favourites</a></li>
                            <li><a href="/search" className="hover:text-gray-400">Search</a></li>
                            <li><a href="/login" className="hover:text-gray-400">Login</a></li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">OVERVIEW</h5>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Afilliates</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Global Sitemap</p>
                        <p>Local Sitemap</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">COMMUNITY</h5>
                        <p>Community Central</p>
                        <p>Support</p>
                        <p>Help</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">COMMUNITY</h5>
                        <p>Community Central</p>
                        <p>Support</p>
                        <p>Help</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-6">
                    {/* Follow us section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">FOLLOW US</h5>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                                <FaTwitter />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    {/* Advertise section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">ADVERTISE</h5>
                        <p>Media Kit</p>
                        <p>Contact</p>
                    </div>
                </div>
                {/* Copyright section */}
                <div className="mt-6 text-center border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} Aurora. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;