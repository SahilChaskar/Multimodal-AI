"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export const LandingFooter = () => {
    return (
        <footer className="w-full bg-slate-50 text-zinc-900 pt-10 pb-6 border-t border-zinc-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                            Newton
                        </h3>
                        <p className="text-zinc-500 text-sm">
                            The smartest AI platform for content generation. Unlock your creativity with the power of AI.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-zinc-900">Platform</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="/dashboard" className="hover:text-zinc-900 transition">Dashboard</Link></li>
                            <li><Link href="/image" className="hover:text-zinc-900 transition">Image Gen</Link></li>
                            <li><Link href="/video" className="hover:text-zinc-900 transition">Video Gen</Link></li>
                            <li><Link href="/music" className="hover:text-zinc-900 transition">Music Gen</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-zinc-900">Company</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-zinc-900 transition">About Us</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition">Careers</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition">Blog</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-zinc-900">Legal</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-zinc-900 transition">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-zinc-900 transition">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} Newton AI. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-zinc-900 transition">Privacy</Link>
                        <Link href="#" className="hover:text-zinc-900 transition">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
