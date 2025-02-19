import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useAppLanguage } from '../components/AppLanguageContext';
import logo from '../assets/logomln1.png';

const HeaderDesktop = () => {
  const { language, toggleLanguage } = useAppLanguage();
  const location = useLocation();

  const menuItems = [
    { key: '1', path: '/', label: language === 'vi' ? 'GenZ' : 'GenZ' },
    { key: '2', path: '/genY', label: language === 'vi' ? 'GenY' : 'GenY' },
    { key: '3', path: '/karlMarx', label: language === 'vi' ? 'Karl Marx' : 'Karl Marx' },
    { key: '4', path: '/content', label: language === 'vi' ? 'Nội dung' : 'Content' },
    { key: '5', path: '/contact', label: language === 'vi' ? 'Liên Hệ' : 'Contact' }
  ];

  const getSelectedKey = () => {
    return menuItems.find(item => item.path === location.pathname)?.key || '1';
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#08142c] shadow-md z-50 flex items-center justify-between px-10 py-3">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-14" />
      </Link>

      {/* Menu Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px',
          height: '45px',
          borderRadius: '7px',
          backgroundColor: '#003d50',
          width: '640px',
          marginTop: '15px',
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          top: 0,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getSelectedKey()]}
          className="bg-transparent border-none flex gap-6"
        >
          {menuItems.map(item => (
            <Menu.Item key={item.key} className="text-white font-bold text-lg hover:text-yellow-400">
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>

      {/* Language Switch */}
      <button
        onClick={toggleLanguage}
        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition"
      >
        {language === 'vi' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese'}
      </button>
    </header>
  );
};

export default HeaderDesktop;