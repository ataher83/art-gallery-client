import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allArtAndCraftItems">All Art & Craft Items</NavLink></li>
    <li><NavLink to="/addCraftItem">Add Craft Item</NavLink></li>
    <li><NavLink to="/myArtAndCraftList">My Art & Craft List</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
</>

    return (
        <div className="navbar bg-base-100 font-medium">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[10] p-2 shadow bg-base-100 rounded-box w-52 ">
                    
                    {navLinks}

                </ul>
                </div>
                <a className="text-3xl font-bold " href="/">The Art Gallery</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                    {navLinks}

                </ul>
            </div>
            {/* <div className="navbar-end">
                {
                    user?

                        <div >
                            <span>{user.email}</span>
                            <div className="flex gap-3">
                                
                                
                                <div className="avatar  tooltip" data-tip={user.displayName} >
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                        
                                    </div>
                                </div>
                                
                                <div>
                                    <button onClick={handleSignOut}
                                    className="btn">Sign Out</button>
                                </div>
                            </div>
                        </div>
                        
                        :
                        <Link to="/login">
                        <button className="btn">Login</button>
                        </Link>
                }
            </div> */}
        </div>
    );
};

export default Navbar;