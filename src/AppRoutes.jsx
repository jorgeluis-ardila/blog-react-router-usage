import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components';
import {
  Blog,
  BlogPost,
  CreatePost,
  HandleUsers,
  Home,
  LogIn,
  LogOut,
  NotFound,
  Profile,
  EditPost,
  Register,
  EditUser,
} from './views';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:username" element={<Profile />} />
    <Route
      path="/:username/edit-user"
      element={
        <ProtectedRoute>
          <EditUser />
        </ProtectedRoute>
      }
    />
    <Route path="/blog" element={<Blog />}>
      <Route path=":slug" element={<BlogPost />} />
    </Route>
    <Route
      path="/blog/create-post"
      element={
        <ProtectedRoute>
          <CreatePost />
        </ProtectedRoute>
      }
    />
    <Route
      path="/blog/edit-post/"
      element={
        <ProtectedRoute>
          <EditPost />
        </ProtectedRoute>
      }
    />
    <Route
      path="/handle-users"
      element={
        <ProtectedRoute>
          <HandleUsers />
        </ProtectedRoute>
      }
    />
    <Route path="/login" element={<LogIn />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/logout"
      element={
        <ProtectedRoute>
          <LogOut />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export { AppRoutes };
