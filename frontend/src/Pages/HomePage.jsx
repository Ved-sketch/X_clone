import {Link} from "react-router"
import LeftPanel from "../Components/LeftPanel"
import RightPanel from "../Components/RightPanel";
import NewPost from "../Components/NewPost";

const HomePage = () => {
    

    return (
        <div className="relative h-full w-full">
            <div className="flex">
                {/* Left Side */}
                <LeftPanel/>

                <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                    <div className=" flex font-bold">
                        <div className="flex-1 border border-black border-b-gray-800 p-4 text-center hover:bg-gray-800 bg-transparent">
                            <Link to={"/home"}>For you</Link>
                        </div>
                        <div className="flex-1 border border-black border-b-gray-800 p-4 text-center hover:bg-gray-800 bg-transparent   ">
                            <Link to={"/home/following"}>Following</Link>
                        </div>
                    </div>

                    <NewPost/>
                </div>
                
                {/*Right side */}
                <RightPanel/>
            </div>
        </div>
    );
}

export default HomePage;