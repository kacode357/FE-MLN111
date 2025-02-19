import { useAppLanguage } from '../../components/AppLanguageContext'; // Import hook ngôn ngữ

const Section3 = () => {
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  return (
    <div className="p-5 my-3 mb-5" style={{ backgroundColor: '#08142c' }}>
      {/* Video Section - 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="text-center mb-4">
          <a
            href="https://youtu.be/2OjED59890M?si=LrWtsell2-YUeZ7z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="w-full h-[315px]"  // Full width and fixed height
              src="https://www.youtube.com/embed/2OjED59890M?si=LrWtsell2-YUeZ7z"
              title="Ý THỨC XÃ HỘI [Triết học Mác-Lênin]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </a>
          <p className="text-2xl text-white font-semibold mt-3">
            {language === 'vi' ? 'Ý THỨC XÃ HỘI [Triết học Mác-Lênin]' : 'Social Consciousness [Marxism-Leninism Philosophy]'}
          </p>
          <p className="text-base text-white mt-3">
            {language === 'vi'
              ? 'Video này giải thích khái niệm ý thức xã hội trong triết học Mác-Lênin, làm rõ vai trò của ý thức xã hội trong sự phát triển và biến đổi của xã hội loài người. Theo Mác và Lênin, ý thức xã hội là những tư tưởng, quan điểm, niềm tin, giá trị và thái độ mà con người trong một xã hội chia sẻ và hình thành dựa trên điều kiện vật chất của xã hội đó....'
              : 'This video explains the concept of social consciousness in Marxism-Leninism philosophy, clarifying the role of social consciousness in the development and transformation of human society. According to Marx and Lenin, social consciousness consists of ideas, views, beliefs, values, and attitudes shared by people in a society, shaped by the material conditions of that society...'}
          </p>
        </div>

        {/* Video 2 */}
        <div className="text-center mb-4">
          <a
            href="https://youtu.be/97yiaKDZzSs?si=s64j2SqBxEi6O8LG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="w-full h-[315px]"  // Full width and fixed height
              src="https://www.youtube.com/embed/97yiaKDZzSs?si=s64j2SqBxEi6O8LG"
              title="Tồn tại xã hội"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </a>
          <p className="text-2xl text-white font-semibold mt-3">
            {language === 'vi' ? 'Tồn tại xã hội' : 'Social Existence'}
          </p>
          <p className="text-base text-white mt-3">
            {language === 'vi'
              ? 'Video này đi sâu vào khái niệm tồn tại xã hội, một thuật ngữ quan trọng trong triết học và xã hội học, để giải thích cách mà con người, các nhóm xã hội và các cấu trúc xã hội ảnh hưởng lẫn nhau và hình thành nền tảng của xã hội...'
              : 'This video delves into the concept of social existence, an important term in philosophy and sociology, to explain how individuals, social groups, and social structures influence each other and form the foundation of society...'}
          </p>
        </div>

        {/* Video 3 */}
        <div className="text-center mb-4">
          <a
            href="https://youtu.be/hDH1cuEsCJ4?si=BpFJP3b2O6z6cbcZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="w-full h-[315px]"  // Full width and fixed height
              src="https://www.youtube.com/embed/hDH1cuEsCJ4?si=BpFJP3b2O6z6cbcZ"
              title="Karl Marx - Nhà tư tưởng thiên tài"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </a>
          <p className="text-2xl text-white font-semibold mt-3">
            {language === 'vi' ? 'Karl Marx - Nhà tư tưởng thiên tài' : 'Karl Marx - A Genius Thinker'}
          </p>
          <p className="text-base text-white mt-3">
            {language === 'vi'
              ? 'Video này khám phá cuộc đời và sự nghiệp của Karl Marx, một trong những nhà tư tưởng và triết gia vĩ đại nhất của thế kỷ 19. Marx không chỉ là người sáng lập chủ nghĩa Marxism, mà còn có ảnh hưởng sâu rộng đến các phong trào chính trị, xã hội và kinh tế trên toàn thế giới....'
              : 'This video explores the life and career of Karl Marx, one of the greatest thinkers and philosophers of the 19th century. Marx not only founded Marxism but also had a profound impact on political, social, and economic movements worldwide...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
