import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import dangthuhaImage from '../../assets/khoailangthang.png'; // Giả sử bạn đã có hình trong thư mục assets

const Section1 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // lưu trữ đối tượng SpeechSynthesis
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Đoạn văn bản tùy theo ngôn ngữ
  const textContent = language === 'vi'
    ? "Gen Y còn được biết đến với tên gọi khác là MIllennials, thế hệ Peter Pan, thế hệ Boomerang, thế hệ We… Họ là những người sinh ra vào những năm 1981 -1996 mà cho tới ngày nay ở việt nam còn gọi những thế hệ này là thế hệ 8x và 9x."
    : "Gen Y is also known as MIllennials, Peter Pan generation, Boomerang generation, We generation... They are people born in the years 1981-1996 and until today in Vietnam these generations are still called generation 8x and 9x.";

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
            {language === 'vi' ? 'Thế hệ Gen Y' : 'Generation Y'}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-3xl sm:text-2xl md:text-4xl text-white font-light leading-relaxed font-poppins">
              {textContent}
            </p>

            <div className="ml-4 flex items-center space-x-2">
              <Button 
                onClick={handleSpeech} 
                icon={<PlayCircleOutlined />} 
                shape="circle" 
                size="large" 
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
            href="https://www.facebook.com/KhoaiLangThang/?locale=vi_VN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-white underline hover:text-blue-800"
          >
            Khoai Lang Thang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
