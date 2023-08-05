import React from "react";

const Contact = () => {
    const handleSendMsg = () => {
        alert("user send msg successfully");

    };
    return (
        <div className="bg-blue-50 py-10">
            <div className='w-full lg:w-[717px] mx-auto text-center'>
        <h3 className='text-green-600 text-2xl leading-6 font-bold mb-5'>Contact<span className='text-indigo-900'>Us</span></h3>
        <hr className='font-bold w-44 mx-auto border-2 border-indigo-900 border-solid'></hr>
    </div>
            <div className="container mx-auto lg:w-9/12 pb-10 ">
             <div className="grid grid-cols-1">
                    <div className="mt-10 lg:mx-0 mx-2">
                        <form className="grid grid-cols-6 gap-6 bg-green-500 p-10 rounded-lg">
                            <div className="col-span-6 md:col-span-3">
                                <input
                                    className="w-full bg-green-50 rounded-rounded-10 py-4 px-6 text-slate-300 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                                    type="text"
                                    name="name"
                                    placeholder='Your Name'
                                />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <input
                                    className="w-full bg-green-50  rounded-rounded-10 py-4 px-6 text-slate-300 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                                    type="email"
                                    name="email"
                                    placeholder='Your Email'
                                />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <input
                                    className="w-full bg-green-50  rounded-rounded-10 py-4 px-6 text-slate-300 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                                    type="text"
                                    name="phone"
                                    placeholder='Your Phone'
                                />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <input
                                    className="w-full bg-green-50  rounded-rounded-10 py-4 px-6 text-slate-300 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                                    type="text"
                                    name="address"
                                    placeholder='Your Address'
                                />
                            </div>
                            <div className="col-span-6">
                                <textarea name="message" rows="4" 
                                className="w-full bg-green-50  rounded-rounded-10 py-4 px-6 text-slate-300 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-span-6">
                                <button
                                    className="block w-full py-4 bg-green-50  text-xl leading-leading-30 font-semibold text-slate-300 rounded-rounded-10"
                                    type="submit"
                                    onClick={handleSendMsg}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
