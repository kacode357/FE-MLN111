import { useState } from 'react';
import axios from 'axios';

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleUserMessage = async (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      const newMessages = [...messages, { role: 'user', content: userMessage }];
      setMessages(newMessages);
      setLoading(true);
      setUserMessage('');

      let retries = 3;
      let delay = 2000;

      while (retries > 0) {
        try {
          const response = await axios.post(
            'https://api.mistral.ai/v1/chat/completions',
            {
              model: 'mistral-large-latest',
              messages: newMessages,
            },
            {
              headers: {
                Authorization: `Bearer ROtMj42h8dkm1c3PI9hEtoejIjqm2an4`,
                'Content-Type': 'application/json',
              },
            }
          );

          const aiMessage = response.data.choices[0].message.content;
          setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: aiMessage }]);
          setLoading(false);
          return;
        } catch (error) {
          if (error.response && error.response.status === 429) {
            console.warn(`429 Too Many Requests. Retrying in ${delay / 1000} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
            delay *= 2;
            retries -= 1;
          } else {
            console.error('Error fetching AI response:', error);
            setLoading(false);
            break;
          }
        }
      }
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-5 right-5 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition"
        onClick={toggleChat}
      >
        Chat AI
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          <div className="bg-green-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold text-lg">AI Chat</span>
            <button
              className="text-white font-bold text-xl"
              onClick={toggleChat}
            >
              X
            </button>
          </div>
          <div className="p-4 max-h-80 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block rounded-lg p-2 text-sm ${
                    msg.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && <p className="text-center text-gray-500 italic">AI is typing...</p>}
          </div>
          <form onSubmit={handleUserMessage}>
            <div className="flex items-center p-2 border-t border-gray-300">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Nhập câu hỏi..."
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="ml-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
                disabled={loading || !userMessage.trim()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAI;
