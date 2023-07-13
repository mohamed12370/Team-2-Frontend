import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StudentPortalPage from './Pages/StudentePortalPage/StudentPortalPage';
import HomePage from './Pages/Home/HomePage';
import ExamResultPage from './Pages/ExamPages/ExamResult/ExamResultPage';
import AdminCreateUserPage from './Pages/Admin/AdminUser/AdminCreateUser/AdminCreateUserPage';
import CreateNewExamPage from './Pages/ExamPages/CreateNewExamPage/CreateNewExamPage';
import OnlineExamPage from './Pages/ExamPages/OnlineExamPage/OnlineExamPage';
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

import NewCreateCVPage from './Pages/CreateCV/MainCreateCV';
import MainInformation1Form from './Coponents/MainCreateCV/MainInformation1Form';
import Summary2Form from './Coponents/MainCreateCV/Summary2Form';
import Skills3Form from './Coponents/MainCreateCV/Skills3Form';
import HonersAndAwards6Form from './Coponents/MainCreateCV/HonersAndAwards6Form';
import HobbiesAndInterests7Form from './Coponents/MainCreateCV/HobbiesAndInterests7Form';
import Experience4Form from './Coponents/MainCreateCV/Experience4Form';
import Education5Form from './Coponents/MainCreateCV/Education5Form';
import Links8Form from './Coponents/MainCreateCV/Links8Form';
import ResetPasswordPage from './Pages/Auth/ResetPasswordPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singup" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route
            path="/"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <HomePage />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <ContactUsPage />
              </>
            }
          />

          <Route
            path="/studentportal"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <StudentPortalPage />
              </>
            }
          />
          <Route
            path="/instructorportal"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <InstructorPortalPage />
              </>
            }
          />
          <Route
            path="/userprofile"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UserProfilePage />
              </>
            }
          />
          <Route
            path="/edituserprofile"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <EditUserProfilePage />
              </>
            }
          />

          {/* User Jobs */}
          <Route
            path="/useralljob"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UserAllJobsPage />
              </>
            }
          />
          <Route
            path="/userjobdetails/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <ShowUserJobDetailsPage />
              </>
            }
          />
          <Route
            path="/userapplyforjob/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UserApplyForJobPage />
              </>
            }
          />
          <Route
            path="/userallcourses"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UserAllCoursesPage />
              </>
            }
          />
          <Route
            path="/usercoursesdetails/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <ShowCourseDetailsPage />
              </>
            }
          />
          <Route
            path="/userallarticle"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UserAllArticlesPage />
              </>
            }
          />
          <Route
            path="/userarticledetails/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <ShowUserArticleDetailsPage />
              </>
            }
          />

          {/* Exam Page */}
          <Route
            path="/examresult/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <ExamResultPage />
              </>
            }
          />
          <Route
            path="/createexam"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <CreateNewExamPage />
              </>
            }
          />
          <Route
            path="/updateexam/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UpdateExamPage />
              </>
            }
          />
          <Route
            path="/onlineexam/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <OnlineExamPage />
              </>
            }
          />
          <Route
            path="/upcomingexam"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <UpComingExamPagea />
              </>
            }
          />

          {/* Admin Route */}
          <Route
            path="/adminuploadcertificate"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminUploadCertificatePage />
              </>
            }
          />
          <Route
            path="/adminalluser"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminAllUsersPage />
              </>
            }
          />
          <Route
            path="/admincreateuser"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminCreateUserPage />
              </>
            }
          />
          <Route
            path="/adminedituser/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminEditUserPage />
              </>
            }
          />
          <Route
            path="/adminallarticle"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminAllArticlesPage />
              </>
            }
          />
          <Route
            path="/admincreatearticle"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminCreateArticlePage />
              </>
            }
          />
          <Route
            path="/adminupdatearticle/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminUpdateArticlePage />
              </>
            }
          />
          <Route
            path="/adminallcourses"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminAllCoursesPage />
              </>
            }
          />
          <Route
            path="/admincreatecourses"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminCreateCoursesPage />
              </>
            }
          />
          <Route
            path="/adminupdatecourses/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminUpdateCoursesPage />
              </>
            }
          />
          <Route
            path="/adminalljob"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminAllJobsPage />
              </>
            }
          />
          <Route
            path="/admincreatejob"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminCreateJobPage />
              </>
            }
          />
          <Route
            path="/adminupdatejob/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminUpdateJobPage />
              </>
            }
          />
          <Route
            path="/adminapplicationjob/:id"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <AdminApplicationJobPage />
              </>
            }
          />

          {/* New Create CV */}
          <Route
            path="/createcv"
            element={
              <>
                <HeaderTopLogIn />
                <HeaderHome />
                <NewCreateCVPage />
              </>
            }
          >
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
        </Routes>
        <FooterHome />
      </BrowserRouter>
    </>
  );
}

export default App;
