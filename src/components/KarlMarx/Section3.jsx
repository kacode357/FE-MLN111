import { useState, useEffect } from 'react';
import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import { Collapse, Button } from 'antd'; // Import Collapse và Button từ Ant Design
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import các icon

const { Panel } = Collapse;

const Section3 = () => {
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context
  const [isSpeaking, setIsSpeaking] = useState([false, false, false, false]); // Lưu trạng thái đọc giọng cho 4 phần
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // Lưu đối tượng speechSynthesis

  // Các đoạn văn bản
  const text1 = language === 'vi'
    ? 'Tồn tại xã hội là toàn bộ điều kiện vật chất, kinh tế và xã hội mà con người sống trong đó. Karl Marx khẳng định rằng đời sống vật chất là cơ sở khách quan quyết định sự tồn tại và phát triển của con người và xã hội.'
    : 'Social existence is the entire material, economic, and social conditions in which humans live. Karl Marx affirms that material life is the objective foundation that determines the existence and development of humans and society.';

  const text2 = language === 'vi'
    ? 'Ý thức xã hội là toàn bộ tư tưởng, quan điểm, giá trị, và các hình thức nhận thức phản ánh tồn tại xã hội. Marx chia ý thức xã hội thành hai cấp độ:'
    : 'Social consciousness is the entire system of thoughts, perspectives, values, and forms of recognition reflecting social existence. Marx divides social consciousness into two levels:';

  const text3 = language === 'vi'
    ? 'Là những suy nghĩ, quan niệm nảy sinh từ đời sống hàng ngày của quần chúng nhân dân. Ý thức này thường trực tiếp phản ánh các điều kiện vật chất và đời sống của họ.'
    : 'These are thoughts and views arising from the daily lives of the people. This consciousness directly reflects their material conditions and life.';

  const text4 = language === 'vi'
    ? 'Là những tư tưởng, lý thuyết có tính hệ thống, được phát triển bởi các nhà tư tưởng, triết gia. Ý thức này mang tính trừu tượng, phản ánh ở mức độ cao hơn các vấn đề xã hội.'
    : 'These are systematic thoughts and theories developed by thinkers and philosophers. This consciousness is abstract, reflecting societal issues at a higher level.';

  // Hàm để phát giọng đọc
  const handleSpeech = (text, index) => {
    if (!isSpeaking[index]) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'vi' ? 'vi-VN' : 'en-US';

      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === (language === 'vi' ? 'vi-VN' : 'en-US'));
      if (voice) {
        utterance.voice = voice;
      }

      speechSynthesis.speak(utterance);
      utterance.onend = () => {
        const newIsSpeaking = [...isSpeaking];
        newIsSpeaking[index] = false;
        setIsSpeaking(newIsSpeaking);
      };

      const newIsSpeaking = [...isSpeaking];
      newIsSpeaking[index] = true;
      setIsSpeaking(newIsSpeaking);
    }
  };

  // Hàm dừng giọng đọc
  const handleStopSpeech = (index) => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
    const newIsSpeaking = [...isSpeaking];
    newIsSpeaking[index] = false;
    setIsSpeaking(newIsSpeaking);
  };

  // Thiết lập đối tượng speechSynthesis sau khi component mount
  useEffect(() => {
    setSpeechSynthesis(window.speechSynthesis);
  }, []);

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#1a2a45' }}>
      {/* Title centered and styled */}
      <div className="text-center text-[#f1c40f] text-4xl font-semibold mb-6">
        {language === 'vi' ? 'Học thuyết “Tồn tại xã hội quyết định ý thức xã hội"' : 'Theory of "Social Existence Determines Social Consciousness"'}
      </div>

      {/* Collapse Section for Theories */}
      <Collapse accordion defaultActiveKey={['1']}>
        {/* Panel for "Tồn tại xã hội" */}
        <Panel
          header={<span className="text-2xl text-[#ffff]">{language === 'vi' ? '2.1. Khái niệm Tồn tại xã hội' : '2.1. Concept of Social Existence'}</span>}
          key="1"
        >
          <div className="text-white text-lg">
            <p>{text1}</p>
            <Button
              onClick={() => handleSpeech(text1, 0)}
              icon={isSpeaking[0] ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              shape="circle"
              size="large"
              style={{ marginTop: '10px' }}
            />
            {isSpeaking[0] && (
              <Button
                onClick={() => handleStopSpeech(0)}
                icon={<PauseCircleOutlined />}
                shape="circle"
                size="large"
                style={{ marginTop: '10px', marginLeft: '10px' }}
              />
            )}
          </div>
        </Panel>

        {/* Panel for "Ý thức xã hội" */}
        <Panel
          header={<span className="text-2xl text-[#ffff]">{language === 'vi' ? '2.2. Khái niệm Ý thức xã hội' : '2.2. Concept of Social Consciousness'}</span>}
          key="2"
        >
          <div className="text-white text-lg">
            <p>{text2}</p>
            <Button
              onClick={() => handleSpeech(text2, 1)}
              icon={isSpeaking[1] ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              shape="circle"
              size="large"
              style={{ marginTop: '10px' }}
            />
            {isSpeaking[1] && (
              <Button
                onClick={() => handleStopSpeech(1)}
                icon={<PauseCircleOutlined />}
                shape="circle"
                size="large"
                style={{ marginTop: '10px', marginLeft: '10px' }}
              />
            )}

            {/* Subpanel for "Ý thức xã hội thông thường" */}
            <Collapse className="mt-5">
              <Panel
                header={<span className="text-xl text-[#ffff]">{language === 'vi' ? '2.2.1 Ý thức xã hội thông thường' : '2.2.1 Ordinary Social Consciousness'}</span>}
                key="3"
              >
                <div className="text-white text-lg">
                  <p>{text3}</p>
                  <Button
                    onClick={() => handleSpeech(text3, 2)}
                    icon={isSpeaking[2] ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    shape="circle"
                    size="large"
                    style={{ marginTop: '10px' }}
                  />
                  {isSpeaking[2] && (
                    <Button
                      onClick={() => handleStopSpeech(2)}
                      icon={<PauseCircleOutlined />}
                      shape="circle"
                      size="large"
                      style={{ marginTop: '10px', marginLeft: '10px' }}
                    />
                  )}
                </div>
              </Panel>

              {/* Subpanel for "Ý thức xã hội lý luận" */}
              <Panel
                header={<span className="text-xl text-[#ffff]">{language === 'vi' ? '2.2.2. Ý thức xã hội lý luận' : '2.2.2. Theoretical Social Consciousness'}</span>}
                key="4"
              >
                <div className="text-white text-lg">
                  <p>{text4}</p>
                  <Button
                    onClick={() => handleSpeech(text4, 3)}
                    icon={isSpeaking[3] ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    shape="circle"
                    size="large"
                    style={{ marginTop: '10px' }}
                  />
                  {isSpeaking[3] && (
                    <Button
                      onClick={() => handleStopSpeech(3)}
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
        </Panel>
      </Collapse>
    </div>
  );
};

export default Section3;
