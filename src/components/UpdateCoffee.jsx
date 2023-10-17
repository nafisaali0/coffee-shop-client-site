import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";
import Navbar from './Navbar';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, title, taste, quantity, photo } = coffee

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value
        const taste = form.taste.value
        const photo = form.photo.value
        const quantity = form.quantity.value

        const updateCoffeeInfo = { title, taste, quantity, photo, }
        console.log(updateCoffeeInfo)

        //update data and send it server
        Swal.fire({
            title: 'Are you sure?',
            text: "Update this coffee!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCoffeeInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your coffee has been Updated.',
                                'success'
                            )
                        }

                    })
            }
        })
    }


    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <div className="container mx-auto mt-16  bg-[#F4F3F0]">
                    <div className="p-10">
                        <div className="text-center text-2xl font-bold my-7">
                            <h2>Update Coffee</h2>
                        </div>
                        <form onSubmit={handleUpdateCoffee}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <input type="text" name="title" placeholder="title" defaultValue={title} className="input input-bordered w-full" />
                                <input type="text" name="taste" placeholder="taste" defaultValue={taste} className="input input-bordered w-full " />
                                <input type="number" name="quantity" placeholder="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                                <input type="link" name="photo" placeholder="photo" defaultValue={photo} className="input input-bordered w-full" />
                            </div>
                            <div className="my-5 ">
                                <input type="submit" value="Submit" className="btn btn-block bg-[#D2B48C]" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

// UpdateCoffee.propTypes = {

// };

export default UpdateCoffee;