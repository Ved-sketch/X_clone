import logo from "../src/images/x_logo_background-removed.png"
import {Link} from "react-router"

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="flex">
        <div className="flex-[3] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">

          <div className="absolute">
            <div className="m-5">
              <div >
                <Link to={"/"} className="btn btn-ghost mb-6">
                  <img src={logo} alt="x_logo" className=" w-15 h-15"/>
                </Link>
              </div>
            </div>

            
          </div>
        </div>

        <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
        <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
      </div>
    </div>
  )
}

export default App