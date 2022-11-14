import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { register, reset } from "../features/auth/authSlice";
import {
    createCustomers,
    reset,
} from "../../../../features/customer/customerSlice";
import Spinner from "../../../../components/common/Spinner";

const initailFormValue = {
    email: "",
    password: "",
    role: "Import",
    firstname: "",
    lastname: "",
    phone: "",
    citizen: "",
    addressNo: "",
    province: "",
    district: "",
    subdistrict: "",
    postcode: "",
    dob: "",
};

const CreateCustomer = () => {
    const [formData, setFormData] = useState(initailFormValue);
    const {
        email,
        password,
        firstname,
        lastname,
        phone,
        citizen,
        addressNo,
        province,
        district,
        subdistrict,
        postcode,
        dob,
    } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin } = useSelector((state) => state.admin);
    const { customer, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.customer // Change this line
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (!admin) {
            navigate("/admin/signin");
        }

        if (isSuccess) {
            dispatch(reset());
            navigate("/admin/users/customers/");
        }

        // Check for account
        return () => {
            dispatch(reset());
        };
    }, [admin, customer, isError, isSuccess, navigate, message, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            !email ||
            !password ||
            !firstname ||
            !lastname ||
            !phone ||
            !citizen ||
            !addressNo ||
            !province ||
            !district ||
            !subdistrict ||
            !postcode ||
            !dob
        ) {
            toast.error("Make sure your input all fields");
        } else {
            const customerData = {
                email,
                password,
                firstname,
                lastname,
                phone,
                citizen,
                addressNo,
                province,
                district,
                subdistrict,
                postcode,
                // dob: new Date(dob),
                dob,
            };
            dispatch(createCustomers(customerData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="space-y-6 flex flex-col container h-[calc(100vh-104px)] mx-auto">
                <div className="space-y-6 flex flex-col mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Create a customers
                    </h1>
                </div>

                <div className="">
                    <form className="space-y-8 text-xl" onSubmit={onSubmit}>
                        <div className="flex-col space-y-8 md:space-y-0 md:flex-row md:flex">
                            <div className="space-y-8 md:w-1/2">
                                {/* Email */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="email"
                                        className="basis-1/4"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer email"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* Password */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="password"
                                        className="basis-1/4"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer password"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Firstname */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="firstname"
                                        className="basis-1/4"
                                    >
                                        Firstname
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={firstname}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer firstname"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* Lastname */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="lastname"
                                        className="basis-1/4"
                                    >
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={lastname}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer lastname"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* Phone */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="phone"
                                        className="basis-1/4"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer phone number"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* Citizen */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="citizen"
                                        className="basis-1/4"
                                    >
                                        Citizen
                                    </label>
                                    <input
                                        type="number"
                                        id="citizen"
                                        name="citizen"
                                        value={citizen}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer citizen number"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8 md:w-1/2">
                                {/* addressNo */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="addressNo"
                                        className="basis-1/4"
                                    >
                                        Add No.
                                    </label>
                                    <input
                                        type="text"
                                        id="addressNo"
                                        name="addressNo"
                                        value={addressNo}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer address number"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* province */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="province"
                                        className="basis-1/4"
                                    >
                                        Province
                                    </label>
                                    <input
                                        type="text"
                                        id="province"
                                        name="province"
                                        value={province}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer province"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* district */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="district"
                                        className="basis-1/4"
                                    >
                                        District
                                    </label>
                                    <input
                                        type="text"
                                        id="district"
                                        name="district"
                                        value={district}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer district"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* subdistrict */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="subdistrict"
                                        className="basis-1/4"
                                    >
                                        Sub District
                                    </label>
                                    <input
                                        type="text"
                                        id="subdistrict"
                                        name="subdistrict"
                                        value={subdistrict}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer subdistrict"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* postcode */}
                                <div className="space-x-2 flex">
                                    <label
                                        htmlFor="postcode"
                                        className="basis-1/4"
                                    >
                                        Postcode
                                    </label>
                                    <input
                                        type="number"
                                        id="postcode"
                                        name="postcode"
                                        value={postcode}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter customer postcode"
                                        onChange={onChange}
                                    />
                                </div>
                                {/* dob */}
                                <div className="space-x-2 flex">
                                    <label htmlFor="dob" className="basis-1/4">
                                        Date of birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={dob}
                                        className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="border-brightRed border-2  rounded-full p-2 px-6 text-brightRed hover:bg-brightRed hover:text-white duration-75"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default CreateCustomer;
