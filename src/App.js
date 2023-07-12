import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import UserAllJobsPage from './Pages/UserJobs/UserAllJobs/UserAllJobsPage';
import UserAllCoursesPage from './Pages/UserCourses/UserAllCoursesPage/UserAllCoursesPage';
import HeaderHome from './Coponents/Home/Header';
import AdminEditUserPage from './Pages/Admin/AdminUser/AdminEditUser/AdminEditUserPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import AdminUpdateCoursesPage from './Pages/Admin/AdminCourses/AdminUpdateCourses/AdminUpdateCoursesPage';
import UpComingExamPagea from './Pages/ExamPages/UpComingExamPagea/UpComingExamPagea';
import AdminUpdateJobPage from './Pages/Admin/AdminJobs/AdminUpdateJob/AdminUpdateJobPage';
import AdminUpdateArticlePage from './Pages/Admin/AdminArticles/AdminUpdateArticle/AdminUpdateArticlePage';
import AdminApplicationJobPage from './Pages/Admin/AdminJobs/AdminApplicationJob/AdminApplicationJobPage';
import ShowCourseDetailsPage from './Pages/UserCourses/ShowCoursesDetailsPage/ShowCourseDetailsPage';
import FooterHome from './Coponents/Home/FooterHome';
import HeaderTopLogIn from './Coponents/Home/HeaderTopLogIn';
import AdminUploadCertificatePage from './Pages/Admin/AdminUploadCertificate/AdminUploadCertificatePage';
import ContactUsPage from './Pages/ContactUs/ContactUsPage';
import LoginPage from './Pages/Auth/LoginPage';
import UserAllArticlesPage from './Pages/UserArticles/UserAllArticlesPage/UserAllArticlesPage';
import ShowUserArticleDetailsPage from './Pages/UserArticles/ShowUserArticlePage/ShowUserArticlePage';
import UpdateExamPage from './Pages/ExamPages/UpdateExamPage/UpdateExamPage';
import ShowUserJobDetailsPage from './Pages/UserJobs/ShowUserJobDetails/ShowUserJobDetailsPage';
import UserApplyForJobPage from './Pages/UserJobs/UserApplyForJobPage/UserApplyForJobPage';
import ForgetPasswordPage from './Pages/Auth/ForgetPasswordPage';

import NewCreateCVPage from './Pages/CreateCV/MainCreateCV/MainCreateCV';
import MainInformation1Form from './Coponents/MainCreateCV/MainInformation1Form';
import Summary2Form from './Coponents/MainCreateCV/Summary2Form';
import Skills3Form from './Coponents/MainCreateCV/Skills3Form';
import HonersAndAwards6Form from './Coponents/MainCreateCV/HonersAndAwards6Form';
import HobbiesAndInterests7Form from './Coponents/MainCreateCV/HobbiesAndInterests7Form';
import Experience4Form from './Coponents/MainCreateCV/Experience4Form';
import Education5Form from './Coponents/MainCreateCV/Education5Form';
import Links8Form from './Coponents/MainCreateCV/Links8Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderTopLogIn />
        <HeaderHome />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singup" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />

          <Route path="/studentportal" element={<StudentPortalPage />} />
          <Route path="/instructorportal" element={<InstructorPortalPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/edituserprofile" element={<EditUserProfilePage />} />

          {/* User Jobs */}
          <Route path="/useralljob" element={<UserAllJobsPage />} />
          <Route
            path="/userjobdetails/:id"
            element={<ShowUserJobDetailsPage />}
          />
          <Route
            path="/userapplyforjob/:id"
            element={<UserApplyForJobPage />}
          />
          <Route path="/userallcourses" element={<UserAllCoursesPage />} />
          <Route
            path="/usercoursesdetails/:id"
            element={<ShowCourseDetailsPage />}
          />
          <Route path="/userallarticle" element={<UserAllArticlesPage />} />
          <Route
            path="/userarticledetails/:id"
            element={<ShowUserArticleDetailsPage />}
          />

          {/* Exam Page */}
          <Route path="/examresult/:id" element={<ExamResultPage />} />
          <Route path="/createexam" element={<CreateNewExamPage />} />
          <Route path="/updateexam/:id" element={<UpdateExamPage />} />
          <Route path="/onlineexam/:id" element={<OnlineExamPage />} />
          <Route path="/upcomingexam" element={<UpComingExamPagea />} />

          {/* Admin Route */}
          <Route
            path="/adminuploadcertificate"
            element={<AdminUploadCertificatePage />}
          />
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

          {/* New Create CV */}
          <Route path="/createcv" element={<NewCreateCVPage />}>
            {/* redirect to first route -------------------------------- */}
            <Route
              index
              element={<Navigate replace to="/createcv/main-information" />}
            />

            <Route path="main-information" element={<MainInformation1Form />} />
            <Route path="summary" element={<Summary2Form />} />
            <Route path="skills" element={<Skills3Form />} />
            <Route
              path="honers-and-awards"
              element={<HonersAndAwards6Form />}
            />
            <Route
              path="hobbies-and-interests"
              element={<HobbiesAndInterests7Form />}
            />
            <Route path="experience" element={<Experience4Form />} />
            <Route path="education" element={<Education5Form />} />
            <Route path="links" element={<Links8Form />} />
          </Route>

          {/* Create Cv */}
          {/* <Route
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
          <Route path="/createcv/links" element={<LinksPage />} /> */}
        </Routes>
        <FooterHome />
      </BrowserRouter>
    </>
  );
}

export default App;
