import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="bg-gray-700 text-white text-xl p-5 flex justify-between ">
                    <div>
                        The Coffee Shop
                    </div>
                    <div className="flex gap-5 ">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/addcoffee">Add Coffee</NavLink>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;