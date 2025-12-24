import TodayNews from "./TodayNews";

const RightPanel = () =>{
    return(
        <div className="flex-[3] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800 sticky top-0">
            <div className="flex flex-col items-start px-10 py-5">
                <div className="w-full mt-2">
                    <input id="search" type="text" placeholder="Search"
                    className="w-full h-12 rounded-full bg-black border border-gray-800 
                    focus:border-[#1D9BF0] focus:outline-none text-white placeholder:text-gray-500 px-4">
                    </input>
                </div>
            </div>

            <div>
                <TodayNews/>
            </div>

        </div>
    );
}

export default RightPanel;