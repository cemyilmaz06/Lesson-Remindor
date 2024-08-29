import Header from "./components/Header/Header";
import { data } from "./helper/data.js";
import Lesson from "./pages/Lesson.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Lesson data={data} />
    </div>
  );
}

export default App;
