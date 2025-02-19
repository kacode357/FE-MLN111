import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import { useAppLanguage } from '../../components/AppLanguageContext'; // Import hook ngôn ngữ

const Section2 = () => {
  const [isSpeakingGenZ1, setIsSpeakingGenZ1] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // lưu trữ đối tượng SpeechSynthesis
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Đoạn văn bản gộp lại thành một đoạn văn duy nhất
  const content = language === 'vi'
  ? [
    { text: "Cha của Marx, ông Henrich Marx, là một người học thức, am hiểu sâu sắc về các tư tưởng triết học Pháp thế kỷ 18 và luôn yêu thương con trai.", isImportant: true },
    { text: "Dù có lúc bất đồng quan điểm về định hướng cuộc đời, tình cảm cha con vẫn rất gắn bó.", isImportant: false },
    { text: "Mẹ của Marx, bà Henrieta Pöetböth, người Hà Lan, là một người nội trợ giản dị, không đóng vai trò người bạn tri kỷ đối với Marx như cha ông.", isImportant: false },
    { text: "Năm 1830, khi 12 tuổi, Marx học tại trường trung học ở Trier, nơi ông nổi trội ở những môn học yêu cầu tư duy độc lập và sáng tạo.", isImportant: false },
    { text: "Ông may mắn được học với các thầy giáo có tư tưởng duy vật và xu hướng tự do.", isImportant: true },
    { text: "Năm 1835, Marx tốt nghiệp trung học và tiếp tục học luật tại Đại học Bonn. Sau đó, theo lời khuyên của cha, ông chuyển sang Đại học Berlin.", isImportant: true },
    { text: "Năm 1836, Marx đính hôn với Jenny von Westphalen, người bạn từ thời thơ ấu lớn hơn ông 4 tuổi, thuộc dòng dõi quý tộc.", isImportant: false },
    { text: "Trong thời gian học tại Đại học Berlin, Marx ngoài học luật còn nghiên cứu sâu triết học, đặc biệt là triết học của Hegel, cũng như lịch sử triết học cổ đại.", isImportant: true },
    { text: "Năm 1841, ở tuổi 23, ông nhận bằng Tiến sĩ triết học tại Đại học Jena với luận án về sự khác biệt giữa triết học tự nhiên của Democritus và Epicurus.", isImportant: true },
    { text: "Năm 1843, Marx kết hôn với Jenny bất chấp sự phản đối của gia đình bà.", isImportant: false },
    { text: "Cùng năm, ông đến Paris, nơi lưu lại một năm rưỡi. Đây là giai đoạn quan trọng trong sự nghiệp chính trị của Marx.", isImportant: true },
    { text: "Tại Paris, ông gặp Friedrich Engels lần đầu vào cuối năm 1842.", isImportant: true },
    { text: "Do sức ép của Chính phủ Vương quốc Phổ, Marx bị Chính phủ Pháp trục xuất năm 1845 và phải chuyển đến Brussels (Bỉ).", isImportant: false },
    { text: "Sau cách mạng năm 1848 ở Pháp, ông tiếp tục bị trục xuất khỏi Bỉ và trở lại Paris trong thời gian ngắn trước khi đến Cologne (Đức).", isImportant: false },
    { text: "Tại đây, ông trở thành Tổng Biên tập tờ 'Báo Mới tỉnh Ranh,' cơ quan của phái dân chủ.", isImportant: false },
    { text: "Tuy nhiên, tờ báo bị chính phủ Phổ đóng cửa vào năm 1849, buộc Marx rời Đức.", isImportant: false },
    { text: "Sau một thời gian ngắn ở Paris, Marx chuyển đến London, Anh, vào tháng 8/1849 và sống tại đây cho đến khi qua đời.", isImportant: true },
    { text: "Ngày 14/3/1883, Marx mất tại London và được chôn cất tại nghĩa trang Highgate, Bắc London.", isImportant: true }
  ] : [
    { text: "Karl Marx's father, Heinrich Marx, was an educated man, deeply familiar with 18th-century French philosophical ideas, and always loved his son.", isImportant: true },
    { text: "Although they sometimes disagreed on the direction of his life, their father-son bond was very strong.", isImportant: false },
    { text: "Marx's mother, Henrietta Pöetböth, a Dutch homemaker, was not a philosophical companion to Marx like his father was.", isImportant: false },
    { text: "In 1830, at the age of 12, Marx attended a secondary school in Trier, where he excelled in subjects that required independent and creative thinking.", isImportant: false },
    { text: "He was fortunate to be taught by teachers with materialist views and liberal tendencies.", isImportant: true },
    { text: "In 1835, Marx graduated from high school and continued his law studies at the University of Bonn. Later, following his father's advice, he transferred to the University of Berlin.", isImportant: true },
    { text: "In 1836, Marx got engaged to Jenny von Westphalen, his childhood friend who was 4 years older than him and of noble descent.", isImportant: false },
    { text: "During his time at the University of Berlin, Marx not only studied law but also deeply explored philosophy, especially the philosophy of Hegel, as well as the history of ancient philosophy.", isImportant: true },
    { text: "In 1841, at the age of 23, he received a PhD in philosophy from the University of Jena with a dissertation on the difference between the natural philosophies of Democritus and Epicurus.", isImportant: true },
    { text: "In 1843, Marx married Jenny despite her family's opposition.", isImportant: false },
    { text: "In the same year, he moved to Paris, where he stayed for a year and a half. This was a crucial period in Marx's political career.", isImportant: true },
    { text: "In Paris, he met Friedrich Engels for the first time at the end of 1842.", isImportant: true },
    { text: "Due to pressure from the Prussian Government, Marx was expelled from France in 1845 and had to move to Brussels (Belgium).", isImportant: false },
    { text: "After the 1848 revolution in France, he was expelled from Belgium and briefly returned to Paris before moving to Cologne (Germany).", isImportant: false },
    { text: "There, he became the editor-in-chief of the 'New Rhenish Zeitung,' a democratic newspaper.", isImportant: false },
    { text: "However, the Prussian government shut down the newspaper in 1849, forcing Marx to leave Germany.", isImportant: false },
    { text: "After a brief period in Paris, Marx moved to London, England, in August 1849, where he would live until his death.", isImportant: true },
    { text: "On March 14, 1883, Marx passed away in London and was buried at Highgate Cemetery, North London.", isImportant: true }
  ];
  // Gộp các đoạn văn bản thành một chuỗi duy nhất
  // Gộp các đoạn văn bản thành một chuỗi duy nhất và giữ lại phần in đậm
  const combinedContent = content.map(item => {
    if (item.isImportant) {
      return `<strong>${item.text}</strong>`; // Giữ lại đoạn văn in đậm
    }
    return item.text;
  }).join(' ');

  const handleSpeechGenZ1 = () => {
    if (!isSpeakingGenZ1) {
      const utterance = new SpeechSynthesisUtterance(combinedContent);
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
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center">
          <div className="text-white w-11/12">
            {/* Hiển thị đoạn văn bản, với phần in đậm */}
            <p className="text-2xl" dangerouslySetInnerHTML={{ __html: combinedContent }} />
          </div>
          <div className="flex flex-col items-center">
            <Button
              onClick={handleSpeechGenZ1}
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