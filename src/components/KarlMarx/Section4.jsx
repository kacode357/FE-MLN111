import { useState, useEffect } from 'react';
import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import { Collapse, Button } from 'antd'; // Import Collapse và Button từ Ant Design
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import các icon

const { Panel } = Collapse;

const Section4 = () => {
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context
  const [isSpeaking, setIsSpeaking] = useState(false); // Lưu trạng thái đọc giọng
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // Lưu đối tượng speechSynthesis

  const text1 = language === 'vi'
    ? 'Các điều kiện vật chất và kinh tế là cơ sở để hình thành ý thức con người. Ý thức xã hội không tồn tại độc lập mà luôn gắn liền với các yếu tố khách quan của đời sống. Ví dụ: Gen Y lớn lên trong bối cảnh kinh tế và công nghệ toàn cầu hóa, với sự ra đời của các nền tảng như Google, Facebook và PayPal. Điều này ảnh hưởng đến ý thức xã hội của họ, giúp họ hình thành tư duy đổi mới, khả năng thích nghi với công nghệ và xu hướng hội nhập. Gen Z, ngược lại, sinh ra trong thời đại Internet bùng nổ. Điều kiện tồn tại xã hội này đã khiến họ trở thành "cư dân kỹ thuật số", với ý thức xã hội nhạy bén hơn trong việc sử dụng công nghệ để làm việc độc lập và sáng tạo, từ đó thúc đẩy năng suất cá nhân và cạnh tranh.'
    : 'Material and economic conditions serve as the foundation for shaping human consciousness. Social consciousness does not exist independently but is always linked to the objective factors of life. For example, Generation Y grew up in the context of a globalized economy and technology, with the emergence of platforms like Google, Facebook, and PayPal. This influenced their social consciousness, helping them form innovative thinking, adaptability to technology, and global integration trends. On the other hand, Generation Z was born during the internet boom. This social existence condition made them "digital natives," with sharper social consciousness in using technology to work independently and creatively, thus driving personal productivity and competition.';

  const text2 = language === 'vi'
    ? 'Mặc dù tồn tại xã hội giữ vai trò quyết định, ý thức xã hội không hoàn toàn thụ động mà có thể tác động ngược lại, thúc đẩy hoặc kìm hãm sự phát triển của xã hội. Ví dụ: Thế hệ Gen Y đã thúc đẩy sự phát triển của các ngành nghề liên quan đến công nghệ và truyền thông xã hội, tạo ra hàng loạt startup và tập đoàn lớn như LinkedIn hay Facebook. Sự đổi mới ý thức này không chỉ thay đổi cách thức làm việc mà còn định hình lại nền kinh tế toàn cầu. Với Gen Z, ý thức cạnh tranh cao và khả năng làm chủ công nghệ đã dẫn đến những xu hướng làm việc mới, chẳng hạn như phát triển các hình thức kinh doanh trực tuyến, thương mại điện tử và công việc tự do (freelancing), tạo ra thay đổi lớn trong cơ cấu kinh tế hiện đại.'
    : 'Although social existence plays a determining role, social consciousness is not entirely passive and can have a reversal effect, driving or hindering societal development. For example, Generation Y has driven the development of professions related to technology and social media, creating a series of startups and major corporations like LinkedIn and Facebook. This shift in social consciousness not only changed the way people work but also reshaped the global economy. With Generation Z, a high sense of competition and mastery of technology has led to new work trends, such as the development of online businesses, e-commerce, and freelancing, creating significant changes in the modern economic structure.';

  const handleSpeech = (text) => {
    if (!isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'vi' ? 'vi-VN' : 'en-US';

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

  const handleStopSpeech = () => {
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
      {/* Title centered and styled */}
      <div className="text-center text-[#f1c40f] text-4xl font-semibold mb-6">
        {language === 'vi' ? 'Mối quan hệ giữa Tồn tại xã hội và Ý thức xã hội' : 'The Relationship between Social Existence and Social Consciousness'}
      </div>

      {/* Collapse Section for Theories */}
      <Collapse accordion defaultActiveKey={['1']}>
        {/* Panel for "Tồn tại xã hội quyết định Ý thức xã hội" */}
        <Panel
          header={<span className="text-2xl text-[#ffff]">{language === 'vi' ? '3.1. Tồn tại xã hội quyết định Ý thức xã hội' : '3.1. Social Existence Determines Social Consciousness'}</span>}
          key="1"
        >
          <div className="text-white text-lg">
            <p>{text1}</p>
            <Button
              onClick={() => handleSpeech(text1)}
              icon={isSpeaking ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              shape="circle"
              size="large"
              style={{ marginTop: '10px' }}
            />
            {isSpeaking && (
              <Button
                onClick={handleStopSpeech}
                icon={<PauseCircleOutlined />}
                shape="circle"
                size="large"
                style={{ marginTop: '10px', marginLeft: '10px' }}
              />
            )}
          </div>
        </Panel>

        {/* Panel for "Ý thức xã hội có thể tác động ngược lại" */}
        <Panel
          header={<span className="text-2xl text-[#ffff]">{language === 'vi' ? '3.2. Ý thức xã hội có thể tác động ngược lại' : '3.2. Social Consciousness Can Have a Reversal Effect'}</span>}
          key="2"
        >
          <div className="text-white text-lg">
            <p>{text2}</p>
            <Button
              onClick={() => handleSpeech(text2)}
              icon={isSpeaking ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              shape="circle"
              size="large"
              style={{ marginTop: '10px' }}
            />
            {isSpeaking && (
              <Button
                onClick={handleStopSpeech}
                icon={<PauseCircleOutlined />}
                shape="circle"
                size="large"
                style={{ marginTop: '10px', marginLeft: '10px' }}
              />
            )}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Section4;
