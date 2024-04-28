import { useLoaderData, useParams } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const CraftDetails = () => {

    const crafts =useLoaderData();
    const {id} = useParams()
    console.log(id)
    console.log( typeof(id) )
    //এখানে প্যারাম এর মাধ্যেমে যে id পাওয়া যায় তা String, তাই একে Integer এ কনভারট করে নিতে হবে, অথবা  == (double equal operator) দিয়ে কম্পেয়ার করতে হবে। 
    //এখানে আমি == (double equal operator) ব্যবহার করেছি 

    // const idInt = parseInt(id)
    // console.log(idInt)
    // console.log( typeof(idInt) )

    const craft = crafts.find(c => c._id == id) 
    // console.log( id, crafts )
   



    return (
        <div className="card bg-base-100 shadow-xl mt-4  ">
            <Helmet>
            <title>The Art Gallery | CraftDetails: {craft._id}</title>
            </Helmet>


            <div className="card bg-base-100 shadow-xl mt-4">

                <figure><img className="w-full h-72" src={craft.image} alt="Craft Image" />
                </figure>

                <div className="flex justify-between px-2 pt-1 font-semibold">
                    <p className="flex items-center"><FcRating className="text-blue-400" /> {craft.rating}</p>
                    <p className="flex items-center"><IoLogoUsd className="text-blue-400" /> {craft.price}</p>
                    <p className="bg-orange-400 rounded  capitalize px-1"><span >{craft.stockStatus}</span></p>
                </div>

                <div className="card-body px-1">
                    <div className="flex gap-2 items-center justify-center">
                        <h2 className=" lg:card-title text-center text-orange-600">
                            {craft.itemName}
                        </h2>
                    </div>
                        
                    <p className="text-center font-normal text-orange-400 pb-2">{craft.subcategoryName}</p>
                        
                    <p className="text-center pb-2">{craft.shortDescription}</p>

                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Customization: {craft.customization}</div> 
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">ProcessingTime: {craft.processingTime}</div> 
                    </div>
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Email: {craft.userEmail}</div> 
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Name: {craft.userName}</div> 
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default CraftDetails;