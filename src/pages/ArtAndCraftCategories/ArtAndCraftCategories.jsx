import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

import { useLoaderData } from "react-router-dom"

const ArtAndCraftCategories = () => {

    const categoryCrafts = useLoaderData()
    console.log(categoryCrafts)

    return (
        <div>

            <div>
                <p className="text-center text-3xl font-semibold  text-purple-600   ">
                    <Slide>
                        <h1>Art & Craft Categories</h1>
                    </Slide></p>
                    <p className="text-center text-lg  hidden md:block"> 
                        <Fade delay={1e3} cascade damping={1e-1}> Total Catagories... </Fade>
                    </p>


                {/* my crafts info  */}
                <div>

                   {/* Show All Data */}
                    {/* <div id="all">
                        <h1 className='text-xl font-semibold text-center'>Crafts Information</h1>
                        <h2 className='text-base font-medium text-center'>(My Total Crafts: {categoryCrafts.length})</h2>
                        
                        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                        {
                            categoryCrafts.map(myCraft =>
                        
                                <div className="card bg-base-100 shadow-xl mt-4">

                                    <figure><img className="w-full h-72" src={myCraft.image} alt="Craft Image" />
                                    </figure>

                                    <div className="flex justify-between px-2 pt-1 font-semibold">
                                        <p className="flex items-center"><FcRating className="text-blue-400" /> {myCraft.rating}</p>
                                        <p className="flex items-center"><IoLogoUsd className="text-blue-400" /> {myCraft.price}</p>
                                        <p className="bg-orange-400 rounded  capitalize px-1"><span >{myCraft.stockStatus}</span></p>
                                    </div>

                                    <div className="card-body px-1">
                                        <div className="flex gap-2 items-center justify-center">
                                            
                                            <h2 className=" lg:card-title text-center text-orange-600">
                                                {myCraft.itemName}
                                            
                                            </h2>
                                        </div>
                                            
                                        
                                        <p className="text-center font-normal text-orange-400 pb-2">{myCraft.subcategoryName}</p>
                                            
                                        <p className="text-center pb-2">{myCraft.shortDescription}</p>


                                        <div className="card-actions justify-center items-center">
                                            <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Customization: {myCraft.customization}</div> 
                                            <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">ProcessingTime: {myCraft.processingTime}</div> 
                                        </div>
                                        <div className="card-actions justify-center items-center">
                                            <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Email: {myCraft.userEmail}</div> 
                                            <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Name: {myCraft.userName}</div> 
                                        </div>
                                    </div>

                                    

                                </div>    
                            )
                        }
                        </div>
                    </div> */}

                </div>

            </div>

        </div>
    );
};

export default ArtAndCraftCategories;