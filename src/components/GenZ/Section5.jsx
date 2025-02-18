import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { useAppLanguage } from '../AppLanguageContext'; // Importing the language context hook

const Section3 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const { language } = useAppLanguage(); // Use language context hook to get the current language

  // Define the content based on the current language
  const content = {
    title: language === 'vi' ? 'Nhạy bén với công nghệ' : 'Tech-Savvy',
    text: language === 'vi' 
      ? `Gen Z được sinh ra trong những năm bùng nổ của Internet và các sản phẩm công nghệ. Như vậy, họ được coi là người bản địa trong thế giới kỹ thuật số. Đồng nghiệp của thế hệ Gen Z có lẽ không quá ngạc nhiên khi các Gen Z có thể dễ dàng sử dụng thành thạo nhiều loại máy văn phòng, hay vận hành nhanh các phần mềm nội bộ phức tạp chỉ với một vài thao tác hướng dẫn.` 
      : `Gen Z was born during the explosion of the Internet and technology products. Therefore, they are considered digital natives. Colleagues of Gen Z may not be too surprised when they can easily master office machines or quickly operate complex internal software with just a few instructions.`,
    image: 'https://dtsvn.net/sites/default/files/inline-images/Sach-hay-ve-tu-duy-logic1.png', // Same image for both languages
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
    <div className="p-5 my-3" style={{ backgroundColor: '#08142c' }}>
      {/* Main title section */}
      <div className="flex justify-between items-center mb-5">
        <div className="sm:w-7/12 w-full">
          <h3 className="text-4xl font-bold text-[#f1c40f] mb-5 ml-3">{content.title}</h3>
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

      {/* Content section with title and image */}
      <div className="flex flex-col sm:flex-row">
        {/* Text content on the left side */}
        <div className="sm:w-7/12 w-full p-4">
          <p className="text-3xl text-white font-light leading-relaxed font-poppins">
            {content.text}
          </p>
        </div>

        {/* Image on the right side */}
        <div className="sm:w-5/12 w-full p-4">
          <img
            src={content.image}
            alt={language === 'vi' ? 'Thế hệ Z và Gen Y' : 'Generation Z and Y'}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
