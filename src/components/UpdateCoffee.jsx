import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    // send data to the server
    fetch(`https://coffee-store-server-eight-hazel.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      <form
        onSubmit={handleUpdateCoffee}
        className=" text-black  text-center p-8 w-1/2 bg-red-100 rounded-md "
      >
        <h1 className="text-3xl font-semibold">Update Coffee:{name}</h1>

        {/* Name and chef field  */}
        <div className="md:grid md:grid-cols-2 md:gap-20 mt-8 text-start">
          <div className="">
            <label htmlFor="coffeeName"> Name</label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2"
              type="text"
              name="name"
              id="coffeeName"
              placeholder="Enter coffee name"
              defaultValue={name}
            />
          </div>
          <div>
            <label htmlFor="idchef">Available Quantity</label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2 "
              type="text"
              name="quantity"
              id="idchef"
              placeholder="Enter coffee chef"
              defaultValue={quantity}
            />
          </div>
        </div>

        {/* supplier and taste filed */}
        <div className="md:grid md:grid-cols-2 md:gap-20 mt-8 text-start">
          <div className="">
            <label htmlFor="idSupplier"> Supplier</label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2"
              type="text"
              name="supplier"
              id="idSupplier"
              placeholder="Enter coffee name"
              defaultValue={supplier}
            />
          </div>
          <div>
            <label htmlFor="idTaste">Taste</label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2"
              type="text"
              name="taste"
              id="idTaste"
              placeholder="Enter coffee Supplier"
              defaultValue={taste}
            />
          </div>
        </div>

        {/* Category and Details field */}
        <div className="md:grid md:grid-cols-2 md:gap-20 mt-8 text-start">
          <div className="">
            <label htmlFor="idCategory">Category </label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2"
              type="text"
              name="category"
              id="idCategory"
              placeholder="Enter coffee Category"
              defaultValue={category}
            />
          </div>
          <div>
            <label htmlFor="idDetails">Details</label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2"
              type="text"
              name="details"
              id="idDetails"
              placeholder="Enter coffee Details"
              defaultValue={details}
            />
          </div>
        </div>

        {/* Photo field */}
        <div className="md:flex md:justify-center gap-20 mt-8  text-start">
          <div className=" w-full">
            <label htmlFor="idPhoto">
              {" "}
              <span className="text-start">Photo</span>
            </label>
            <input
              className="bg-gray-300 px-5 rounded-lg w-full py-2"
              type="text"
              name="photo"
              id="idPhoto"
              placeholder="Enter photo url"
              defaultValue={photo}
            />
          </div>
        </div>

        {/* Add coffee field */}
        <div className="md:flex md:justify-center gap-20 mt-8  ">
          <div className=" w-full">
            <input
              className="bg-amber-600 w-full font-semibold rounded-full py-1 hover:bg-amber-400"
              type="submit"
              value="Update Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
