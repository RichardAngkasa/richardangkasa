import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";
import Home from "./component/Home";
// import TodoPaper from "./Todo/TodoPaper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="blog" element={<Blog />} /> */}
      {/* <Route path="todo" element={<TodoPaper />} /> */}
    </Routes>
  );
}

export default App;
