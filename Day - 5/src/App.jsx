import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import LazySuspense from './components/LazySuspense'

const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyRegister = lazy(() => import("./pages/auth/Register"))

const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"))
const LazyUserHome = lazy(() => import("./pages/user/Home"))
const LazyUserProfile = lazy(() => import("./pages/user/UserProfile"))
const LazyUserContactUs = lazy(() => import("./pages/user/ContactUs"))
const LazyUserPolicy = lazy(() => import("./pages/user/UserPolicy"))
const LazyUserFaq = lazy(() => import("./pages/user/UserFaq"))
const LazyUserTerms = lazy(() => import("./pages/user/UserTerms"))
const LazyUserEvents = lazy(() => import("./pages/user/UserEvents"))
const LazyUserBookings = lazy(() => import("./pages/user/UserBookings"))

const LazyAdminLayout = lazy(() => import("./pages/admin/AdminLayout"))
const LazyAdminHome = lazy(() => import("./pages/admin/AdminHome"))
const LazyAdminProfile = lazy(() => import("./pages/admin/AdminProfile"))
const LazyAdminEvents = lazy(() => import("./pages/admin/AdminEvents"))
const LazyAdminVenues = lazy(() => import("./pages/admin/AdminVenues")) 
const LazyAdminBookings = lazy(() => import("./pages/admin/AdminBookings"))

const UserRoutes = () => (
  <LazyUserLayout>
    <Routes>
      <Route path="/home" element={<LazySuspense component={LazyUserHome}/>}/>
      <Route path="/events" element={<LazySuspense component={LazyUserEvents}/>}/>
      <Route path="/bookings" element={<LazySuspense component={LazyUserBookings}/>}/>
      <Route path="/profile" element={<LazySuspense component={LazyUserProfile}/>}/>
      <Route path="/contactus" element={<LazySuspense component={LazyUserContactUs}/>}/>
      <Route path="/policy" element={<LazySuspense component={LazyUserPolicy}/>}/>
      <Route path="/faq" element={<LazySuspense component={LazyUserFaq}/>}/>
      <Route path="/terms" element={<LazySuspense component={LazyUserTerms}/>}/>
    </Routes>
  </LazyUserLayout>  
)
const AdminRoutes = () => (
  <LazyAdminLayout>
    <Routes>
      <Route path="/home" element={<LazySuspense component={LazyAdminHome}/>}/>
      <Route path="/profile" element={<LazySuspense component={LazyAdminProfile}/>}/>
      <Route path="/events" element={<LazySuspense component={LazyAdminEvents}/>}/>
      <Route path="/venues" element={<LazySuspense component={LazyAdminVenues}/>}/>      
      <Route path="/bookings" element={<LazySuspense component={LazyAdminBookings}/>}/>      
    </Routes>
  </LazyAdminLayout>  
)

function App() {

  return (
    <Routes>
      <Route exact path = "/" element = {<Navigate to = "/login"/>}/>
      <Route path = "/login" element = {<LazySuspense component={LazyLogin}/>}/>
      <Route path = "/register" element = {<LazySuspense component={LazyRegister}/>}/>
      {/* <Route path = "/forgetpw" element = {<LazySuspense component={Lazyfpass}/>}/> */}
      <Route path = "/user/*" element = {<LazySuspense component={UserRoutes}/>}/>
      <Route path = "/admin/*" element = {<LazySuspense component={AdminRoutes}/>}/>
    </Routes>
  )
}

export default App
