import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";

export default function Dashboard() {
    const flickityOptions = {
        // initialIndex: 2,
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <Authenticated>
                <Head>
                    <title>Dashboard</title>
                    {/* unpg flickity */}
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Head>
                {/* children dari authenticated akan di isii disini */}
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity
                        // className="gap-[30px] carousel"
                        className={"carousel gap-[30px]"} // default ''
                        elementType={"div"} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        {/* MOVIE */}
                        {[1, 2, 3, 4].map((i) => (
                            <FeaturedMovie
                                key={i}
                                name={`The Batman In Love ${i}`}
                                category="Action"
                                slug={`the-batman-in-love-${i}`}
                                thumbnail="https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
                                rating={4.5}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
