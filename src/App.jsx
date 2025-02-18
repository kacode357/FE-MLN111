import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { AppLanguageProvider } from './components/AppLanguageContext'; // Import AppLanguageProvider

import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';

import Home from './components/GenZ/GenZ';
import GenY from './components/GenY/GenY';
import Services from './components/Services';
import Contact from './components/Contact';
import { Layout } from 'antd';

export default function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <AppLanguageProvider> {/* Bọc toàn bộ ứng dụng trong AppLanguageProvider */}
      <Router>
        <Layout>
          {/* Chỉ hiển thị header tương ứng với kích thước màn hình */}
          {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}

          <Layout style={{ paddingTop: '60px', backgroundColor: '#08142c' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/GenY" element={<GenY />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Layout>
      </Router>
    </AppLanguageProvider>
  );
}
