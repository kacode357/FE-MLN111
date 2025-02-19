import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ

const Section1 = () => {
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#08142c' }}>
      <div className="flex flex-col justify-center items-center">
        <h3
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold "
          style={{ color: '#f1c40f' }}
        >
          {language === 'vi' ? 'Nội dung liên quan' : 'Related Content'}
        </h3>
      </div>
    </div>
  );
};

export default Section1;
