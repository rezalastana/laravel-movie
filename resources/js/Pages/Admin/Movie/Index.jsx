import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <Authenticated>
            <Head title="Movie" />
            <PrimaryButton>Create New Movie</PrimaryButton>
        </Authenticated>
    );
}
