
import { Drawer, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

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

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px',
        backgroundColor: '#001529',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
      }}
    >
      <MenuOutlined
        style={{ color: 'white', fontSize: '24px' }}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
        width={250}
      >
        <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" style={menuItemStyle}>
            <Link to="/" onClick={closeDrawer}>Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="2" style={menuItemStyle}>
            <Link to="/about" onClick={closeDrawer}>Giới thiệu</Link>
          </Menu.Item>
          <Menu.Item key="3" style={menuItemStyle}>
            <Link to="/services" onClick={closeDrawer}>Dịch vụ</Link>
          </Menu.Item>
          <Menu.Item key="4" style={menuItemStyle}>
            <Link to="/contact" onClick={closeDrawer}>Liên hệ</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
