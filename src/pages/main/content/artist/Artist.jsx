
import Tag from '../../../../components/tag/Tag'
import ArtistCard from '../../../../components/artist/ArtistCard'

const Artist = () => {
    return (
        <div className='w-full space-y-4'>
            {/* tag */}
            <Tag title="Popular artists" link={"/"} />

            {/* Artist list */}
            <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
                <ArtistCard artistImg={"./artists/pritam.jpg"} artistName="Pritam" artistTag="Artist" />
                <ArtistCard artistImg={"./artists/ar.jfif"} artistName="A.R. Rahman" artistTag="Artist" />
                <ArtistCard artistImg={"./artists/sachin.jfif"} artistName="Sachin-Jigar" artistTag="Artist" />
                <ArtistCard artistImg={"./artists/atif.jfif"} artistName="Atif Aslam" artistTag="Artist" />
                <ArtistCard artistImg={"./artists/sonu.jfif"} artistName="Sonu Nigam" artistTag="Artist" />
            </div>
        </div>
    )
}

export default Artist