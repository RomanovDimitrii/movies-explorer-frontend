import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeMenuPopup();
      }
    }
    if (isMenuPopupOpen) {
      // навешиваем только при открытии
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isMenuPopupOpen]);

  function closeMenuPopup() {
    setIsMenuPopupOpen(false);
  }

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  return (
    <main className="App">
      <Routes>
        {/* <Route path="/sign-up" element={<Register />} /> */}
        <Route path="/sign-in" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              isMenuOpen={isMenuPopupOpen}
              onMenu={handleMenuPopupClick}
              onCloseMenu={closeMenuPopup}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              isMenuOpen={isMenuPopupOpen}
              onMenu={handleMenuPopupClick}
              onCloseMenu={closeMenuPopup}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              isMenuOpen={isMenuPopupOpen}
              onMenu={handleMenuPopupClick}
              onCloseMenu={closeMenuPopup}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
