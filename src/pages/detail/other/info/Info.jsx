
import { FaSpotify } from 'react-icons/fa6'

const Info = () => {
    return (
        <div className='w-full h-auto flex items-center flex-wrap gap-x-7 gap-y-6 md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4'>
            <img src="./albums/album2.png" alt="" className="md:w-52 w-full md:aspect-square aspect-video rounded-md object-cover object-center shadow-xl" />
            <div className="space-y-2">
                <p className="text-sm text-neutral-100">Playlist</p>
                <h1 className="md:text-8xl sm:text-6xl text-4xl font-black text-neutral-50 tracking-tight !mb-4">Popular Radio</h1>
                <p className="text-sm text-neutral-300">With Pritam, Arijit Singh, Atif Aslam and more</p>
                <div className="flex items-center gap-x-2 flex-wrap gap-y-2">
                    <div className="flex items-center gap-x-1.5">
                        <FaSpotify className='text-green-400 w-6 h-6' />
                        <p className="text-sm text-neutral-100 tracking-tight font-medium">ListenMax</p>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-100"></div>
                    <p className="text-sm text-neutral-100">158,782 saves</p>
                    <div className="w-1 h-1 rounded-full bg-neutral-100"></div>
                    <p className="text-sm text-neutral-100">
                        50 songs, <span className="text-neutral-300">about 5 hr 33 min</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info