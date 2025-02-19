import { Drawer, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAppLanguage } from '../components/AppLanguageContext'; // Import hook ngôn ngữ
import { useLocation } from 'react-router-dom'; // Import useLocation

// Import your logo
import logo from '../assets/logomln1.png'; // Adjust the path as needed

const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Varela Round, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
};

const HeaderMobile = () => {
  const [visible, setVisible] = useState(false);
  const { language, toggleLanguage } = useAppLanguage(); // Lấy ngôn ngữ và hàm đổi ngôn ngữ từ context
  const location = useLocation(); // Lấy location từ react-router

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  // Xác định key của menu dựa trên đường dẫn hiện tại
  const selectedKey = location.pathname === '/genY' ? '2' :
                      location.pathname === '/karlMarx' ? '3' :
                      location.pathname === '/content' ? '4' :
                      location.pathname === '/blog' ? '5' : '1';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the Menu text
        padding: '10px',
        backgroundColor: '#001529',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          height: '40px', // Adjust size of logo
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)', // Center logo
          top: '10px',
        }}
      />

      {/* Icon stays on the far right */}
      <MenuOutlined
        style={{
          color: 'white',
          fontSize: '30px',
       
          position: 'absolute',
          right: '10px', // Align to the right
          top: '15px',  // Adjust to align with logo
        }}
        onClick={showDrawer}
      />

      {/* Menu text centered */}
   

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
        width={250}
      >
        <Menu
          mode="vertical"
          theme="dark"
          selectedKeys={[selectedKey]} // Chọn item dựa trên đường dẫn
        >
          <Menu.Item key="1" style={menuItemStyle}>
            <Link to="/" onClick={closeDrawer}>
              {language === 'vi' ? 'GenZ' : 'GenZ'}
            </Link>
          </Menu.Item>
          <Menu.Item key="2" style={menuItemStyle}>
            <Link to="/genY" onClick={closeDrawer}>
              {language === 'vi' ? 'GenY' : 'GenY'}
            </Link>
          </Menu.Item>
          <Menu.Item key="3" style={menuItemStyle}>
            <Link to="/karlMarx" onClick={closeDrawer}>
              {language === 'vi' ? 'Karl Marx' : 'Karl Marx'}
            </Link>
          </Menu.Item>
          <Menu.Item key="4" style={menuItemStyle}>
            <Link to="/content" onClick={closeDrawer}>
              {language === 'vi' ? 'Nội dung' : 'Content'}
            </Link>
          </Menu.Item>
          <Menu.Item key="5" style={menuItemStyle}>
            <Link to="/contact" onClick={closeDrawer}>
              {language === 'vi' ? 'Liên Hệ' : 'Contact'}
            </Link>
          </Menu.Item>
        </Menu>

        {/* Add Language Switch Button */}
        <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{
              width: '100%',
              backgroundColor: '#08142c',
              color: 'white',
              fontWeight: 'bold',
            }}
            onClick={toggleLanguage}
          >
            {language === 'vi' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese'}
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
