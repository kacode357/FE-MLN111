import { useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import dangthuhaImage from '../../assets/dangthuha.png'; 

const Section1 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleSpeech = async () => {
    const text = "Generation Z hay Gen Z là nhóm người sinh từ năm 1995 đến năm 2012...";
  
    if (!isSpeaking) {
      const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCeqrCPP957dEMJlEfnchqaMFj1T7kwMpc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            input: {
                text: text,
            },
            voice: {
                languageCode: 'vi-VN',
                ssmlGender: 'FEMALE',
            },
            audioConfig: {
                audioEncoding: 'MP3',
            },
        }),
    });
    
  
      const data = await response.json();
      if (data.audioContent) {
        const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
        setAudioUrl(audio);
        audio.play();
        setIsSpeaking(true);
  
        audio.onended = () => setIsSpeaking(false);
      } else {
        console.error("Lỗi API: ", data);
      }
    }
  };
  

  const handleStop = () => {
    if (audioUrl) {
      audioUrl.pause();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#08142c' }}>
      <div className="flex flex-col sm:flex-row md:grid md:grid-cols-10 gap-4">
        <div className="sm:w-full md:col-span-7 p-4 rounded relative">
          <h3 className="text-5xl sm:text-5xl md:text-5xl font-extrabold mb-5" style={{ color: '#f1c40f' }}>
            Thế hệ Gen Z
          </h3>
          <p className="text-3xl sm:text-2xl md:text-4xl text-white font-light leading-relaxed font-poppins">
            Generation Z hay Gen Z là nhóm người sinh từ năm 1995 đến năm 2012 ...
          </p>

          <div className="absolute top-4 right-4">
            <Button 
              onClick={handleSpeech} 
              icon={<PlayCircleOutlined />} 
              shape="circle" 
              size="large" 
              style={{ marginRight: 10 }} 
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

        <div className="sm:w-full md:col-span-3 p-4 rounded text-center">
          <a 
            href="https://www.facebook.com/dangthuhaf.official/?locale=vi_VN" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={dangthuhaImage} 
              alt="Đăng Thu Hà" 
              className="w-2/3 sm:w-3/4 h-auto mx-auto rounded mb-3" 
            />
          </a>
          <a 
            href="https://www.facebook.com/dangthuhaf.official/?locale=vi_VN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-white underline hover:text-blue-800"
          >
            Đăng Thu Hà
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
