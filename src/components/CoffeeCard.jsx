import { data } from "autoprefixer";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'delete',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };
  return (
    <div className="grid ">
      <div className="card card-side bg-indigo-900 shadow-md shadow-red-300">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>

        <div className="font-bold flex justify-between w-full p-4">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p> Supplier Name: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
            <p>Details: {details}</p>
          </div>

          <div className="join join-vertical justify-evenly  p-2 ">
            <button className="btn btn-secondary join-item">view</button>
            <button className="btn btn-success join-item">Edit</button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-info join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
