import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordPage from 'pages/RecordPage';
import PlayerPage from 'pages/PlayerPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecordPage />} />
        <Route path='/player' element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
