import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
                        <ul>
                            <li><a href="/" className="hover:text-gray-400">Home</a></li>
                            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
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
                </div>

                {/* Copyright Section */}
                <div className="mt-6 text-center border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;