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
import UserAllJobsPage from './Pages/UserJobs/UserAllJobsPage';
import UserAllCoursesPage from './Pages/UserCourses/UserAllCoursesPage/UserAllCoursesPage';
import HeaderHome from './Coponents/Home/Header';
import AdminEditUserPage from './Pages/Admin/AdminUser/AdminEditUser/AdminEditUserPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import AdminUpdateCoursesPage from './Pages/Admin/AdminCourses/AdminUpdateCourses/AdminUpdateCoursesPage';
import UpComingExamPagea from './Pages/ExamPages/UpComingExamPagea/UpComingExamPagea';
import AdminUpdateJobPage from './Pages/Admin/AdminJobs/AdminUpdateJob/AdminUpdateJobPage';
import AdminUpdateArticlePage from './Pages/Admin/AdminArticles/AdminUpdateArticle/AdminUpdateArticlePage';
import AdminApplicationJobPage from './Pages/Admin/AdminJobs/AdminApplicationJob/AdminApplicationJobPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderHome />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singup" element={<RegisterPage />} />

          <Route path="/studentportal" element={<StudentPortalPage />} />
          <Route path="/instructorportal" element={<InstructorPortalPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/edituserprofile" element={<EditUserProfilePage />} />

          {/* User Jobs */}
          <Route path="/useralljob" element={<UserAllJobsPage />} />
          <Route path="/userallcourses" element={<UserAllCoursesPage />} />

          {/* Exam Page */}
          <Route path="/examresult" element={<ExamResultPage />} />
          <Route path="/createexam" element={<CreateNewExamPage />} />
          <Route path="/onlineexam" element={<OnlineExamPage />} />
          <Route path="/upcomingexam" element={<UpComingExamPagea />} />

          {/* Admin Route */}
          <Route path="/adminalluser" element={<AdminAllUsersPage />} />
          <Route path="/admincreateuser" element={<AdminCreateUserPage />} />
          <Route path="/adminedituser/:id" element={<AdminEditUserPage />} />
          <Route path="/adminallarticle" element={<AdminAllArticlesPage />} />
          <Route
            path="/admincreatearticle"
            element={<AdminCreateArticlePage />}
          />
          <Route
            path="/adminupdatearticle/:id"
            element={<AdminUpdateArticlePage />}
          />
          <Route path="/adminallcourses" element={<AdminAllCoursesPage />} />
          <Route
            path="/admincreatecourses"
            element={<AdminCreateCoursesPage />}
          />
          <Route
            path="/adminupdatecourses/:id"
            element={<AdminUpdateCoursesPage />}
          />
          <Route path="/adminalljob" element={<AdminAllJobsPage />} />
          <Route path="/admincreatejob" element={<AdminCreateJobPage />} />
          <Route path="/adminupdatejob/:id" element={<AdminUpdateJobPage />} />
          <Route
            path="/adminapplicationjob/:id"
            element={<AdminApplicationJobPage />}
          />

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
