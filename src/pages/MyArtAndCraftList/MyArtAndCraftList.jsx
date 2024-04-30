import { Helmet } from "react-helmet-async";

import  { useContext, useEffect, useState } from 'react';
import { IoLogoUsd } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";







// import { Link, Outlet, useLoaderData } from "react-router-dom";
// import { getStoredReadList } from "../utility/localstorage";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiMapPinTimeLine } from "react-icons/ri";
// import { RxPerson } from "react-icons/rx";
// import { LuFileSpreadsheet } from "react-icons/lu";












const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext); 

    const [crafts, setCrafts] = useState([])










    // const [customizedCrafts, setCustomizedCrafts] = useState([]); 
    // const [displayCustomizedCrafts, setDisplayCustomizedCrafts] = useState([]); 


    // const handleCustomizedCraftsFilter = filter =>{
    //     if (filter === 'all') {
    //         setDisplayCustomizedCrafts(customizedCrafts);
    //     }
    //     else if (filter === 'Yes') {
    //         const yesCustomized = customizedCrafts.filter(c => c.customization === 'Yes');
    //         setDisplayCustomizedCrafts(yesCustomized);
    //     }
    //     else if (filter === 'No') {
    //         const noCustomized = customizedCrafts.filter(c => c.customization === 'No');
    //         setDisplayCustomizedCrafts(noCustomized);
    //     }
    // }

    // useEffect(() =>{
    //     const storedCustomizedCraftsIds = getStoredReadList();
    //     if (readListBooks.length > 0) {

    //         // const readList = readListBooks.filter(readListBook => storedReadListBooksIds.includes(readListBook.Id))
    //         // const readList = readListBooks.filter(readListBook => storedReadListBooksIds.includes(readListBook.bookId))

    //         const readList = [];
    //         for(const id of storedReadListBooksIds){
    //             const book = readListBooks.find(book => book.bookId === id); // bookId না id হবে?
    //             if (book) {
    //                 readList.push(book)
    //             }
    //         }
    //         setReadBooks(readList);
    //         setDisplayReadBooks(readList);
    //         //console.log()
    //     }
    // }, [readListBooks]) 















    useEffect(()=>{
        fetch('https://art-gallery-server-one.vercel.app/craft')
                .then(res => res.json())
                .then(data => setCrafts(data))
    }, [])

    // console.log(crafts)


    const myCrafts = crafts.filter(craft => craft.userEmail == user.email)
    console.log(myCrafts)

    const yesCustomization = myCrafts.filter( craft => craft.customization === "Yes")
    console.log(yesCustomization)

    const noCustomization = myCrafts.filter( craft => craft.customization === "No")
    console.log(noCustomization)





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


                fetch(`https://art-gallery-server-one.vercel.app/craft/${_id}`, {
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






    const handleShowAll = () => {
        document.getElementById('all').classList.remove("hidden")
        document.getElementById('yes').classList.add("hidden")
        document.getElementById('no').classList.add("hidden")
    }
    const handleShowYes = () => {
        document.getElementById('all').classList.add("hidden")
        document.getElementById('yes').classList.remove("hidden")
        document.getElementById('no').classList.add("hidden")
    }
    const handleShowNo = () => {
        document.getElementById('all').classList.add("hidden")
        document.getElementById('yes').classList.add("hidden")
        document.getElementById('no').classList.remove("hidden")
    }


    



    return (
        <div>
            <Helmet>
                <title>The Art Gallery | My Art & Craft List</title>
            </Helmet>

            <div>
                <h1 className='text-2xl font-semibold text-center text-violet-500 py-5'>My Art & Craft List Information</h1>




                {/* my crafts info  */}
                <div>
                    {/* <h1 className='text-xl font-semibold text-center'>Crafts Information</h1>
                    <h2 className='text-base font-medium text-center'>(Total Crafts: {myCrafts.length})</h2> */}



                    {/* drop-down menu */}
                    <div className="text-center py-5">
                        <div>
                            <details className="dropdown">
                        <summary className="btn bg-primary text-white   ">Filter by Customization<RiArrowDropDownLine className="text-3xl" /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li 
                            onClick={()=> handleShowAll('all')}
                            ><a>All</a></li>
                            <li 
                            onClick={()=> handleShowYes('Yes')}
                            ><a>Yes</a></li>
                            <li 
                            onClick={()=> handleShowNo('No')}
                            ><a>No</a></li>
                        </ul>
                            </details>
                        </div>
                    </div>



                    {/* Show All Data */}
                    <div id="all">
                        <h1 className='text-xl font-semibold text-center'>Crafts Information</h1>
                        <h2 className='text-base font-medium text-center'>(My Total Crafts: {myCrafts.length})</h2>
                        
                        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                        {
                            myCrafts.map(myCraft =>
                        
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

                                    <div className="text-center py-5 space-x-5">

                                        <Link to={`../updateCraft/${myCraft._id}`}>
                                            <button className="btn btn-secondary w-1/3 ">Update</button>
                                        </Link>
                                        
                                        <button
                                        onClick={() => handleDelete(myCraft._id)}
                                        className="btn btn-secondary w-1/3 ">Delete
                                        </button>
                                            
                                    </div>

                                </div>    
                            )
                        }
                        </div>
                    </div>




                    {/* Show Yes Customization Data */}
                    <div id="yes" className="hidden">
                        <h1 className='text-xl font-semibold text-center'>Crafts Information</h1>
                        <h2 className='text-base font-medium text-center'>(Total Customized Crafts: {yesCustomization.length})</h2>
                        <div  className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                        {
                            yesCustomization.map(myCraft =>
                        
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

                                    <div className="text-center py-5 space-x-5">

                                        <Link to={`../updateCraft/${myCraft._id}`}>
                                            <button className="btn btn-secondary w-1/3 ">Update</button>
                                        </Link>
                                        
                                        <button
                                        onClick={() => handleDelete(myCraft._id)}
                                        className="btn btn-secondary w-1/3 ">Delete
                                        </button>
                                            
                                    </div>

                                </div>    
                            )
                        }
                        </div>
                    </div>




                    {/* Show Yes Customization Data */}
                    <div id="no" className="hidden">
                    <h1 className='text-xl font-semibold text-center'>Crafts Information</h1>
                        <h2 className='text-base font-medium text-center'>(Total Non Customized Crafts: {noCustomization.length})</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                    {
                        noCustomization.map(myCraft =>
                    
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

                                <div className="text-center py-5 space-x-5">

                                    <Link to={`../updateCraft/${myCraft._id}`}>
                                        <button className="btn btn-secondary w-1/3 ">Update</button>
                                    </Link>
                                    
                                    <button
                                      onClick={() => handleDelete(myCraft._id)}
                                      className="btn btn-secondary w-1/3 ">Delete
                                     </button>
                                        
                                </div>

                            </div>    
                        )
                    }
                    </div>
                    </div>





                </div>

            </div>

        </div>
    );
};

export default MyArtAndCraftList;