import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage }) {
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
            </Authenticated>
        </>
    );
}
