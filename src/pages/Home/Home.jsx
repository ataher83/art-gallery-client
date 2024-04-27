import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import CraftCard from "../CraftCard/CraftCard";


const Home = () => {

    const loadedCrafts = useLoaderData()
    const[crafts, setCrafts] = useState(loadedCrafts) 


    return (
        <div>
            <Helmet>
                <title>The Art Gallery | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="py-16">
            <p className="text-center text-3xl font-semibold  text-purple-600 ">CRAFT ITEMS</p>
            <p className="text-center text-lg     "> Explore the Craft Items Collection, find exclusive something...</p>
                
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        crafts.map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                        crafts={crafts}
                        setCrafts={setCrafts}
                        ></CraftCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;