import { GlobalProvider } from "./context/GlobalContext.jsx";
import DefaultLayout from "../src/layout/DefaultLayout.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ConversionPage from "./pages/ConversionPage.jsx";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/convert" element={<ConversionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
