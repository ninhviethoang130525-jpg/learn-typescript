import { useEffect, useState } from "react";
import axios from "axios";
interface Pitch {
  id: string;
  name: string;
  price: number;
  location: string;
  type: string;
}
function ListPage() {
  const [pitches, setPitches] = useState<Pitch[]>([]);
  const getPitches = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pitches");
      setPitches(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPitches();
  }, []);
  // bai 2
  const handleDelete = async (id: string) => {
    if (!confirm("ban co chac chan muon xoa khong")) {
      return;
    }
    try {
      await axios.delete(` http://localhost:3000/pitches/${id}`);
      setPitches(pitches.filter((pitch) => pitch.id !== id));
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách san bong</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>

              <th className="px-4 py-2 border border-gray-300 text-left">
                Ten San
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                gia thue/gio
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                gia thue 2 gio
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                dia diem
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                loai san
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                thao tac
              </th>

            </tr>
          </thead>


          <tbody>
            {pitches.map((pitch, index) => (
              <tr key={pitch.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {pitch.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {pitch.price.toLocaleString()} VND
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {(pitch.price * 2).toLocaleString()} VND
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {pitch.location}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {pitch.type}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleDelete(pitch.id)}
                    className="px-4 py-2 border border-gray-300"
                  >
                    Xóa
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
