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
                    {/* unpg flickity */}
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
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
                {/* Browse */}
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity options={flickityOptions}>
                        {/* Movies  */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                className="absolute group overflow-hidden mr-[30px]"
                                key={i}
                            >
                                <img
                                    src="/images/browse-1.png"
                                    className="object-cover rounded-[30px] h-[340px] w-[250px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                                    <div className="px-7 pb-7">
                                        <div className="font-medium text-xl text-white">
                                            Meong Golden
                                        </div>
                                        <p className="mb-0 text-gray-300 text-base mt-[10px]">
                                            Horror • Love
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500"
                                >
                                    <img
                                        src="/icons/ic_play.svg"
                                        className=""
                                        width="50"
                                        alt=""
                                    />
                                </div>
                                <a
                                    href="watching.html"
                                    className="inset-0 absolute z-50"
                                ></a>
                            </div>
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
