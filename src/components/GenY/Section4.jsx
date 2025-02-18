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
    title: language === 'vi' ? 'Tính cách cởi mở' : 'Open-Minded Personality',
    text: language === 'vi' 
      ? `Thế hệ này từ lúc sinh ra vẫn còn tàn thương của những cuộc chiến tranh đau khổ. Sau khi rời xa khỏi những mất mát đau thương từ những cuộc chiến tranh thì thế hệ Gen Y thường có tính tình lạc quan cởi mở hơn. Thế hệ này bắt đầu tìm những giá trị đích thực của cuộc sống, như tình yêu, sự nghiệp. Những người thuộc thế hệ này thích bày tỏ quan điểm, suy nghĩ riêng của bản thân.` 
      : `This generation has still carried the scars of painful wars since birth. After moving past the tragic losses of these wars, Generation Y tends to have a more optimistic and open-minded personality. This generation begins to search for the true values of life, such as love and career. People from this generation enjoy expressing their personal views and thoughts.`,
    image: 'https://static.ybox.vn/2020/11/0/1605422264655-9.png', // Same image for both languages
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
