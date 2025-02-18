import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { useAppLanguage } from '../AppLanguageContext'; // Importing the language context hook

const Section5 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const { language } = useAppLanguage(); // Use language context hook to get the current language

  // Define the content based on the current language
  const content = {
    title: language === 'vi' ? 'Tìm tòi học hỏi' : 'Seek to Learn',
    text: language === 'vi' 
      ? `Theo quan điểm trong suy nghĩ của Gen Y cho rằng chỉ có học tập thì mới có thể đưa bản thân của họ đi đến những thành công trong cuộc sống tương lai sắp tới. Càng hội nhập, cành nhiều thứ mới mẻ được cập nhật nên buộc thế hệ này phải luôn tìm tòi học hỏi thay đổi bản thân cá nhân. Các thanh niên ở thế hệ này ở vùng nông thôn bắt dầu đến những thành phố lớn để tìm tòi những điều mới lạ. Thậm chí có người còn phải xuất ngoại để ra với thế giới rộng lớn hơn.` 
      : `According to the mindset of Gen Y, they believe that only through learning can they take themselves to future success in life. As globalization continues, with more new things being updated, this generation must always seek to learn and evolve personally. Many young people from rural areas are beginning to move to larger cities to explore new opportunities. Some even go abroad to broaden their horizons.`,
    image: 'https://st.download.vn/data/image/2023/04/29/Hoc-hoi-700.jpg', // Same image for both languages
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

export default Section5;
