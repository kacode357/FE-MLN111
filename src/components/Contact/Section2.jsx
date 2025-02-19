import { Card } from 'antd'; // Import Card của Ant Design
import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import thanhdat from '../../assets/thanhdat.jpg'; // Giả sử bạn đã có hình trong thư mục assets
import tanloc from '../../assets/tanloc.jpg'; // Giả sử bạn đã có hình trong thư mục assets
import trongvinh from '../../assets/trongvinh.png'; // Giả sử bạn đã có hình trong thư mục assets
import noimg from '../../assets/noimg.png'; // Giả sử bạn đã có hình trong thư mục assets

const { Meta } = Card;

const Section2 = () => {
  const { language } = useAppLanguage();
  const imageData = [
    { src: noimg, title: 'Lưu Ka Ka' },
    { src: thanhdat, title: 'Võ Thành Đạt' },
    { src: tanloc, title: 'Huỳnh Tấn Lộc' },
    { src: trongvinh, title: 'Đoàn Trọng Vinh' },
  ];

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#1a2a45' }}>
      {/* Tiêu đề căn giữa */}
      <h3
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center"
        style={{ color: '#f1c40f' }}
      >
        {language === 'vi' ? 'Liên hệ với chúng tôi' : 'Contact Us'}
      </h3>

      {/* Image Section - 4 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {imageData.map((image, index) => (
          <div key={index} className="flex justify-center">
            <Card
              hoverable
              cover={
                <img
                  alt={image.title}
                  src={image.src}
                  className="w-52 h-64 object-cover rounded-t-lg p-1"
                />
              }
              className="w-full h-auto rounded-lg"
              style={{ maxWidth: '300px', backgroundColor: '#2f3c56' }} // Thiết lập max-width và background color
            >
              <Meta
                title={
                  <div className="text-center text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                    {image.title}
                  </div>
                }
                // Bỏ phần description
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
