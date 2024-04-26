import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Art Gallery | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;