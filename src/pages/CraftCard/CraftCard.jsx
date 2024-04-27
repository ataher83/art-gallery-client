import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({ craft, crafts, setCrafts }) => {

    const { _id, image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName  } = craft;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/craft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Craft has been deleted.',
                                'success'
                            )
                            const remaining = crafts.filter(cof => cof._id !== _id);
                            setCrafts(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">

            <figure><img src={image} alt="Movie" /></figure>

            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {itemName}</h2>
                    <p>{subcategoryName}</p>
                    <p>{shortDescription}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{customization}</p>
                    <p>{processingTime}</p>
                    <p>{stockStatus}</p>
                    <p>{userEmail}</p>
                    <p>{userName}</p>
                </div>
                
                <div className=" card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-2 flex flex-col">
                        <button className="btn">View</button>
                        <Link to={`updateCraft/${_id}`}>
                        <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;