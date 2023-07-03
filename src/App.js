import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentPortalPage from './Pages/StudentePortalPage/StudentPortalPage';
import HomePage from './Pages/Home/HomePage';
import ExamResultPage from './Pages/ExamPages/ExamResult/ExamResultPage';
import AdminCreateUserPage from './Pages/Admin/AdminUser/AdminCreateUserPage';
import CreateNewExamPage from './Pages/ExamPages/CreateNewExamPage/CreateNewExamPage';
import OnlineExamPage from './Pages/ExamPages/OnlineExamPage/OnlineExamPage';
import CreateCVPageMainIfo from './Pages/CreateCV/CreateCVPage';
import MainInformationPage from './Pages/CreateCV/main-information';
import SummaryPage from './Pages/CreateCV/summary';
import SkillsPage from './Pages/CreateCV/skills';
import HonersAndAwardsPage from './Pages/CreateCV/honers-and-awards';
import HobbiesAndInterestsPage from './Pages/CreateCV/hobbies-and-interests';
import ExperiencePage from './Pages/CreateCV/experience';
import EducationPage from './Pages/CreateCV/education';
import LinksPage from './Pages/CreateCV/links';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studentportal" element={<StudentPortalPage />} />
          {/* Exam Page */}
          <Route path="/examresult" element={<ExamResultPage />} />
          <Route path="/createexam" element={<CreateNewExamPage />} />
          <Route path="/onlineexam" element={<OnlineExamPage />} />
          {/* Admin Route */}
          <Route path="/createuser" element={<AdminCreateUserPage />} />

          {/* Create Cv */}
          {/* <Route path="/createcvmaininfo" element={<CreateCVPageMainIfo />} /> */}
          <Route
            path="/createcv/main-information"
            element={<MainInformationPage />}
          />
          <Route path="/createcv/summary" element={<SummaryPage />} />
          <Route path="/createcv/skills" element={<SkillsPage />} />
          <Route
            path="/createcv/honers-and-awards"
            element={<HonersAndAwardsPage />}
          />
          <Route
            path="/createcv/hobbies-and-interests"
            element={<HobbiesAndInterestsPage />}
          />
          <Route path="/createcv/experience" element={<ExperiencePage />} />
          <Route path="/createcv/education" element={<EducationPage />} />
          <Route path="/createcv/links" element={<LinksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
