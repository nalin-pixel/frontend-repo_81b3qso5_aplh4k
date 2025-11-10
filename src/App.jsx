import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#030711]">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
