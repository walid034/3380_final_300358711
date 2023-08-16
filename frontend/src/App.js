import "./styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookList from './Components/FrontPage';
import AddBook from "./Components/AddBook";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/create-book" element={<AddBook />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
