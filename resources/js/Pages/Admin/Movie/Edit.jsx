import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        // ambil data semua dari movie menggunakan spread syntax
        ...movie,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            // jika target type file maka ambil file dengan files[0], jika bukan maka ambil value
            e.target.type === "file" ? e.target.files[0] : e.target.value,
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail == movie.thumbnail) {
            // jika terdapat data baru, maka data lama dihapus
            delete data.thumbnail;
        }

        // return post store
        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />

            <h1 clasname="text-xl">
                Update Movie: <strong>{movie.name}</strong>
            </h1>
            <hr className="mb-4"></hr>

            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    {/* name */}
                    <div>
                        <InputLabel htmlFor="name" value="Movie Name" />
                        <TextInput
                            type="text"
                            name="name"
                            variant="primary-outline"
                            defaultValue={movie.name}
                            onChange={onHandleChange}
                            placeholder="Movie Name"
                            isError={errors.name}
                            required
                        />
                        <InputError message={errors.name} className="mt-1" />
                    </div>
                    {/* category */}
                    <div>
                        <InputLabel htmlFor="category" value="Category" />
                        <TextInput
                            type="text"
                            name="category"
                            variant="primary-outline"
                            defaultValue={movie.category}
                            onChange={onHandleChange}
                            placeholder="Category"
                            isError={errors.category}
                            required
                        />
                        <InputError
                            message={errors.category}
                            className="mt-1"
                        />
                    </div>
                    {/* video_url */}
                    <div>
                        <InputLabel htmlFor="video_url" value="URL Video" />
                        <TextInput
                            type="url"
                            name="video_url"
                            variant="primary-outline"
                            defaultValue={movie.video_url}
                            onChange={onHandleChange}
                            placeholder="Link Video"
                            isError={errors.video_url}
                            required
                        />
                        <InputError
                            message={errors.video_url}
                            className="mt-1"
                        />
                    </div>
                    {/* thumbnail */}
                    {/* tampilkan gambar sebelumnya */}
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        alt=""
                        className="w-40 rounded-md border-2 border-black"
                    />
                    <div>
                        <InputLabel htmlFor="thumbnail" value="Thumbnail" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            onChange={onHandleChange}
                            placeholder="Insert Thumbnail Movie"
                            isError={errors.thumbnail}
                        />
                        <InputError
                            message={errors.thumbnail}
                            className="mt-1"
                        />
                    </div>
                    {/* rating */}
                    <div>
                        <InputLabel htmlFor="rating" value="Rating" />
                        <TextInput
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            defaultValue={movie.rating}
                            onChange={onHandleChange}
                            placeholder="Rating"
                            isError={errors.rating}
                            required
                        />
                        <InputError message={errors.rating} className="mt-1" />
                    </div>
                    {/* checkbox is_featured */}
                    <div className="flex flex-row gap-2 items-center">
                        <InputLabel htmlFor="is_featured" value="Is Featured" />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                            checked={movie.is_featured}
                        />
                    </div>

                    {/* SAVE BUTTON */}
                    <PrimaryButton
                        type="submit"
                        className="mt-4"
                        variant="primary"
                        processing={processing}
                    >
                        Save
                    </PrimaryButton>
                </div>
            </form>
        </Authenticated>
    );
}
