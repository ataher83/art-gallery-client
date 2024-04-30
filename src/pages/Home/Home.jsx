import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import CraftCard from "../CraftCard/CraftCard";
import OurArtist from "../OurArtist/OurArtist";
import LocationMap from "../LocationMap/LocationMap";

import { Fade, Slide } from "react-awesome-reveal";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";



const Home = () => {

    const loadedCrafts = useLoaderData()
    const[crafts, setCrafts] = useState(loadedCrafts) 


    return (
        <div className="">
            <Helmet>
                <title>The Art Gallery | Home</title>
            </Helmet>
            <Banner></Banner>


            {/* Craft Items Section */}
            <div className="py-16">
                <p className="text-center text-3xl font-semibold  text-purple-600 ">
                    <Slide>
                        <h1>Craft Items</h1>
                    </Slide>
                </p>
                <p className="text-center text-lg font-semibold  ">
                    <Slide>
                        <h1>(Total Craft Items: {crafts.length})</h1>
                    </Slide>
                </p>
                <p className="text-center text-lg hidden md:block"> 
                    <Fade delay={1e3} cascade damping={1e-1}> Explore the Craft Items Collection, find exclusive something... </Fade>
                </p>
                
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
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




            {/* Art & Craft Categories Section */}
            {/* <div className="py-16">
                <p className="text-center text-3xl font-semibold  text-purple-600 ">
                    <Slide>
                        <h1>Art & Craft Categories</h1>
                    </Slide>
                </p>
                <p className="text-center text-lg font-semibold  ">
                    <Slide>
                        <h1>(Total Craft Items: {crafts.length})</h1>
                    </Slide>
                </p>
                <p className="text-center text-lg hidden md:block"> 
                    <Fade delay={1e3} cascade damping={1e-1}> Explore the Craft Items Collection, find exclusive something... </Fade>
                </p>
                
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
                    {
                        crafts.map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                        crafts={crafts}
                        setCrafts={setCrafts}
                        ></CraftCard>)
                    }
                </div>
            </div> */}

            <ArtAndCraftCategories></ArtAndCraftCategories>


            <OurArtist></OurArtist>
            <LocationMap></LocationMap>
            

        </div>
    );
};

export default Home;