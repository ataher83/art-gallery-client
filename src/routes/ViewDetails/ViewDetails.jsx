import  { useEffect, useState } from 'react';
import Users from '../../pages/Users/Users';
import AllArtAndCraftItems from '../../pages/AllArtAndCraftItems/AllArtAndCraftItems';
import { Link } from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const ViewDetails = () => {
 
    const [users, setUsers] = useState([])
    const [crafts, setCrafts] = useState([])

    useEffect(()=>{
        fetch('https://art-gallery-server-one.vercel.app/user')
                .then(res => res.json())
                .then(data => setUsers(data))
    }, [])

    useEffect(()=>{
        fetch('https://art-gallery-server-one.vercel.app/craft')
                .then(res => res.json())
                .then(data => setCrafts(data))
    }, [])


    //  fetch('https://art-gallery-server-one.vercel.app/user')
    //         .then(res => res.json())
    //         .then(userData => {
    //             console.log(userData)
    //         })

    // fetch('https://art-gallery-server-one.vercel.app/craft')
    //         .then(res => res.json())
    //         .then(craftData => {
    //             console.log(craftData)
    //         })

            console.log(users)
            console.log(crafts)

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center text-violet-500 py-5'>View Details Information</h1>



            {/* users info  */}
            <div>
                <h1 className='text-xl font-semibold text-center'>Users Information</h1>
                <div>

                    <h2 className='text-base font-medium text-center'>(Total Users: {users.length})</h2>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Logged In</th>
                                {/* <th>Action</th> */}
                            </tr>
                            </thead>
        
                            <tbody>
        
                            {
                                users.map(user => <tr key={user._id}>
                                    {/* <th>1</th> */}
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    {/* <td>
                                        <button 
                                        onClick={()=> handleDelete(user._id)}
                                        className="btn">X</button>
                                    </td> */}
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>



            {/* crafts info  */}
            <div>
                <h1 className='text-xl font-semibold text-center'>Crafts Information</h1>
                <h2 className='text-base font-medium text-center'>(Total Crafts: {crafts.length})</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        crafts.map(craft =>
                            
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
                            
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;