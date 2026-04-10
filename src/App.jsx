const projectName = "NOTEBOOK WITH AI";

const App = () => {
  console.log("APP RENDE");
  return (
    <div className="app">
      <h1 className="app__title">{projectName}</h1>
      {/* Список заметок */}
      <div className="app__layout">
        <div className="notebook">
          <h2 className="notebook__title">NOTEBOOK</h2>
          <div className="notebook__tabs">
            <button className="tab tab--active">Заметка 1</button>
            <button className="tab">Заметка 2</button>
            <button className="tab">Заметка 3</button>
            <button className="tab tab--new">+</button>
          </div>
          {/* Форма для добавления новой заметки */}
          <div className="notebook__content">
            <textarea
              id="note-text"
              className="notebook__text"
              placeholder="Текст заметки..."
            />
          </div>
        </div>
        {/* Боковая панель с AI чатом */}
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
            <placeholder>Спросите чата...</placeholder>
            <button className="button">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
