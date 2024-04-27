import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {

    const craft = useLoaderData();
    const { _id, image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName  } = craft;

    const handleUpdateCraft = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const updatedCraft = { image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName  }

        console.log(updatedCraft);

        // send data to the server
        fetch(`https://art-gallery-server-9mxa94ffo-taers-projects.vercel.app/craft/${_id}`, {
            method: 'PUT',
            
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Craft: {itemName}</h2>
            <form onSubmit={handleUpdateCraft}>

                    {/*  Photo url */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* item_name and subcategory_Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="subcategoryName" placeholder="Subcategory Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* short description & price */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* rating and customization- example- yes, no */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" placeholder="example- yes/ no" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* processing_time and stockStatus - example- In stock, Made to Order */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="stockStatus" placeholder="example- In stock/ Made to Order" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* User Email and User Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userEmail" placeholder="User Email" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                <input type="submit" value="Update" className="btn btn-block" />

            </form>
        </div>
    );

    
};

export default UpdateCraft;