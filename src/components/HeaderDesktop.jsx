
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const menuItemStyle = {
  width: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Varela Round, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
};

const HeaderDesktop = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
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
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%',
      }}
    >
      <Menu.Item key="1" style={menuItemStyle}>
        <Link to="/">Trang chủ</Link>
      </Menu.Item>
      <Menu.Item key="2" style={menuItemStyle}>
        <Link to="/about">Giới thiệu</Link>
      </Menu.Item>
      <Menu.Item key="3" style={menuItemStyle}>
        <Link to="/services">Dịch vụ</Link>
      </Menu.Item>
      <Menu.Item key="4" style={menuItemStyle}>
        <Link to="/contact">Liên hệ</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default HeaderDesktop;
