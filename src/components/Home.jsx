import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(loadCoffee)

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto">
                <h1 className='text-center text-3xl font-bold my-12'>Our Popular Products</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
                    {
                        coffees.map(coffee =>
                            <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                coffees={coffees}
                                setCoffees={setCoffees}
                            >
                            </CoffeeCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;