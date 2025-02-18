// App.js

import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';

import Home from './components/Home/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  // Sử dụng useMediaQuery để kiểm tra kích thước màn hình
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <Router>
      <Layout>
        {/* Chỉ hiển thị header tương ứng với kích thước màn hình */}
        {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}

        <Layout style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
}
