// NavItems.jsx - Desktop navigation with responsive dropdown
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

function NavItems() {
  const [isVerzekeringenOpen, setIsVerzekeringenOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsVerzekeringenOpen(false);
        setOpenSubMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

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

  const menuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const subMenuVariants = {
    hidden: { opacity: 0, x: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const handleVerzekeringenToggle = (e) => {
    // Stop de link-navigatie als we alleen de dropdown willen openen
    e.preventDefault();
    e.stopPropagation();
    setIsVerzekeringenOpen(!isVerzekeringenOpen);
  };

  return (
    <div
      className="flex items-center justify-center space-x-4 text-sm text-white lg:space-x-8 lg:text-base"
      ref={navRef}
    >
      <Link href="/">
        <span className="transition-colors hover:text-gray-300">Home</span>
      </Link>
      <Link href="/over-ons">
        <span className="transition-colors hover:text-gray-300 text-nowrap">
          Over ons
        </span>
      </Link>

      <div
        className="relative"
        onMouseEnter={() =>
          window.innerWidth >= 1024 && setIsVerzekeringenOpen(true)
        }
        onMouseLeave={() =>
          window.innerWidth >= 1024 && setIsVerzekeringenOpen(false)
        }
      >
        <div className="flex items-center">
          <Link href="/verzekeringen">
            <span className="transition-colors cursor-pointer hover:text-gray-300">
              Verzekeringen
            </span>
          </Link>
          {/* Dit is het aparte klikbare gebied voor de dropdown */}
          <motion.div
            onClick={handleVerzekeringenToggle}
            className="p-1 cursor-pointer"
            animate={{ rotate: isVerzekeringenOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4 ml-1 lg:w-5 lg:h-5" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isVerzekeringenOpen && (
            <motion.div
              className="absolute z-20 w-48 mt-2 -translate-x-1/2 bg-white rounded-md shadow-lg lg:w-56 left-1/2 ring-1 ring-black ring-opacity-5"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <div className="py-1">
                {verzekeringenItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      window.innerWidth >= 1024 && setOpenSubMenu(item.name)
                    }
                    onMouseLeave={() =>
                      window.innerWidth >= 1024 && setOpenSubMenu(null)
                    }
                  >
                    <div className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Link href={item.href}>
                        <span className="flex-grow">{item.name}</span>
                      </Link>
                      <ChevronRight
                        className="w-4 h-4 ml-2 cursor-pointer shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenSubMenu(
                            openSubMenu === item.name ? null : item.name
                          );
                        }}
                      />
                    </div>
                    <AnimatePresence>
                      {openSubMenu === item.name && (
                        <motion.div
                          className="absolute left-full top-0 mt-[-1px] ml-1 w-48 lg:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 lg:block"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={subMenuVariants}
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <Link key={subItem.name} href={subItem.href}>
                                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                  {subItem.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link href="/nieuws">
        <span className="transition-colors hover:text-gray-300">Nieuws</span>
      </Link>
    </div>
  );
}

export default NavItems;
