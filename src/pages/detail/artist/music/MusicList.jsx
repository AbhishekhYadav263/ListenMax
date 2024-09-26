import React from 'react'
import { Link } from 'react-router-dom';
import MusicCard from '../../../../components/music/MusicCard';
import musicData from '../../../../constant/musicData';

const MusicList = () => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                Popular
            </h1>
            {/* Music list */}
            <div className="space-y-0">
                {musicData.map((data) => (
                    <MusicCard
                        counter={data.counter}
                        musicImg={data.musicImg}
                        musicName={data.musicName}
                        views={data.views}
                        duration={data.duration} />
                ))}
            </div>

            {/* more */}
            <Link to={"/"} className='px-6 block text-sm text-neutral-400 font-medium hover:text-neutral-200 cursor-default ease-in-out duration-75'>
                See more
            </Link>

            {/* Pick up by artist */}
            <div className="space-y-4">
                <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                    Artist pick
                </h1>

                {/* Music list */}
                <div className="space-y-0">
                    <div className="flex items-start gap-x-3">
                        <img src="./albums/album2.png" alt="" className="w-24 h-24 rounded-md object-cover object-center" />
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-x-1.5">
                                <img src="./albums/album3.png" alt="" className="w-6 h-6 rounded-full object-cover object-center" />
                                <h6 className="text-sm text-neutral-400 font-medium">Posted by Artist Name</h6>
                            </div>
                            <h5 className="text-sm text-neutral-100 font-medium">Time Flies</h5>
                            <p className="text-sm text-neutral-400 font-normal">From Memories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicList