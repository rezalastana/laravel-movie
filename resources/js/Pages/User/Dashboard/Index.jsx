import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import Moviecard from "@/Components/MovieCard";

// props featuredMovies dan movies berasal dari backend DashboardController
// dan auth didapatkan dari middleware laravel, bisa dilihat dalam web route (global variable)
export default function Dashboard({ auth, featuredMovies, movies }) {
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
            <Authenticated auth={auth}>
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
                        {/* karena featuredMovies sudah bernilai array, maka tidak perlu menggunakan [] */}
                        {featuredMovies.map((featuredMovie) => (
                            <FeaturedMovie
                                key={featuredMovie.id}
                                name={featuredMovie.name}
                                slug={featuredMovie.slug}
                                category={featuredMovie.category}
                                thumbnail={featuredMovie.thumbnail}
                                // thumbnail={`images/featured-${
                                //     ((featuredMovie - 1) % 3) + 1
                                // }.png`}
                                rating={featuredMovie.rating}
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
                        {movies.map((movie) => (
                            <Moviecard
                                key={movie.id}
                                slug={movie.slug}
                                name={movie.name}
                                category={movie.category}
                                thumbnail={movie.thumbnail}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
