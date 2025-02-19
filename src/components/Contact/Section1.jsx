import { useAppLanguage } from '../AppLanguageContext'; // Import hook ngôn ngữ
import { Input, Button, Form, notification } from 'antd'; // Import các thành phần của Ant Design
import emailjs from 'emailjs-com'; // Import thư viện EmailJS

const ContactUs = () => {
  const { language } = useAppLanguage(); // Lấy ngôn ngữ từ context

  // Hàm gửi email thông qua EmailJS
  const sendEmail = (values) => {
    const emailData = {
      to_name: 'Lưu Ka Ka',
      from_name: values.name, // Tên người gửi
      email: values.email, // Email người gửi
      message: values.message, // Lời nhắn
    };

    emailjs
      .send('service_eq3w35l', 'template_h3jbcbr', emailData, 'od5MXMazz5qwE9WQC') // Thay thế service_id, template_id, và user_id của bạn
      .then(
        (response) => {
          console.log('Success:', response.status, response.text);
          // Hiển thị thông báo thành công
          notification.success({
            message: language === 'vi' ? 'Gửi email thành công!' : 'Email Sent Successfully!',
            description: language === 'vi' ? 'Email của bạn đã được gửi thành công!' : 'Your email has been successfully sent!',
            placement: 'topRight',
          });
        },
        (error) => {
          console.log('Error:', error);
          // Hiển thị thông báo lỗi
          notification.error({
            message: language === 'vi' ? 'Gửi email thất bại!' : 'Email Send Failed!',
            description: language === 'vi' ? 'Đã có lỗi xảy ra khi gửi email!' : 'An error occurred while sending the email!',
            placement: 'topRight',
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center p-5 sm:p-10 my-3" style={{ backgroundColor: '#08142c' }}>
      <div className="w-full max-w-6xl">
        {/* Tiêu đề căn giữa */}
        <h3
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center"
          style={{ color: '#f1c40f' }}
        >
          {language === 'vi' ? 'Liên hệ với chúng tôi' : 'Contact Us'}
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Side (Form) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Form
              layout="vertical"
              className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
              onFinish={sendEmail} // Gọi hàm gửi email khi form được submit
            >
              <Form.Item
                label={language === 'vi' ? 'Họ và tên' : 'Full Name'}
                name="name"
                rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập họ tên!' : 'Please input your full name!' }]}
              >
                <Input placeholder={language === 'vi' ? 'Nhập họ và tên của bạn' : 'Enter your full name'} />
              </Form.Item>

              <Form.Item
                label={language === 'vi' ? 'Email' : 'Email'}
                name="email"
                rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập email!' : 'Please input your email!' }]}
              >
                <Input placeholder={language === 'vi' ? 'Nhập email của bạn' : 'Enter your email'} />
              </Form.Item>

              <Form.Item
                label={language === 'vi' ? 'Lời nhắn' : 'Message'}
                name="message"
                rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập lời nhắn!' : 'Please input your message!' }]}
              >
                <Input.TextArea placeholder={language === 'vi' ? 'Nhập lời nhắn của bạn' : 'Enter your message'} rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block style={{ backgroundColor: '#f1c40f', borderColor: '#f1c40f' }}>
                  {language === 'vi' ? 'Gửi' : 'Submit'}
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Right Side (Product Info) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-white text-center">
            <h3 className="text-xl font-bold mb-3">
              {language === 'vi' ? 'Thông tin người tạo sản phẩm' : 'Product Creators Info'}
            </h3>
            <p className="text-lg">
              <strong>{language === 'vi' ? 'Người tạo ra sản phẩm:' : 'Product Creator:'}</strong> Lưu Ka Ka
            </p>
            <p className="text-lg">
              <strong>{language === 'vi' ? 'Design:' : 'Design:'}</strong> Võ Thành Đạt
            </p>
            <p className="text-lg">
              <strong>{language === 'vi' ? 'Lên ý tưởng:' : 'Concept Idea:'}</strong> Đoàn Trọng Vinh và Huỳnh Tấn Lộc
            </p>
            <p className="text-lg mt-3">
              <strong>{language === 'vi' ? 'Fanpage Facebook:' : 'Facebook Fanpage:'}</strong>
              <a
                href="https://www.facebook.com/people/Bi%E1%BB%87n-Ch%E1%BB%A9ng-Th%E1%BA%BF-H%E1%BB%87/61572688397203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 underline ml-2"
              >
                Biện Chứng Thế Hệ
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
