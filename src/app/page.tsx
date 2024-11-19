"use client"

import { useState } from "react"
import { Button } from "./component/ui/button"
import { Input } from "./component/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./component/ui/tabs"
import {  Mail, Phone, Menu, Database, Cpu, Globe, BookOpen, Building2, Sprout, Mountain, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("urban")
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="flex flex-col justify-center   min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b px-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Globe className="h-8 w-8 text-green-600" />
            </motion.div>
            <span className="ml-2 text-2xl font-bold text-gray-900">Datolla</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-md font-semibold hover:text-green-600 transition-colors text-gray-800"  href="#">
              Solutions
            </Link>
            <Link className="text-md font-semibold hover:text-green-600 transition-colors text-gray-800" href="#">
              Industries
            </Link>
            <Link className="text-md font-semibold hover:text-green-600 transition-colors text-gray-800" href="#">
              CGLA
            </Link>
            <Link className="text-md font-semibold hover:text-green-600 transition-colors text-gray-800" href="#">
              About Us
            </Link>
          </nav>
          <Button className="hidden md:inline-flex hover:bg-slate-600" variant="outline">
            Contact Us
          </Button>
          <Button className="md:hidden" size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b"
          >
            <nav className="container py-4 flex flex-col gap-2">
              <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#">
                Solutions
              </Link>
              <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#">
                Industries
              </Link>
              <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#">
                CGLA
              </Link>
              <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#">
                About Us
              </Link>
              <Button className="w-full mt-2" variant="outline">
                Contact Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1 flex items-center justify-center flex-col">
  <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
    <div className="absolute inset-0 bg-green-100 bg-opacity-50">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#4CAF50"
          fillOpacity="0.1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div className="container relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
            Empowering Decisions with Geospatial Intelligence
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
            Datolla: Transforming complex data into actionable insights for a data-centric world
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-x-4"
        >
          <Button className="bg-green-600 text-white hover:bg-green-700">Explore Solutions</Button>
          <Button variant="outline" className="text-green-600 hover:bg-green-50">
            Learn About CGLA
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
  <section className="w-full  bg-white  flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl text-center mb-8">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 border-green-200 p-6 rounded-lg bg-white shadow-lg"
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <Database className="text-green-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900">Advanced Analytics</h3>
                <p className="text-sm text-gray-700 text-center">
                  Transform complex geospatial data into actionable insights for informed decision-making.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 border-green-200 p-6 rounded-lg bg-white shadow-lg"
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <Cpu className="text-green-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900">3D Visualization</h3>
                <p className="text-sm text-gray-700 text-center">
                  Create immersive 3D models and visualizations for enhanced spatial understanding and planning.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 border-green-200 p-6 rounded-lg bg-white shadow-lg"
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <Globe className="text-green-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900">Geospatial Platforms</h3>
                <p className="text-sm text-gray-700 text-center">
                  Develop custom geospatial platforms tailored to your industry-specific needs and challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 text-center mb-8">Industries We Serve</h2>
            <Tabs defaultValue="urban" className="w-full" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 text-md bg-green-100 text-green-700">
                <TabsTrigger value="urban">Urban Planning</TabsTrigger>
                <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
                <TabsTrigger value="environment">Environment</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="urban" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart City Development</h3>
                        <p className="text-gray-700 mb-4">
                          Our geospatial solutions help urban planners optimize infrastructure, reduce traffic congestion, and improve quality of life for city residents.
                        </p>
                        <Button variant="outline" className="text-white hover:bg-gray-800">Learn More</Button>
                      </div>
                      <div className="md:w-1/2 flex items-center justify-center">
                        <Building2 className="h-32 w-32 text-green-600" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="agriculture" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Precision Agriculture</h3>
                        <p className="text-gray-700 mb-4">
                          Datolla&apos; advanced analytics and remote sensing technologies enable farmers to optimize crop yields, manage resources efficiently, and practice sustainable agriculture.
                        </p>
                        <Button variant="outline" className="text-white hover:bg-gray-800">Learn More</Button>
                      </div>
                      <div className="md:w-1/2 flex items-center justify-center">
                        <Sprout className="h-32 w-32 text-green-600" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="environment" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">Environmental Management</h3>
                        <p className="text-gray-700 mb-4">
                          Our geospatial tools aid in monitoring ecosystems, tracking climate change impacts, and supporting conservation efforts for a sustainable future.
                        </p>
                        <Button variant="outline" className="text-white hover:bg-gray-800">Learn More</Button>
                      </div>
                      <div className="md:w-1/2 flex items-center justify-center">
                        <Mountain className="h-32 w-32 text-green-600" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="engineering" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">Engineering Excellence</h3>
                        <p className="text-gray-700 mb-4">
                          Datolla&apos; 3D visualization and simulation tools revolutionize engineering projects, from infrastructure planning to risk assessment and resource optimization.
                        </p>
                        <Button variant="outline" className="text-white hover:bg-gray-800">Learn More</Button>
                      </div>
                      <div className="md:w-1/2 flex items-center justify-center">
                        <Cpu className="h-32 w-32 text-green-600" />
                      </div>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-green-600 ">
          <div className="absolute inset-0">
            <svg
              className="absolute bottom-0 left-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="0.1"
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Center for Geospatial Learning and Advancement (CGLA)
                </h2>
                <p className="mx-auto max-w-[700px] text-green-100 md:text-xl">
                  Empowering the next generation of geospatial professionals through world-class education and training programs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-white text-green-600 hover:bg-green-100" size="lg">
                  Explore CGLA Programs
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900">Join the Datolla Community</h2>
                <p className="text-gray-700 mb-4">
                  Stay updated with the latest in geospatial technology, industry insights, and Datolla news.
                </p>
                <form className="space-y-4">
                  <Input className="w-full bg-white" placeholder="Enter your email" type="email" />
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">Subscribe to Newsletter</Button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <BookOpen className="h-48 w-48 text-green-600" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setShowMore(!showMore)}
                >
                  <span className="text-lg font-semibold text-gray-700">What industries does Datolla serve?</span>
                  <ChevronDown className={`h-6 w-6 transform transition-transform text-gray-900 g${showMore ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-2 text-gray-700">
                        Datolla serves a wide range of industries including urban planning, agriculture, environmental management, and engineering. Our geospatial solutions are adaptable to various sectors that require data-driven decision making and spatial analysis.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Add more FAQ items here */}
            </div>
          </div>
        </section>
</main>

      <footer className="w-full py-6 bg-green-800 text-white">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Globe className="h-6 w-6 text-green-400" />
            <span className="text-lg font-semibold">Datolla</span>
          </div>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-green-400 transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:text-green-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-green-400 transition-colors" href="#">
              Contact Us
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Mail className="h-6 w-6 text-green-400" />
            <Phone className="h-6 w-6 text-green-400" />
          </div>
        </div>
      </footer>
    </div>
  )
}