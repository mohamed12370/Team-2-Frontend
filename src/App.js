import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentPortalPage from './Pages/StudentePortalPage/StudentPortalPage';
import HomePage from './Pages/Home/HomePage';
import ExamResultPage from './Pages/ExamResult/ExamResultPage';
import AdminCreateUserPage from './Pages/Admin/AdminCreateUserPage/AdminCreateUserPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studentportal" element={<StudentPortalPage />} />
          <Route path="/examresult" element={<ExamResultPage />} />
          {/* Admin Route */}
          <Route path="/createuser" element={<AdminCreateUserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
