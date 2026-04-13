import "./Notebook.css";

const Notebook = () => {
  return (
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
  );
};

export default Notebook;
