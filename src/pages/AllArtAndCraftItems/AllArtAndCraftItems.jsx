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
                                        <div className="md:flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="rounded-md w-20 lg:w-72 lg:h-40">
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
                                        </td>
                                        <td>{craft.price}<span className="text-base text-slate-500 font-semibold">$</span></td>
                                        <th>
                                            <span>
                                                <Link to="/viewDetails">
                                                <button className="btn btn-secondary ">View Details</button>
                                                </Link>
                                            </span>

                                        </th>
                                    </tr>
                                </tbody>
                            </div>
                            
                        )
                    }

                   
                    
                </table>
            </div>



        </div>
    );
};

export default AllArtAndCraftItems;