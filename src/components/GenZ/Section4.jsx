import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { useAppLanguage } from '../AppLanguageContext'; // Importing the language context hook

const Section4 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const { language } = useAppLanguage(); // Use language context hook to get the current language

  // Define the content based on the current language
  const content = {
    title: language === 'vi' ? 'Thích làm việc độc lập' : 'Prefer to Work Independently',
    text: language === 'vi' 
      ? `Bản chất cạnh tranh của Gen Z khiến họ mong muốn được kiểm soát công việc của mình chứ không phụ thuộc vào nó. Đây là lý do tại sao các gen khác thường cảm thấy Gen Z kiêu ngạo trong giao tiếp và ngại lắng nghe những lời chỉ trích.
      Gen Z luôn chủ động nghiên cứu và tiếp cận nhiều nguồn thông tin nên họ có những chính kiến rất mạnh mẽ và muốn được lắng nghe. Họ đặc biệt muốn đóng góp bình đẳng vào công việc và được trao quyền để tự quản lý và lãnh đạo các dự án để họ vững vàng hơn trong sự nghiệp của mình.` 
      : `The competitive nature of Gen Z makes them want to control their work rather than depend on it. This is why other generations often feel that Gen Z is arrogant in communication and reluctant to listen to criticism.
      Gen Z is proactive in researching and accessing multiple information sources, giving them strong opinions that they want to be heard. They particularly want to contribute equally to the work and be empowered to self-manage and lead projects so that they can be more confident in their careers.`,
    image: 'https://career.gpo.vn/uploads/images/zzzzzzzz1.jpg', // Same image for both languages
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
            alt={language === 'vi' ? 'Thế hệ Z và Gen Y' : 'Generation Z and Y'}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
