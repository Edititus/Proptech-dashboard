import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/templates";
import { DashboardPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
