import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    return (
        <>
            <Authenticated auth={auth}>
                <Head>
                    {/* unpg flickity */}
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard Admin</title>
                </Head>
                {/* link to create new movie */}
                <Link href={route("admin.dashboard.movie.create")}>
                    <PrimaryButton type="button" className="mb-8 w-auto">
                        Create New Movie
                    </PrimaryButton>
                </Link>
                {/* FlashMessage */}
                {flashMessage?.message && (
                    <FlashMessage message="Movie created successfully." />
                )}

                {/* table movies */}
                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <img
                                        src={`/storage/${movie.thumbnail}`}
                                        alt="Movie Thumbnail"
                                        className="w-32 rounded-md"
                                    />
                                </td>
                                <td>{movie.name}</td>
                                <td>{movie.category}</td>
                                <td>{movie.rating.toFixed(1)}</td>
                                <td>
                                    <Link
                                        href={route(
                                            "admin.dashboard.movie.edit",
                                            movie.id,
                                        )}
                                    >
                                        <PrimaryButton
                                            type="button"
                                            variant="warning"
                                        >
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                </td>
                                <td>
                                    <PrimaryButton
                                        type="button"
                                        variant="danger"
                                    >
                                        Delete
                                    </PrimaryButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    );
}
