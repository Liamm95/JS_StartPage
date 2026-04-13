import AiChat from "./components/AiChat";
import Notebook from "./components/notebook";

const projectName = "NOTEBOOK WITH AI";

const App = () => {
  console.log("APP RENDE");
  return (
    <div className="app">
      <h1 className="app__title">{projectName}</h1>
      <div className="app__layout">
        {/* Список заметок */}
        <Notebook />
        {/* AI чат */}
        <AiChat />
      </div>
    </div>
  );
};

export default App;
