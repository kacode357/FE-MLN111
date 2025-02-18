import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import dangthuhaImage from '../../assets/dangthuha.png'; // Giả sử bạn đã có hình trong thư mục assets

const Section1 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // lưu trữ đối tượng SpeechSynthesis
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Đoạn văn bản tùy theo ngôn ngữ
  const textContent = language === 'vi'
    ? "Generation Z hay Gen Z là nhóm người sinh từ năm 1995 đến năm 2012 (có người nói từ năm 1997 đến năm 2015). Trong đó quãng tuổi được công nhận rộng rãi nhất là những năm sinh 1997-2012. Phần lớn Gen Z là con cái của Gen X (sinh từ năm 1965 đến 1979), thế hệ tiếp theo sau Millennials (Thế hệ Y)."
    : "Generation Z, or Gen Z, refers to people born from 1995 to 2012 (some say from 1997 to 2015). The most widely accepted range is between 1997 and 2012. Most of Gen Z are children of Gen X (born from 1965 to 1979), the generation following Millennials (Generation Y).";

  const handleSpeech = () => {
    if (!isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(textContent);
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
            {language === 'vi' ? 'Thế hệ Gen Z' : 'Generation Z'}
          </h3>
          
          <div className="flex items-center">
            <p className="text-3xl sm:text-2xl md:text-4xl text-white font-light leading-relaxed font-poppins">
              {textContent}
            </p>
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
            Đăng Thu Hà
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
