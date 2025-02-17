import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Droplets, FileCheck, Leaf, Shield, Check, Users, Globe, Clock, Settings, ThumbsUp } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Environmental Compliance Made Simple
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive environmental monitoring and compliance platform trusted by 300+ industrial clients worldwide
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Explore Dashboard <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Environmental Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
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

            <Card>
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

            <Card>
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Industrial Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">40</div>
              <div className="text-muted-foreground">Countries Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Settings className="h-6 w-6 text-primary"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Integrate</h3>
                  <p className="text-muted-foreground">
                    Connect your systems and data sources to EcoTrack in minutes
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <BarChart3 className="h-6 w-6 text-primary"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Monitor</h3>
                  <p className="text-muted-foreground">
                    Track emissions, water usage, and waste in real-time
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <FileCheck className="h-6 w-6 text-primary"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Report</h3>
                  <p className="text-muted-foreground">
                    Automatically generate compliance reports for 40+ countries
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <ThumbsUp className="h-6 w-6 text-primary"/>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "EcoTrack has transformed how we manage our environmental compliance. It's intuitive, powerful, and reliable."
                  </p>
                  <div className="font-semibold">— John Doe, CEO of GreenCorp</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Globe className="h-6 w-6 text-primary"/>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The automated reporting feature saves us countless hours. Highly recommend EcoTrack!"
                  </p>
                  <div className="font-semibold">— Jane Smith, Sustainability Manager</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Users className="h-6 w-6 text-primary"/>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "EcoTrack's analytics have helped us reduce our carbon footprint significantly."
                  </p>
                  <div className="font-semibold">— Michael Brown, Operations Director</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Environmental Compliance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join industry leaders who trust EcoTrack for their environmental monitoring and compliance needs
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Get Started Today <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}