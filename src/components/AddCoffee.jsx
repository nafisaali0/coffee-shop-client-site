import Swal from 'sweetalert2'
import Navbar from './Navbar';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value
        const taste = form.taste.value
        const photo = form.photo.value
        const quantity = form.quantity.value

        const newCoffeeInfo = { title, taste, quantity, photo, }
        console.log(newCoffeeInfo)


        //send data to the server 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
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
                            <h2>Add New Coffee</h2>
                        </div>
                        <form onSubmit={handleAddCoffee}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full " />
                                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                                <input type="link" name="photo" placeholder="photo URL" className="input input-bordered w-full" />
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


export default AddCoffee;