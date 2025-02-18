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
    title: language === 'vi' ? 'Tư duy đổi mới' : 'Innovative Thinking',
    text: language === 'vi' 
      ? `Công nghệ, truyền thông, các dịch vụ bắt đầu xuất hiện, tư duy về những vấn đề trong cuộc sống và công việc sẽ có sự thay đổi một số lĩnh vực nhất định. 
      Thế hệ Gen Y này, họ bắt đầu cởi mở khám phá những yếu tố mới mẻ xung quanh trong công việc và cuộc sống. 
      Tư duy về ý thức xã hội cũng có sự thay đổi nhìn thấy rõ nhất là tiêu chí “Không được ngồi yên một chỗ” và có quan niệm là thế giới chuyển mình thì mình cũng phải chuyển mình theo.` 
      : `Technology, communication, and services are emerging, and the way people think about life and work issues will change in specific areas. 
      This Generation Y is becoming more open to exploring new things around them in work and life. 
      Their social awareness is also changing, clearly seen in the criterion "Don’t sit still" and the belief that as the world evolves, they must evolve too.`,
    image: 'https://ghdmedia.com/uploads/images/article/2021/02/19/0-The-he-z-va-the-he-y.jpg', // Same image for both languages
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
