import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const OurArtist = () => {
    return (
        <div className="flex gap-5  container mx-auto">
            

            <div className="py-16 container mx-auto ">
                <p className="text-center text-3xl font-semibold  text-purple-600   ">
                    <Slide>
                        <h1>Our Artists</h1>
                    </Slide></p>
                    <p className="text-center text-lg  hidden md:block"> 
                        <Fade delay={1e3} cascade damping={1e-1}> Meet our professional Artists, who will help you find your dream... </Fade>
                    </p>
                


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pl-0 md:pl-0   container mx-auto">

                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-72 rounded-lg  items-center text-center ">
                                <img src="https://i.postimg.cc/8F35sF3s/artist1.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Brittany Watkins</h2>
                            <p>PAINTER, SCULPTOR, CONCEPTUAL ARTIST</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-72 rounded-lg items-center text-center ">
                                <img src="https://i.postimg.cc/XGCv5jSL/artist-2.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Vincent Fuller</h2>
                            <p> OIL PAINTER, SCULPTOR, CARTOON DESIGNER</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>


                    <div className="card :w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-72 rounded-lg  items-center text-center ">
                                <img src="https://i.postimg.cc/SXjRyLgw/artist-3.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Michelle Ramirez</h2>
                            <p>PENCIL SKETCH ARTIST, SCULPTOR, CONCEPTUAL ARTIST</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurArtist;