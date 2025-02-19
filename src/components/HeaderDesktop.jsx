import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'; // Thêm useLocation để lấy đường dẫn
import { useAppLanguage } from '../components/AppLanguageContext'; // Import hook
import logo from '../assets/logomln1.png';
const menuItemStyle = {
  width: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Varela Round, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  margin: '0 3px', // Thêm margin để tạo khoảng cách giữa các item
};

const HeaderDesktop = () => {
  const { language, toggleLanguage } = useAppLanguage(); // Lấy ngôn ngữ và hàm đổi ngôn ngữ từ context
  const location = useLocation(); // Lấy location để biết đường dẫn hiện tại

  // Hàm xác định menu nào đang được chọn dựa trên đường dẫn hiện tại
  const getMenuSelectedKey = () => {
    const path = location.pathname; // Lấy đường dẫn hiện tại

    if (path === '/genY') {
      return '2';
    } else if (path === '/karlMarx') {
      return '3';
    } else if (path === '/content') {
      return '4';
    } else if (path === '/contact') {
      return '5';
    }
    return '1'; // Mặc định là GenZ
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start', // Align items to the left
          alignItems: 'center',
          position: 'fixed',
          left: '300px', // Position it to the left
          top: '20px',
          zIndex: 2000, // Ensure it stays on top of other elements
        }}
      >
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ height: '70px', marginRight: '15px' }} />

        {/* Nút đổi ngôn ngữ */}
      
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Đặt các phần tử cách đều
          alignItems: 'center',
          padding: '5px',
          height: '45px',
          borderRadius: '7px',
          backgroundColor: '#003d50',
          width: '640px', // Increased width for more space
          marginTop: '25px',
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
          selectedKeys={[getMenuSelectedKey()]} // Xác định menu đang được chọn dựa trên đường dẫn
          style={{
           
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: 'none',
            width: 'auto', // Ensures the menu is flexible based on items
          }}
        >
          <Menu.Item key="1" style={menuItemStyle} >
            <Link to="/">{language === 'vi' ? 'GenZ' : 'GenZ'}</Link>
          </Menu.Item>
          <Menu.Item key="2" style={menuItemStyle}>
            <Link to="/genY">{language === 'vi' ? 'GenY' : 'GenY'}</Link>
          </Menu.Item>
          <Menu.Item key="3" style={menuItemStyle}>
            <Link to="/karlMarx">{language === 'vi' ? 'Karl Marx' : 'Karl Marx'}</Link>
          </Menu.Item>
          <Menu.Item key="4" style={menuItemStyle}>
            <Link to="/content">{language === 'vi' ? 'Nội dung' : 'Content'}</Link>
          </Menu.Item>
          <Menu.Item key="5" style={menuItemStyle}>
            <Link to="/contact">{language === 'vi' ? 'Liên Hệ' : 'Contact'}</Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* Nút đổi ngôn ngữ - Đặt ở ngoài div chính */}
      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '180px',
          backgroundColor: '#f4c40c', // Set background color to #f4c40c
          padding: '5px 10px',
          borderRadius: '5px',
          position: 'fixed',  // Fix the position
          top: '30px',  // Set top position relative to the viewport
          right: '20px',  // Set right position to align it with the right edge
          zIndex: 2000,  // Ensure it stays on top of other elements
          display: 'flex',  // Use flexbox to center content
          justifyContent: 'center',  // Center horizontally
          alignItems: 'center',  // Center vertically
        }}
        onClick={toggleLanguage}
      >
        {language === 'vi' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese'}
      </div>
    </>
  );
};

export default HeaderDesktop;
