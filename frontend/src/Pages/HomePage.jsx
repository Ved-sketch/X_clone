import logo from "../images/x_logo_background-removed.png"
import {Link} from "react-router"
import { Bell, CircleEllipsis, CircleSlash2, Ellipsis, HouseIcon, Mail, SearchIcon, User, UserPlus, Users } from "lucide-react"

const HomePage = () => {
    return (
        <div className="relative h-full w-full">
            <div className="flex">
                {/* Left Side */}
                <div className="flex-[2] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                    <div className="flex flex-col items-start px-4 gap-2">

                        <div className="flex flex-col items-start px-4 py-5 gap-3">
                            <div className="mb-5">
                                <Link to={"/"} className="btn btn-ghost">
                                    <img src={logo} alt="x_logo" className=" w-15 h-15"/>
                                </Link>
                            </div>

                            <div className="flex flex-col items-start w-full gap-3">
                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <HouseIcon className="w-8 h-8"/>
                                        <span className="text-xl">Home</span>
                                    </Link>
                                </div>
                                
                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <SearchIcon className="w-8 h-8"/>
                                        <span className="text-xl">Explore</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <Bell className="w-8 h-8"/>
                                        <span className="text-xl">Notifications</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <UserPlus className="w-8 h-8"/>
                                        <span className="text-xl">Follow</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <Mail className="w-8 h-8"/>
                                        <span className="text-xl">Chat</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <CircleSlash2 className="w-8 h-8"/>
                                        <span className="text-xl">Grok</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <Users className="w-8 h-8"/>
                                        <span className="text-xl">Communities</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <User className="w-8 h-8"/>
                                        <span className="text-xl">Profile</span>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                        <CircleEllipsis className="w-8 h-8"/>
                                        <span className="text-xl">More</span>
                                    </Link>
                                </div>
                            </div>
                            
                            <button className="bg-white p-3 btn rounded-full btn-ghost w-[90%] h-[90%] justify-center text-black font-bold">
                                Post
                            </button>
                        </div>

                        <div>
                            <button className="btn btn-ghost rounded-full p-4 w-full h-[80%] justify-start hover:bg-slate-800">
                                <div className="flex gap-5 items-center w-full">
                                    <img src="" alt="profile" className="w-8 h-8 rounded-full"/>
                                    <div className="flex-1">
                                        <div className="text-sm">
                                            Name
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Username
                                        </div>
                                    </div>
                                    <div className="">
                                        <Ellipsis/>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
                <div className="flex-[3] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
            </div>
        </div>
    );
}

export default HomePage;