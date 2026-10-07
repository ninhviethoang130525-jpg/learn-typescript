import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          <Link to="#" className="text-xl font-semibold">
            WEB502 App
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>

            <Link to="#" className="hover:text-gray-200">
              Danh sách
            </Link>
          </div>

        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ListPage/>}></Route>
        <Route path="/add" element={<AddPage/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
      </Routes>

     

      <Toaster />
    </>
  );
}

export default App;