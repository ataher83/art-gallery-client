import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AllArtAndCraftItems = () => {

    const crafts = useLoaderData()



    return (
        <div>
            <Helmet>
                <title>The Art Gallery | All Art & Craft Items</title>
            </Helmet>
            


            <p className="text-center text-3xl font-semibold  text-purple-600 ">All Art & Craft Items</p>
            <p className="text-center text-lg px-[10%]  "> There are many types of arts and crafts using lots of different types . There are crafts to do at home for toddlers, kids, and adults.</p>



            <div className="overflow-x-auto">
                <table className="table">

                    {
                        crafts.map(craft => 
                            <div>

                                <tbody>
                                    <tr>
                                        <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="rounded-md w-32 h-auto">
                                                <img src={craft.image} alt="Craft Image" />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold">{(craft.itemName).slice(0, 20)}</div>
                                            <div className="text-sm opacity-50">{craft.subcategoryName}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                        {(craft.shortDescription).slice(0, 60)}
                                        {/* <span className="badge badge-ghost badge-sm">{craft.stockStatus}</span> */}
                                        </td>
                                        <td>{craft.price}<span className="text-base text-slate-500 font-semibold">$</span></td>


                                        {/* <th>
                                           
                                        
                                        <button className="btn btn-secondary ">View Details</button>
                                        
                                        
                                        </th> */}


                                        <th>
                                            <span>
                                                <Link to={`/craftDetails/${craft._id}`}>
                                                <button className="btn btn-secondary ">View Details</button>
                                                </Link>
                                            </span>
                                        </th>

                                    </tr>
                                </tbody>


                                {/* <div className="text-center mt-5">
                                    <Link to={`/craftDetails/${_id}`}><button className="btn btn-secondary w-1/3 ">View Details</button></Link>
                                </div> */}


                                {/* <button className="btn btn-secondary w-1/3 "><Link to={`/craftDetails/${craft._id}`}>View Details</Link></button> */}

                            </div>
                            
                        )
                    }

                   
                    
                </table>
            </div>



        </div>
    );
};

export default AllArtAndCraftItems;