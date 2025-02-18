import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useAppLanguage } from '../components/AppLanguageContext'; // Import hook

const menuItemStyle = {
  width: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Varela Round, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
};

const HeaderDesktop = () => {
  const { language, toggleLanguage } = useAppLanguage(); // Lấy ngôn ngữ và hàm đổi ngôn ngữ từ context

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Đặt các phần tử cách đều
          alignItems: 'center',
          padding: '5px',
          height: '45px',
          borderRadius: '7px',
          backgroundColor: '#001529',
          width: '500px',
          marginTop: '10px',
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          top: 0,
        }}
      >
        {/* Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: 'none',
            width: 'auto',
          }}
        >
          <Menu.Item key="1" style={menuItemStyle}>
            <Link to="/">{language === 'vi' ? 'GenZ' : 'GenZ'}</Link>
          </Menu.Item>
          <Menu.Item key="2" style={menuItemStyle}>
            <Link to="/GenY">{language === 'vi' ? 'GenY' : 'GenY'}</Link>
          </Menu.Item>
          <Menu.Item key="3" style={menuItemStyle}>
            <Link to="/services">{language === 'vi' ? 'Dịch vụ' : 'Services'}</Link>
          </Menu.Item>
          <Menu.Item key="4" style={menuItemStyle}>
            <Link to="/contact">{language === 'vi' ? 'Liên hệ' : 'Contact'}</Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* Nút đổi ngôn ngữ - Đặt ở ngoài div chính */}
      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '250px',
          backgroundColor: '#f4c40c', // Set background color to #f4c40c
          padding: '5px 10px',
          borderRadius: '5px',
          position: 'fixed',  // Fix the position
          top: '20px',  // Set top position relative to the viewport
          right: '220px',  // Set right position to align it with the right edge
          zIndex: 2000,  // Ensure it stays on top of other elements
          display: 'flex',  // Use flexbox to center content
          justifyContent: 'center',  // Center horizontally
          alignItems: 'center',  // Center vertically
        }}
        onClick={toggleLanguage}
      >
        {language === 'vi' ? 'Bấm để chuyển sang Tiếng Anh' : 'Click to switch to Vietnamese'}
      </div>
    </>
  );
};

export default HeaderDesktop;
