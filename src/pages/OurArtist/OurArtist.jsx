import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurArtist = () => {
    return (
        <div className="flex gap-5">
            <Helmet>
                <title>The Art Gallery | Our Artists</title>
            </Helmet>

            <div className="py-16">
                <p className="text-center text-3xl font-semibold   animate__animated animate__bounceInLeft">Our Artists</p>
                <p className="text-center animate__animated animate__bounceIn ">Meet our professional Artists, who will help you find your dream </p>
                


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-34 rounded-full items-center text-center ">
                                <img src="https://i.postimg.cc/QFJH5tHb/agent-1.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Vincent Fuller</h2>
                            <p>PAINTER, SCULPTOR, CONCEPTUAL ARTIST</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-34 rounded-full items-center text-center ">
                                <img src="https://i.postimg.cc/2qj3xDWf/agent-2.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Brittany Watkins</h2>
                            <p> OIL PAINTER, SCULPTOR, CARTOON DESIGNER</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-34 rounded-full items-center text-center ">
                                <img src="https://i.postimg.cc/Y4X0nsNL/agent-3.jpg" />
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