import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";

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

      {/* Form thêm sân */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <AddPage />
      </div>

      {/* Danh sách sân */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <ListPage />
      </div>

      <Toaster />
    </>
  );
}

export default App;