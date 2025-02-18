import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { useAppLanguage } from '../AppLanguageContext'; // Importing the language context hook

const Section7 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const { language } = useAppLanguage(); // Use language context hook to get the current language

  // Define the content based on the current language
  const content = {
    title: language === 'vi' ? 'Đổi mới phong cách làm việc' : 'Work Style Innovation',
    text: language === 'vi' 
      ? `Thế hệ Gen Y luôn luôn chú trọng vào kết quả hơn là quá trình, họ luôn tìm cách để bản thân có thể thành công hơn nữa. Sẵn sàng đưa ra quan điểm cá nhân, nêu ra suy nghĩ của mình để mọi người được công nhận. Những người thuộc thế hệ này có khả năng làm việc nhóm, kết hợp với nhau để cùng tạo ra thành tựu. Nhiều ngành nghề cũng được ra đời nhờ vào sự phát triển và sáng tạo không ngừng nghỉ của Gen Y. Sau này đó chính là nền móng của nhiều công ty, tập đoàn lớn tại các nước trên thế giới.` 
      : `Generation Y always focuses more on results than the process. They are always looking for ways to succeed further. They are willing to express their personal opinions and share their thoughts in order to be recognized. People from this generation have strong teamwork skills, collaborating with others to achieve great accomplishments. Many industries have been born from the continuous development and creativity of Gen Y, which later becomes the foundation for many large companies and corporations worldwide.`,
    image: 'https://fsivietnam.com.vn/wp-content/uploads/2021/10/digital-workspace-vs-digital-workplace.png', // Same image for both languages
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

export default Section7;
