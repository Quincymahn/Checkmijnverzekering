"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerzekeringenOpen, setIsVerzekeringenOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // name of open sub-item (Wonen, Verkeer...)
  const firstLinkRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // focus first link when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => firstLinkRef.current?.focus(), 80);
  }, [isOpen]);

  const verzekeringenItems = [
    {
      name: "Wonen",
      href: "/verzekeringen/wonen",
      subItems: [
        { name: "Opstal", href: "/verzekeringen/wonen/opstal" },
        { name: "Inboedel", href: "/verzekeringen/wonen/inboedel" },
        {
          name: "Aansprakelijkheid",
          href: "/verzekeringen/wonen/aansprakelijkheid",
        },
        { name: "Glas", href: "/verzekeringen/wonen/glas" },
      ],
    },
    {
      name: "Verkeer",
      href: "/verzekeringen/verkeer",
      subItems: [
        { name: "Personenauto", href: "/verzekeringen/verkeer/auto" },
        { name: "Motor / Scooter", href: "/verzekeringen/verkeer/motor" },
        { name: "Bromfiets", href: "/verzekeringen/verkeer/bromfiets" },
        { name: "Oldtimer", href: "/verzekeringen/verkeer/oldtimer" },
        { name: "Bestelauto", href: "/verzekeringen/verkeer/bestelauto" },
      ],
    },
    {
      name: "Recht & Zekerheid",
      href: "/verzekeringen/recht-en-zekerheid",
      subItems: [
        {
          name: "Rechtsbijstand",
          href: "/verzekeringen/recht-en-zekerheid/rechtsbijstand",
        },
        {
          name: "Ongevallen",
          href: "/verzekeringen/recht-en-zekerheid/ongevallen",
        },
      ],
    },
    {
      name: "Vrije Tijd",
      href: "/verzekeringen/vrije-tijd",
      subItems: [
        { name: "Reis en Annulering", href: "/verzekeringen/vrije-tijd/reis" },
        { name: "Caravan", href: "/verzekeringen/vrije-tijd/caravan" },
        {
          name: "Pleziervaartuig",
          href: "/verzekeringen/vrije-tijd/pleziervaartuig",
        },
        { name: "Fiets", href: "/verzekeringen/vrije-tijd/fiets" },
      ],
    },
  ];

  // Render nothing server-side — wait for client mount
  if (!mounted) return null;

  // Drawer + overlay JSX (portaled to body so it isn't stuck inside navbar)
  const menu = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999]  bg-black/45"
          onClick={() => {
            setIsOpen(false);
            setIsVerzekeringenOpen(false);
            setActiveSubmenu(null);
          }}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="absolute top-0 right-0 h-full bg-white shadow-xl w-80 sm:w-96 md:w-[430px] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            aria-modal="true"
            role="dialog"
          >
            <div className="relative min-h-full p-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsVerzekeringenOpen(false);
                  setActiveSubmenu(null);
                }}
                className="absolute p-2 text-gray-600 top-4 right-4 hover:text-gray-900"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              <nav className="mt-8 space-y-5" aria-label="Mobile menu">
                <Link
                  href="/"
                  ref={firstLinkRef}
                  className="block text-lg font-medium text-gray-900 hover:text-[#00af76]"
                  onClick={() => {
                    setIsOpen(false);
                    setIsVerzekeringenOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Home
                </Link>

                <Link
                  href="/over-ons"
                  className="block text-lg font-medium text-gray-900 hover:text-[#00af76]"
                  onClick={() => {
                    setIsOpen(false);
                    setIsVerzekeringenOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Over ons
                </Link>

                {/* -------- Verzekeringen (parent) -------- */}
                <div>
                  <button
                    onClick={() => {
                      // toggle parent list
                      setIsVerzekeringenOpen((s) => {
                        const next = !s;
                        if (!next) setActiveSubmenu(null); // close children when closing parent
                        return next;
                      });
                    }}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-[#00af76] px-1"
                    aria-expanded={isVerzekeringenOpen}
                  >
                    Verzekeringen
                    <motion.span
                      animate={{ rotate: isVerzekeringenOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isVerzekeringenOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 ml-3 space-y-2 overflow-hidden"
                      >
                        {verzekeringenItems.map((item) => (
                          <div key={item.name}>
                            {/* This button opens the specific submenu (Wonen, Verkeer...) */}
                            <div className="flex items-center justify-between">
                              <Link
                                href={item.href}
                                className="py-2 text-base text-gray-700 hover:text-[#00af76]"
                                onClick={() => {
                                  // navigate to parent page and close drawer
                                  setIsOpen(false);
                                  setIsVerzekeringenOpen(false);
                                  setActiveSubmenu(null);
                                }}
                              >
                                {item.name}
                              </Link>

                              <button
                                aria-expanded={activeSubmenu === item.name}
                                onClick={() =>
                                  setActiveSubmenu((prev) =>
                                    prev === item.name ? null : item.name
                                  )
                                }
                                className="p-1"
                              >
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    activeSubmenu === item.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                            </div>

                            <AnimatePresence>
                              {activeSubmenu === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="ml-4 space-y-1 overflow-hidden"
                                >
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block py-1 text-sm text-gray-600 hover:text-[#00af76]"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setIsVerzekeringenOpen(false);
                                        setActiveSubmenu(null);
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/nieuws"
                  className="block text-lg font-medium text-gray-900 hover:text-[#00af76]"
                  onClick={() => {
                    setIsOpen(false);
                    setIsVerzekeringenOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Nieuws
                </Link>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <Link
                    href="/plan-een-gesprek"
                    className="block w-full text-center bg-[#00af76] text-white py-3 px-6 rounded-full font-medium hover:bg-[#009866] transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      setIsVerzekeringenOpen(false);
                      setActiveSubmenu(null);
                    }}
                  >
                    Start gratis verglijking
                  </Link>
                </div>
              </nav>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-[900px]:hidden flex items-center">
      {/* Toggle sits in navbar visually but overlay is portaled */}
      <button
        onClick={() => setIsOpen((s) => !s)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Sluit menu" : "Open menu"}
        className="p-2 text-white transition-all duration-200 border rounded-full border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Portal the overlay/drawer to body so it's not constrained by navbar */}
      {mounted && createPortal(menu, document.body)}
    </div>
  );
}

export default MobileMenu;
