import "./AiChat.css";
import { useState } from "react";

const AiChat = () => {
  const [isModelButtonClicked, setIsModelButtonClicked] = useState(false);
  const [isHistoryButtonClicked, setIsHistoryButtonClicked] = useState(false);

  const handleModelClick = () => {
    setIsModelButtonClicked(!isModelButtonClicked);
  };

  const handleHistoryClick = () => {
    setIsHistoryButtonClicked(!isHistoryButtonClicked);
  };

  return (
    <div className="ai-chat">
      <div className="ai-chat__header-layout">
        <div className="ai-chat__header">
          <button
            className={`ai-chat__choose-button 
          ${isModelButtonClicked ? "clicked" : ""}`}
            onClick={handleModelClick}
          >
            <span className="ai-chat__title">DeepSeek</span>

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
        </div>
      </div>
      {/* История сообщений чата */}
      <div className="ai-chat__history-layout">
        <div className="ai-chat__history">
          <label htmlFor="history-button" className="ai-chat__label-history">
            Тема и история чата. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ipsum architecto distinctio cumque sunt molestiae.
            Illum accusantium dignissimos, non voluptatum nostrum voluptatibus
            cupiditate maxime explicabo autem laboriosam eos veritatis, possimus
            a.
          </label>
          <button
            id="history-button"
            className={`ai-chat__choose-button 
          ${isHistoryButtonClicked ? "clicked" : ""}`}
            onClick={handleHistoryClick}
          >
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
        </div>
      </div>
      {/* Ответ чата */}
      <div className="ai-chat__chat-answer">
        <div className="ai-chat__answer">
          <div className="ai-chat__answer-text">Ответ чата на вопрос</div>
          <button className="ai-chat__answer-copy-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 10C10.4477 10 10 10.4477 10 11V20C10 20.5523 10.4477 21 11 21H20C20.5523 21 21 20.5523 21 20V11C21 10.4477 20.5523 10 20 10H11ZM8 11C8 9.34315 9.34315 8 11 8H20C21.6569 8 23 9.34315 23 11V20C23 21.6569 21.6569 23 20 23H11C9.34315 23 8 21.6569 8 20V11Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 3C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H5C5.55228 14 6 14.4477 6 15C6 15.5523 5.55228 16 5 16H4C3.20435 16 2.44129 15.6839 1.87868 15.1213C1.31607 14.5587 1 13.7956 1 13V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H13C13.7956 1 14.5587 1.31607 15.1213 1.87868C15.6839 2.44129 16 3.20435 16 4V5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5V4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H4Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <form className="ai-chat__form">
        <input
          type="text"
          placeholder="Спросите чат..."
          className="ai-chat__input"
        />
        <button type="submit" className="ai-chat__submit-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.86164 3.49681L14.9379 7.03494C18.1123 8.62214 18.1123 11.2179 14.9379 12.8051L7.86164 16.3432C3.10004 18.724 1.15738 16.7731 3.53818 12.0197L4.25738 10.5896C4.43924 10.2259 4.43924 9.62241 4.25738 9.25868L3.53818 7.82028C1.15738 3.06694 3.10831 1.11601 7.86164 3.49681Z"
              stroke="#4361EE"
              stroke-width="1.24"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.49707 9.92001H8.96107"
              stroke="#4361EE"
              stroke-width="1.24"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AiChat;
