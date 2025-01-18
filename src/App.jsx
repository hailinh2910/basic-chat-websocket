import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./component/Chat";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;