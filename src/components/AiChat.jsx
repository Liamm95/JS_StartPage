import "./AiChat.css";

const AiChat = () => {
  return (
    <div className="ai-chat">
      <h2 className="ai-chat__title">AI CHAT</h2>
      <div className="ai-chat__history">
        {/* История сообщений чата */}
        <ul className="tabs">
          <li className="tab">1</li>
          <li className="tab">2</li>
          <li className="tab">3</li>
        </ul>
      </div>
      <div className="ai-chat__content">
        <placeholder>Спросите чат...</placeholder>
        <button className="ai-chat__button">{">"}</button>
      </div>
    </div>
  );
};

export default AiChat;
