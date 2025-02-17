import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EcoTrack</span>
          </div>
        </a>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation as (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/features">
            <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Features
            </span>
          </a>
          <a href="/pricing">
            <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Pricing
            </span>
          </a>
          <a href="/about">
            <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              About
            </span>
          </a>
          <a href="/contact">
            <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Contact
            </span>
          </a>
        </div>

        {/* Call-to-Action Button */}
        <a href="/dashboard">
          <Button size="sm" className="gap-2 hidden md:flex">
            Get Started
          </Button>
        </a>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-4">
          <a href="/features">
            <span className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Features
            </span>
          </a>
          <a href="/pricing">
            <span className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Pricing
            </span>
          </a>
          <a href="/about">
            <span className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              About
            </span>
          </a>
          <a href="/contact">
            <span className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Contact
            </span>
          </a>
          <a href="/dashboard">
            <Button size="sm" className="w-full gap-2">
              Get Started
            </Button>
          </a>
        </div>
      )}
    </motion.nav>
  );
}