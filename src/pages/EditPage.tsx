import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function EditPage() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(id);

  useEffect(() => {
    function getTodo() {
      axios
        .get(`http://localhost:3000/pitches/${id}`)
        .then((res) => {
          console.log(res.data);
          reset(res.data);
        });
    }

    getTodo();
  }, [id]);

  const onSubmit = (data: any) => {
    console.log(data);

    axios
      .put(`http://localhost:3000/pitches/${id}`, data)
      .then((res) => {
        console.log(res.data);
        alert("Cập nhật thành công");
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Sửa sân
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block font-medium mb-1"
          >
            Tên sân
          </label>

          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Nhập tên sân"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block font-medium mb-1"
          >
            Giá sân
          </label>

          <input
            type="number"
            id="price"
            {...register("price")}
            placeholder="Nhập giá sân"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block font-medium mb-1"
          >
            Vị trí
          </label>

          <input
            type="text"
            id="location"
            {...register("location")}
            placeholder="Nhập vị trí"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="type"
            className="block font-medium mb-1"
          >
            Loại sân
          </label>

          <input
            type="text"
            id="type"
            {...register("type")}
            placeholder="Nhập loại sân"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default EditPage;