import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="bg-gray-700 text-white text-xl p-5 flex justify-between ">
                    <div>
                        The Coffee Shop
                    </div>
                    <NavLink to="/addcoffee">Add Coffee</NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;