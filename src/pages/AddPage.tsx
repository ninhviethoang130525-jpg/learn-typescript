import axios from "axios";
import { useForm } from "react-hook-form";

interface TodoFormData {
  completed: string;
  name: string;
  price: number;
  location: string;
  type: string;
}

function AddPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormData>();

  const onSubmit = async (data: TodoFormData) => {
    console.log(data);

    const newData = {
      ...data,
      completed: data.completed == "true" ? true : false,
    };

    await axios
  .post("http://localhost:3000/pitches", newData)
  .then(() => {
    alert("Thêm mới thành công");
  });

window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Tên sân */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Tên sân
          </label>

          <input
            {...register("name", {
              required: "Bắt buộc phải nhập tên sân",
              minLength: {
                value: 3,
                message: "Tên sân phải lớn hơn 3 ký tự",
              },
            })}
            type="text"
            id="name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && (
            <span className="text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Giá sân */}
        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Gia san
          </label>

          <input
            {...register("price", {
              required: "Bắt buộc phải nhập giá sân",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Giá sân phải lớn hơn 0",
              },
            })}
            type="number"
            id="price"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.price && (
            <span className="text-red-500">
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Vị trí */}
        <div>
          <label htmlFor="location" className="block font-medium mb-1">
            Vi tri
          </label>

          <input
            {...register("location", {
              required: "Bắt buộc phải nhập vị trí",
              minLength: {
                value: 3,
                message: "Vị trí phải lớn hơn 3 ký tự",
              },
            })}
            type="text"
            id="location"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.location && (
            <span className="text-red-500">
              {errors.location.message}
            </span>
          )}
        </div>

        {/* Loại sân */}
        <div>
          <label htmlFor="type" className="block font-medium mb-1">
            Loai san
          </label>

          <input
            {...register("type", {
              required: "Bắt buộc phải nhập loại sân",
            })}
            type="text"
            id="type"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.type && (
            <span className="text-red-500">
              {errors.type.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;