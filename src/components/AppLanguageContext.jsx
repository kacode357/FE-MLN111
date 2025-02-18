import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Tạo context để quản lý ngôn ngữ ứng dụng
const AppLanguageContext = createContext();

export const useAppLanguage = () => useContext(AppLanguageContext);

export const AppLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi'); // Mặc định là Tiếng Việt

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi')); // Chuyển đổi giữa Tiếng Việt và Tiếng Anh
  };

  return (
    <AppLanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </AppLanguageContext.Provider>
  );
};

// Đảm bảo children là prop hợp lệ
AppLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // children phải là một node hợp lệ
};

export { AppLanguageContext }; // Export context để sử dụng ở nơi khác
