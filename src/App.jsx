const projectName = "Start Page";

const App = () => {
  return (
    <div className="notebook">
      <h1 className="notebook__title">NOTEBOOK AI</h1>
      <form className="notebook__note">
        <div className="notebook__field field">
          <label htmlFor="new-note" className="field__label"></label>
        </div>
      </form>
    </div>
  );
};

export default App;
