import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ArtAndCraftCategories = () => {
    const categoryCrafts = useLoaderData()



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
                        categoryCrafts.map(categoryCraft => 
                            <div>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div className="md:flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="rounded-md w-20 lg:w-72 lg:h-40">
                                                <img src={categoryCraft.image} alt="Craft Image" />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold">{(categoryCraft.itemName).slice(0, 20)}</div>
                                            <div className="text-sm opacity-50">{categoryCraft.subcategoryName}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                        {(categoryCraft.shortDescription).slice(0, 60)}
                                        </td>
                                        <td>{categoryCraft.price}<span className="text-base text-slate-500 font-semibold">$</span></td>
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

export default ArtAndCraftCategories;