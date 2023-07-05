import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentPortalPage from './Pages/StudentePortalPage/StudentPortalPage';
import HomePage from './Pages/Home/HomePage';
import ExamResultPage from './Pages/ExamPages/ExamResult/ExamResultPage';
import AdminCreateUserPage from './Pages/Admin/AdminUser/AdminCreateUser/AdminCreateUserPage';
import CreateNewExamPage from './Pages/ExamPages/CreateNewExamPage/CreateNewExamPage';
import OnlineExamPage from './Pages/ExamPages/OnlineExamPage/OnlineExamPage';
import MainInformationPage from './Pages/CreateCV/main-information';
import SummaryPage from './Pages/CreateCV/summary';
import SkillsPage from './Pages/CreateCV/skills';
import HonersAndAwardsPage from './Pages/CreateCV/honers-and-awards';
import HobbiesAndInterestsPage from './Pages/CreateCV/hobbies-and-interests';
import ExperiencePage from './Pages/CreateCV/experience';
import EducationPage from './Pages/CreateCV/education';
import LinksPage from './Pages/CreateCV/links';
import AdminAllArticlesPage from './Pages/Admin/AdminArticles/AdminAllArticlesPage/AdminAllArticlesPage';
import AdminAllUsersPage from './Pages/Admin/AdminUser/AdminAllUser/AdminAllUsersPage';
import AdminAllCoursesPage from './Pages/Admin/AdminCourses/AdminAllCoures/AdminAllCoursesPage';
import AdminCreateCoursesPage from './Pages/Admin/AdminCourses/AdminCreateCoures/AdminCreateCoursesPage';
import AdminCreateArticlePage from './Pages/Admin/AdminArticles/AdminCreateArticlePage/AdminCreateArticlePage';
import AdminCreateJobPage from './Pages/Admin/AdminJobs/AdminCreateJobs/AdminCreateJobPage';
import AdminAllJobsPage from './Pages/Admin/AdminJobs/AdminAllJobs/AdminAllJobsPage';
import InstructorPortalPage from './Pages/InstructorPortalPage/InstructorPortalPage';
import UserProfilePage from './Pages/User/UserProfile/userProfilePage';
import EditUserProfilePage from './Pages/User/EditUserProfile/EditUserProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studentportal" element={<StudentPortalPage />} />
          <Route path="/instructorportal" element={<InstructorPortalPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/edituserprofile" element={<EditUserProfilePage />} />

          {/* Exam Page */}
          <Route path="/examresult" element={<ExamResultPage />} />
          <Route path="/createexam" element={<CreateNewExamPage />} />
          <Route path="/onlineexam" element={<OnlineExamPage />} />

          {/* Admin Route */}
          <Route path="/adminalluser" element={<AdminAllUsersPage />} />
          <Route path="/admincreateuser" element={<AdminCreateUserPage />} />
          <Route path="/adminallarticle" element={<AdminAllArticlesPage />} />
          <Route
            path="/admincreatearticle"
            element={<AdminCreateArticlePage />}
          />
          <Route path="/adminallcourses" element={<AdminAllCoursesPage />} />
          <Route
            path="/admincreatecourses"
            element={<AdminCreateCoursesPage />}
          />
          <Route path="/adminalljob" element={<AdminAllJobsPage />} />
          <Route path="/admincreatejob" element={<AdminCreateJobPage />} />

          {/* Create Cv */}
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
