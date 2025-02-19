import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import dangthuhaImage from '../../assets/karlMarx.png'; // Giả sử bạn đã có hình trong thư mục assets

const Section1 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // lưu trữ đối tượng SpeechSynthesis
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Tách các nội dung thành các phần riêng biệt cho giao diện đẹp hơn
  const content = language === 'vi'
    ? [
        { text: "Sinh: Karl Heinrich Marx, 5 tháng 5 năm 1818, Trier, Phổ, Bang liên Đức", isImportant: true },
        { text: "Mất: 14 tháng 3 năm 1883 (64 tuổi), London, Anh quốc", isImportant: true },
        { text: "Quốc tịch: Phổ (1818–1845), Không quốc tịch (sau năm 1845)", isImportant: false },
        { text: "Học vị: Đại học Bonn, Đại học Berlin, Đại học Jena (PhD, 1841)", isImportant: true },
        { text: "Con cái: Eleanor Marx, Henry Edward Guy Marx, Jenny Eveline Frances Marx, Edgar Marx", isImportant: false },
        { text: "Trường phái: Triết học lục địa – Chủ nghĩa Marx", isImportant: true },
        { text: "Luận văn: Sự khác biệt giữa triết học tự nhiên Democritus và Epicurus (1841)", isImportant: true }
      ]
    : [
        { text: "Born: Karl Heinrich Marx, May 5, 1818, Trier, Prussia, German Confederation", isImportant: true },
        { text: "Died: March 14, 1883 (aged 64), London, United Kingdom", isImportant: true },
        { text: "Nationality: Prussian (1818–1845), Stateless (after 1845)", isImportant: false },
        { text: "Education: University of Bonn, University of Berlin, University of Jena (PhD, 1841)", isImportant: true },
        { text: "Children: Eleanor Marx, Henry Edward Guy Marx, Jenny Eveline Frances Marx, Edgar Marx", isImportant: false },
        { text: "School: Continental philosophy – Marxism", isImportant: true },
        { text: "Dissertation: Difference Between the Natural Philosophy of Democritus and Epicurus (1841)", isImportant: true }
      ];

  const handleSpeech = () => {
    if (!isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(content.map(item => item.text).join('\n'));
      utterance.lang = language === 'vi' ? 'vi-VN' : 'en-US'; // Ngôn ngữ tùy theo context

      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === (language === 'vi' ? 'vi-VN' : 'en-US'));
      if (voice) {
        utterance.voice = voice;
      }

      speechSynthesis.speak(utterance);

      utterance.onend = () => setIsSpeaking(false);

      setIsSpeaking(true);
    }
  };

  const handleStop = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    setSpeechSynthesis(window.speechSynthesis);
  }, []);

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#08142c' }}>
      <div className="flex flex-col sm:flex-row md:grid md:grid-cols-10 gap-4">
        <div className="sm:w-full md:col-span-7 p-4 rounded relative">
          <h3 className="text-5xl sm:text-5xl md:text-5xl font-extrabold mb-5" style={{ color: '#f1c40f' }}>
            {language === 'vi' ? 'Karl Marx' : 'Karl Marx'}
          </h3>
          
          <div className="flex items-center">
            <div className="text-white font-light leading-relaxed font-poppins space-y-3">
              {content.map((item, index) => (
                <p
                  key={index}
                  className={`text-xl sm:text-2xl md:text-3xl ${item.isImportant ? 'text-white-400 font-bold' : 'text-white'}`}
                >
                  {item.text}
                </p>
              ))}
            </div>
            <div className="ml-4">
              <Button 
                onClick={handleSpeech} 
                icon={<PlayCircleOutlined />} 
                shape="circle" 
                size="large" 
                style={{ marginRight: 10 }} 
              />
              {isSpeaking && (
                <Button 
                  onClick={handleStop} 
                  icon={<PauseCircleOutlined />} 
                  shape="circle" 
                  size="large" 
                />
              )}
            </div>
          </div>
        </div>

        <div className="sm:w-full md:col-span-3 p-4 rounded text-center">
          <a 
            href="https://www.facebook.com/dangthuhaf.official/?locale=vi_VN" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={dangthuhaImage} 
              alt="Đăng Thu Hà" 
              className="w-2/3 sm:w-3/4 h-auto mx-auto rounded mb-3"
            />
          </a>
          <a 
            href="https://www.facebook.com/dangthuhaf.official/?locale=vi_VN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-white underline hover:text-blue-800"
          >
            Karl Marx
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
