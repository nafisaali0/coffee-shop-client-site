import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, title, taste, quantity, photo } = coffee

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                        }

                    })
            }
        })
    }
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" className='w-full h-[300px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                    <div className='flex'>
                        <p>{taste}</p>
                        <p>{quantity}</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-sm btn-outline btn-success">Details</button>
                        <Link to={`/updatecoffee/${_id}`}>
                            <button className="btn btn-sm btn-outline btn-success">Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-sm btn-outline btn-success">
                            Delete
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.obj,
    coffees:PropTypes.arr,
    setCoffees:PropTypes.arr
};

export default CoffeeCard;