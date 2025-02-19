import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AppLanguageProvider } from './components/AppLanguageContext';
import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';
import Home from './components/GenZ/GenZ';
import GenY from './components/GenY/GenY';
import Content from './components/Content/Content';
import Contact from './components/Contact/Contact';
import KarlMarx from './components/KarlMarx/KarlMarx';
import { Layout } from 'antd';
import FooterComponent from './components/Footer';
import ChatAI from './components/ChatAI'; // Import ChatAI

export default function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <AppLanguageProvider>
      <Router>
        <Layout>
          {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}

          <Layout
            style={{
              paddingTop: isDesktop ? '90px' : '30px',
              backgroundColor: '#08142c',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genY" element={<GenY />} />
              <Route path="/content" element={<Content />} />
              <Route path="/karlMarx" element={<KarlMarx />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>

          <FooterComponent />
          
          {/* Hiển thị cửa sổ chat */}
          <ChatAI />
        </Layout>
      </Router>
    </AppLanguageProvider>
  );
}
