import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { useAppLanguage } from '../AppLanguageContext'; // Importing the language context hook

const Section6 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const { language } = useAppLanguage(); // Use language context hook to get the current language

  // Define the content based on the current language
  const content = {
    title: language === 'vi' ? 'Khả năng giao tiếp, hội nhập' : 'Communication Skills and Integration',
    text: language === 'vi' 
      ? `Thế hệ Gen Y này thường có xu hướng gắn kết với cộng đồng tạo ra những hội nhóm và câu lạc bộ với nhiều lĩnh vực khác nhau. Cùng với đó thời đại công nghệ đang phát triển, các mạng xã hội bắt đầu trở nên rầm rộ. Nhờ vậy khả năng giao tiếp của Gen Y rất tốt, những người thuộc thế hệ này họ biết cách giữ và tìm kiếm các mối quan hệ trong công việc và cuộc sống.` 
      : `Generation Y tends to connect with the community by forming groups and clubs in various fields. With the development of technology and the rise of social media, communication skills among Gen Y are highly developed. People from this generation know how to maintain and seek relationships both in their professional lives and personal affairs.`,
    image: 'https://base.vn/wp-content/uploads/2024/08/meo-tang-ky-nang-giao-tiep-1024x682.webp', // Same image for both languages
  };

  const handleSpeech = () => {
    const text = content.text;

    if (!isSpeaking) {
      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'vi' ? 'vi-VN' : 'en-US'; // Set the language dynamically

      // Choose the voice (if available)
      const voices = speechSynthesis.getVoices();
      const selectedVoice = voices.find(voice => voice.lang === utterance.lang);
      if (selectedVoice) {
        utterance.voice = selectedVoice; // Use the appropriate voice
      }

      // Speak the text
      speechSynthesis.speak(utterance);

      // Update state when speech finishes
      utterance.onend = () => setIsSpeaking(false);

      setIsSpeaking(true);
    }
  };

  const handleStop = () => {
    // Stop the speech synthesis
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  // Initialize SpeechSynthesis when component mounts
  useEffect(() => {
    setSpeechSynthesis(window.speechSynthesis);
  }, []);

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#1a2a45' }}>

      {/* Content section (subtitle and image) */}
      <div className="flex flex-col sm:flex-row-reverse">
        {/* Text on the left side (7 parts of the screen) */}
        <div className="sm:w-7/12 w-full p-4">
          {/* Subtitle and play/pause button */}
          <div className="flex justify-between items-center mb-5">
            <div className="sm:w-7/12 w-full">
              <h3 className="text-4xl font-bold text-[#f1c40f] mb-5">{content.title}</h3>
            </div>

            <div className="flex items-center space-x-3">
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
          <p className="text-3xl text-white font-light leading-relaxed font-poppins">
            {content.text}
          </p>
        </div>

        {/* Image on the right side */}
        <div className="sm:w-5/12 w-full p-4">
          <img
            src={content.image}
            alt={language === 'vi' ? 'Thế hệ Gen Y' : 'Generation Y'}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
