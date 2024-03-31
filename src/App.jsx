import DetailsPage from "./pages/DetailsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayPage from "./pages/DisplayPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DetailsPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
