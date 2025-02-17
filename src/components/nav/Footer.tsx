import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Mail, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background/95 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EcoTrack</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering industries to achieve environmental compliance and sustainability.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest updates on environmental compliance and sustainability.
          </p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" size="sm" className="gap-2">
              <Mail className="h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border mt-8 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EcoTrack Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}