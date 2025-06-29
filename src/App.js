import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Services from './components/Services';
import Staff from './components/Staff';
import Access from './components/Access';
import Contact from './components/Contact';
import SEO from './components/SEO';
import Menu from './components/Menu';
import Salon from './components/Salon';
import StaffDetail from './components/StaffDetail';
import Recruit from './components/Recruit';
import FAQ from './components/FAQ';
import TestPage from './components/TestPage';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import { HelmetProvider } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HelmetProvider>
        <div className="min-h-screen flex flex-col">
          <SEO />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <SEO
                    title="ホーム"
                    description="練馬区南大泉の美容室「ぴあざさるうと」の公式サイトです。白髪ぼかし、ヘッドスパ、カラー、パーマ、トリートメントなど、お客様一人ひとりに合わせた施術を心がけています。"
                    keywords="美容室,練馬区,白髪ぼかし,ヘッドスパ,カラー,パーマ,トリートメント,完全予約制"
                  />
                  <Hero />
                  <Concept />
                  <Services />
                  <Staff />
                  <Gallery />
                  <Testimonials />
                  <Access />
                </>
              } />
              <Route path="/menu" element={<Menu />} />
              <Route path="/salon" element={<Salon />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/staff/:id" element={<StaffDetail />} />
              <Route path="/recruit" element={<Recruit />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;
