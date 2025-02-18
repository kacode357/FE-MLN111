import { Drawer, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAppLanguage } from '../components/AppLanguageContext'; // Import hook ngôn ngữ

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

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

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
      {/* Icon stays on the far right */}
      <MenuOutlined
        style={{
          color: 'white',
          fontSize: '24px',
          position: 'absolute',
          right: '10px', // Align to the right
        }}
        onClick={showDrawer}
      />
      
      {/* Menu text centered */}
      <span
        style={{
          color: 'white',
          fontSize: '18px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)', // Center the text
          fontWeight: 'bold',
        }}
      >
        Menu
      </span>

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
        width={250}
      >
        <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" style={menuItemStyle}>
            <Link to="/" onClick={closeDrawer}>GenZ</Link>
          </Menu.Item>
          <Menu.Item key="2" style={menuItemStyle}>
            <Link to="/GenY" onClick={closeDrawer}>GenY</Link>
          </Menu.Item>
          <Menu.Item key="3" style={menuItemStyle}>
            <Link to="/services" onClick={closeDrawer}>Dịch vụ</Link>
          </Menu.Item>
          <Menu.Item key="4" style={menuItemStyle}>
            <Link to="/contact" onClick={closeDrawer}>Liên hệ</Link>
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
