import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Droplets, FileCheck, Shield, Settings, ThumbsUp, Users, Globe } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutUs from "@/components/AboutUs";
import { Navbar } from "@/components/nav/Navbar";
import ContactSection from "@/components/Contact";
import { Footer } from "@/components/nav/Footer";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Public company logos (replace with actual URLs)
const partnerLogos = [
  "https://logo.clearbit.com/google.com",
  "https://logo.clearbit.com/microsoft.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/tesla.com",
  "https://logo.clearbit.com/apple.com",
  "https://logo.clearbit.com/ibm.com",
  "https://logo.clearbit.com/samsung.com",
  "https://logo.clearbit.com/intel.com",
];

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Features section animation
    const featureCards = gsap.utils.toArray(".feature-card");
    featureCards.forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: i * 0.1
      });
    });

    // Stats section animation
    const statItems = gsap.utils.toArray(".stat-item");
    statItems.forEach((item: any, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: i * 0.2
      });
    });

    // Partners section animation
    gsap.from(".partner-logos", {
      scrollTrigger: {
        trigger: partnersRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // CTA section animation
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Environmental Compliance Made Simple
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive environmental monitoring and compliance platform trusted by 300+ industrial clients worldwide
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 py-6 rounded-3xl">
                Explore Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Environmental Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <BarChart3 className="h-6 w-6 text-primary"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Emissions Tracking</h3>
                  <p className="text-muted-foreground">
                    Real-time monitoring and reporting of greenhouse gas emissions across facilities
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Droplets className="h-6 w-6 text-primary"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Water Management</h3>
                  <p className="text-muted-foreground">
                    Track water usage, identify optimization opportunities, and ensure compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Shield className="h-6 w-6 text-primary"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Waste Analytics</h3>
                  <p className="text-muted-foreground">
                    Comprehensive waste management tracking and optimization tools
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="stat-item shadow px-4 py-6 rounded-lg hover:border-green-600 hover:border">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-muted-foreground">Industrial Clients</div>
              </div>
              <div className="stat-item shadow px-4 py-6 rounded-lg hover:border-green-600 hover:border">
                <div className="text-4xl font-bold text-primary mb-2">40</div>
                <div className="text-muted-foreground">Countries Covered</div>
              </div>
              <div className="stat-item shadow px-4 py-6 rounded-lg hover:border-green-600 hover:border">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section ref={partnersRef} className="py-20 px-6 bg-muted/30 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-20">Trusted by Industry Leaders</h2>
            <div className="partner-logos">
              <motion.div
                style={{ x }}
                className="flex gap-10"
              >
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="Partner Logo"
                    className="h-22 w-auto px-3 opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Environmental Compliance?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join industry leaders who trust EcoTrack for their environmental monitoring and compliance needs
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 py-7 rounded-3xl">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <AboutUs/>
      </div>
      <ContactSection/>
      <Footer/>
    </>
  );
}