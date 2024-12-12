import Banner from "../../Componentes/Banner/Banner";
import HotJobs from "./HotJobs";


const HomePage = () => {
    return (
        <div className="w-11/12 mx-auto">
           <Banner></Banner>
           <HotJobs></HotJobs>
        </div>
    );
};

export default HomePage;