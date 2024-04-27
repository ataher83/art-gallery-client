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

            <h1 className="text-6xl text-purple-600">Total Craft items: {crafts.length}</h1>
            <div className="grid md:grid-cols-2 gap-5">
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
    );
};

export default Home;