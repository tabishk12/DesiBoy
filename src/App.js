import React from 'react';
// import AppRoutes from './Components/AppRoutes';
import Header from "./Components/Header";
import ReviewPage from './Components/ReviewPage';
import BookingPage from "./Components/BookingPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './page/MainPage';

function App() {
  return (
    <div className="main-content">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/schedule" element={<BookingPage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;