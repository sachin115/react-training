import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableData from "./components/tabledatas/TableData";
import Dashboard from "./components/dashboard/Dashboard";
import UserData from "./components/userform/UserForm";
import Post from "./components/Posts/Post";
import Comment from "./components/comments/Comment";
import Item from "./components/pictures/Item";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PublicRoutes from "./components/publicroutes/PublicRoute";
import ProtectedRoutes from "./components/protectedroutes/ProtectedRoutes";
import Albums from "./components/albums/Album";

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
        <Routes>
          {/* publicRoutes */}
          <Route element={<PublicRoutes />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* protectedRoutes  */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/tabledata" element={<TableData />} />
            <Route path="/user" element={<UserData />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/photos" element={<Item />} />
            <Route path="/posts/:userId" element={<Post />} />
            <Route path="/albums" element={<Albums />} />
          </Route>

          {/* universeRoutes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
