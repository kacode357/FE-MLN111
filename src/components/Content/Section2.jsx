import { useAppLanguage } from '../../components/AppLanguageContext'; // Import hook ngôn ngữ

const Section2 = () => {
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  return (
    <div className="p-5 my-3" style={{ backgroundColor: '#1a2a45' }}>
      {/* Video Section - 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="text-center mb-4">
          <a
            href="https://youtu.be/HZJ_1IHJJsw?si=21KBYDgVCqLnDxNU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="w-full h-[315px]"  // Full width and fixed height
              src="https://www.youtube.com/embed/HZJ_1IHJJsw?si=21KBYDgVCqLnDxNU"
              title="Millennials Explaining Work Culture to Gen Z"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </a>
          <p className="text-2xl text-white font-semibold mt-3">
            {language === 'vi' ? 'Millennials Giải Thích Văn Hóa Công Việc Cho Gen Z' : 'Millennials Explaining Work Culture to Gen Z'}
          </p>
          <p className="text-base text-white mt-3">
            {language === 'vi'
              ? 'Video này trình bày cuộc trò chuyện giữa thế hệ Millennials (Thế hệ Y) và Gen Z (Thế hệ Z) về sự khác biệt trong văn hóa làm việc và cách mỗi thế hệ tiếp cận công việc....'
              : 'This video presents a conversation between Millennials (Generation Y) and Gen Z (Generation Z) about differences in work culture and how each generation approaches work...'}
          </p>
        </div>

        {/* Video 2 */}
        <div className="text-center mb-4">
          <a
            href="https://youtu.be/aqdm6aBUZII?si=3A59VVjP6mGs4-V9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="w-full h-[315px]"  // Full width and fixed height
              src="https://www.youtube.com/embed/aqdm6aBUZII?si=3A59VVjP6mGs4-V9"
              title="Millennials vs Generation Z"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </a>
          <p className="text-2xl text-white font-semibold mt-3">
            {language === 'vi' ? 'Millennials So Với Gen Z' : 'Millennials vs Generation Z'}
          </p>
          <p className="text-base text-white mt-3">
            {language === 'vi'
              ? 'Video này so sánh và phân tích sự khác biệt giữa hai thế hệ: Millennials (Thế hệ Y) và Gen Z (Thế hệ Z), với mục đích giúp người xem hiểu rõ hơn về những đặc điểm nổi bật, thói quen và quan điểm của mỗi thế hệ....'
              : 'This video compares and analyzes the differences between two generations: Millennials (Generation Y) and Gen Z (Generation Z), aiming to help viewers better understand the unique traits, habits, and perspectives of each generation...'}
          </p>
        </div>

        {/* Video 3 */}
        <div className="text-center mb-4">
          <a
            href="https://youtu.be/1VCf1Y_98zA?si=CgKJJVVI-zzApEUd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="w-full h-[315px]"  // Full width and fixed height
              src="https://www.youtube.com/embed/1VCf1Y_98zA?si=CgKJJVVI-zzApEUd"
              title="Gen Z và Gen Y ở Công Ty"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </a>
          <p className="text-2xl text-white font-semibold mt-3">
            {language === 'vi' ? 'Gen Z và Gen Y ở Công Ty' : 'Gen Z and Gen Y in the Workplace'}
          </p>
          <p className="text-base text-white mt-3">
            {language === 'vi'
              ? 'Video này khám phá sự khác biệt giữa hai thế hệ Gen Z và Gen Y (Millennials) trong môi trường công sở, làm rõ cách thức mỗi thế hệ tiếp cận công việc, giao tiếp và giải quyết vấn đề....'
              : 'This video explores the differences between Gen Z and Gen Y (Millennials) in the workplace, clarifying how each generation approaches work, communication, and problem-solving...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
