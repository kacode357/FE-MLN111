import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import { useAppLanguage } from '../../components/AppLanguageContext'; // Import hook ngôn ngữ

const Section2 = () => {
  const [isSpeakingGenZ1, setIsSpeakingGenZ1] = useState(false);
  const [isSpeakingGenZ2, setIsSpeakingGenZ2] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // lưu trữ đối tượng SpeechSynthesis
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Đoạn văn bản tùy theo ngôn ngữ
  const textGenZ1 = language === 'vi'
    ? `Sinh ra trong thời đại công nghệ và Internet bùng nổ, thế hệ Z còn được gọi bằng những cái tên khác: iGeneration, Homeland Generation, Net Gen, Digital Natives, Neo-Digital Natives, Pluralist Generation, Internet Generation, Centennials, Later – Millennials, Zoomers, Gen Wii, Gen-Tech,...`
    : `Born in the era of exploding technology and the Internet, Generation Z is also called by many other names: iGeneration, Homeland Generation, Net Gen, Digital Natives, Neo-Digital Natives, Pluralist Generation, Internet Generation, Centennials, Later Millennials, Zoomers, Gen Wii, Gen-Tech,...`;

  const textGenZ2 = language === 'vi'
    ? `Thuật ngữ Gen Z lần đầu tiên được sử dụng trong một bài viết trên Ad Age vào tháng 9 năm 2000. Vì thế hệ này ra đời ngay sau Gen Y, nên được gọi là Gen Z. Đây là thế hệ được sinh ra trong kỷ nguyên Internet, khác biệt với thế hệ Y, vốn sinh ra trong quá trình hình thành và phát triển của Internet. Gen Z là thế hệ đầu tiên sinh ra sau thời kỳ phổ cập Internet.`
    : `The term Gen Z was first used in an article on Ad Age in September 2000. As this generation came right after Gen Y, it was called Gen Z. This is the generation born in the Internet age, different from Generation Y, which was born during the formation and development of the Internet. Gen Z is the first generation born after the era of widespread Internet adoption.`;

  const handleSpeechGenZ1 = (text) => {
    if (!isSpeakingGenZ1) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'vi' ? 'vi-VN' : 'en-US'; // Ngôn ngữ tùy theo context

      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === (language === 'vi' ? 'vi-VN' : 'en-US'));
      if (voice) {
        utterance.voice = voice;
      }

      speechSynthesis.speak(utterance);

      utterance.onend = () => setIsSpeakingGenZ1(false);

      setIsSpeakingGenZ1(true);
    }
  };

  const handleSpeechGenZ2 = (text) => {
    if (!isSpeakingGenZ2) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'vi' ? 'vi-VN' : 'en-US'; // Ngôn ngữ tùy theo context

      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === (language === 'vi' ? 'vi-VN' : 'en-US'));
      if (voice) {
        utterance.voice = voice;
      }

      speechSynthesis.speak(utterance);

      utterance.onend = () => setIsSpeakingGenZ2(false);

      setIsSpeakingGenZ2(true);
    }
  };

  const handleStopGenZ1 = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
    setIsSpeakingGenZ1(false);
  };

  const handleStopGenZ2 = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
    setIsSpeakingGenZ2(false);
  };

  useEffect(() => {
    setSpeechSynthesis(window.speechSynthesis);
  }, []);

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#1a2a45' }}>
      <div className="text-center mb-5">
        <h2 className="text-5xl font-extrabold text-[#f1c40f]">
          {language === 'vi' ? 'BỐI CẢNH PHÁT TRIỂN' : 'DEVELOPMENT CONTEXT'}
        </h2>
      </div>

      {/* Section 1 - Gen Z 1 */}
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center">
          <p className="text-3xl text-white font-light leading-relaxed w-11/12">
            {textGenZ1}
          </p>
          <div className="flex flex-col items-center">
            <Button
              onClick={() => handleSpeechGenZ1(textGenZ1)}
              icon={isSpeakingGenZ1 ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              shape="circle"
              size="large"
            />
            {isSpeakingGenZ1 && (
              <Button
                onClick={handleStopGenZ1}
                icon={<PauseCircleOutlined />}
                shape="circle"
                size="large"
                style={{ marginTop: '10px' }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Section 2 - Gen Z 2 */}
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center">
          <p className="text-3xl text-white font-light leading-relaxed w-11/12">
            {textGenZ2}
          </p>
          <div className="flex flex-col items-center">
            <Button
              onClick={() => handleSpeechGenZ2(textGenZ2)}
              icon={isSpeakingGenZ2 ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              shape="circle"
              size="large"
            />
            {isSpeakingGenZ2 && (
              <Button
                onClick={handleStopGenZ2}
                icon={<PauseCircleOutlined />}
                shape="circle"
                size="large"
                style={{ marginTop: '10px' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
