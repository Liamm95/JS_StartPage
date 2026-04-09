const projectName = "NOTEBOOK WITH AI";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">{projectName}</h1>
      {/* Список заметок */}
      <div className="app__layout">
        <div className="notebook">
          <h2 className="notebook__title">Заметки</h2>
          <div className="notebook__tabs">
            <button className="tab tab--active">Заметка 1</button>
            <button className="tab">Заметка 2</button>
            <button className="tab">Заметка 3</button>
            <button className="tab tab--new">+</button>
          </div>
          {/* Форма для добавления новой заметки */}
          <div className="notebook__content">
            <textarea
              className="notebook__text"
              placeholder="Текст заметки..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
