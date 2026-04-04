const projectName = "Start Page";

const App = () => {
  return (
    <div className="notebook">
      <h1 className="notebook__title">NOTEBOOK AI</h1>
      {/* Список заметок */}
      <div className="notebook__notes">
        <div className="note">
          <p className="note__text">Привет! Я AI блокнот</p>
          <button className="note__delete">✖</button>
        </div>
      </div>
      {/* Форма для добавления новой заметки */}
      <form className="notebook__note">
        <div className="notebook__field field">
          <label htmlFor="new-note" className="field__label">
            Write your note here...
          </label>
          <input
            type="text"
            className="field__input"
            id="new-note"
            placeholder=" "
            autoComplete="off"
          />
        </div>
        <button className="button" type="submit"></button>
      </form>
    </div>
  );
};

export default App;
