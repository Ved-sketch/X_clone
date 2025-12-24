import React from 'react'
import {X} from "lucide-react"

const TodayNews = () => {
  return (
    <div>
        <div className="flex justify-around w-full">
            <div className='flex w-[80%] border border-gray-800 p-1 rounded-full'>
                <div className='font-bold p-2 pl-4 flex-[2]'>
                    Today's News
                </div>

                <button className='flex items-center justify-center p-2 rounded-full hover:bg-slate-800'>
                    <X className='rounded-full'/>
                </button>
            </div>

        </div>
        {/* here will be the mapping  */}
    </div>
  )
}

export default TodayNews;