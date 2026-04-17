import "./AiChat.css";

const AiChat = () => {
  return (
    <div className="ai-chat">
      <h2 className="ai-chat__title">AI CHAT</h2>
      <button className="ai-chat__button">
        <svg
          width="5"
          height="3"
          viewBox="0 0 5 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0815794 0.122369C0.184913 -0.0407897 0.359055 -0.0407897 0.462389 0.122369L2.25703 2.08112C2.36036 2.1899 2.53451 2.1899 2.63784 2.08112L4.43248 0.122369C4.53581 -0.0407897 4.70996 -0.0407897 4.81329 0.122369C4.92206 0.231142 4.92206 0.394938 4.81329 0.50371L3.02396 2.4614C2.70308 2.84211 2.19179 2.84211 1.87091 2.4614L0.0815794 0.50371C-0.0271931 0.394938 -0.0271931 0.231142 0.0815794 0.122369Z"
            fill="black"
            fill-opacity="0.4"
          />
        </svg>
      </button>
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
