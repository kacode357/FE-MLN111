import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import { useAppLanguage } from '../../components/AppLanguageContext'; // Import hook ngôn ngữ

const Section2 = () => {
  const [isSpeakingGenZ1, setIsSpeakingGenZ1] = useState(false);
 
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // lưu trữ đối tượng SpeechSynthesis
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Đoạn văn bản tùy theo ngôn ngữ

    const textGenZ1 = language === 'vi'
    ? `Gen Y là thế hệ lớn lên trong thời kỳ phát triển và chuyển đổi mạnh mẽ về công nghệ và kinh tế toàn cầu. Thế hệ Gen Y còn được biết đến với sự phát triển và lớn lên trong điều kiện thế giới hội nhập và những ông lớn trong các lĩnh vực công nghệ trong quá trình phát triển như Google, FaceBook, X, Linkedin, PayPal. Thế hệ này là những người đầu tiên tiếp cận với công nghệ, truyền thông, các mạng xã hội, Blog mà cho tới ngày nay vẫn gọi là thời đại công nghệ 3.0.`
    : `Generation Y is the generation that grew up during a period of significant technological and economic transformation globally. Gen Y is also known for developing and growing up in an era of global integration, alongside tech giants like Google, Facebook, X, Linkedin, and PayPal. This generation was the first to embrace technology, media, social networks, and blogs, which to this day is still referred to as the era of Technology 3.0.`;

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


  const handleStopGenZ1 = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
    setIsSpeakingGenZ1(false);
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

    
      
     
    
    </div>
  );
};

export default Section2;
