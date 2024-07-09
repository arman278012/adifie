import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leads = ({type, typeID}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        description: '',
        type: type,
        typeID: typeID,
    });

    const [submit, setSubmit] = useState(false);
    const [postLeadsData, setPostLeadsData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };

    useEffect(() => {
        const postLeads = async () => {
            try {
                const response = await axios.post('https://api.assetorix.com:5500/adifie/lead', formData,
                    {
                        headers: {
                            authorization: localStorage.getItem('authorization'),
                            id: localStorage.getItem('id')
                        }
                    }
                );
                setPostLeadsData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (submit) {
            postLeads();
            setSubmit(false);
        }
    }, [submit, formData]);

    return (
        <div className='mt-5 bg-white shadow-lg w-full p-5 flex flex-col gap-4 sm:w-[100%] rounded-md'>
            <form onSubmit={handleSubmit}>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold'>Name</p>
                    <input
                        type="text"
                        placeholder='Your name'
                        className='border w-full sm:h-[40px] px-3 rounded-md'
                        onChange={handleChange}
                        value={formData.name}
                        name='name'
                    />
                </div>

                <div className='flex flex-col gap-1 mt-3'>
                    <p className='font-bold'>Email</p>
                    <input
                        type="email"
                        placeholder='Your email'
                        className='border w-full sm:h-[40px] px-3 rounded-md'
                        onChange={handleChange}
                        value={formData.email}
                        name='email'
                    />
                </div>

                <div className='flex flex-col gap-1 mt-3'>
                    <p className='font-bold'>Mobile</p>
                    <input
                        type="text"
                        placeholder='Your mobile'
                        className='border w-full sm:h-[40px] px-3 rounded-md'
                        onChange={handleChange}
                        value={formData.mobile}
                        name='mobile'
                    />
                </div>

                <div className='flex flex-col gap-1 mt-3'>
                    <p className='font-bold'>Description</p>
                    <textarea
                        type="text"
                        placeholder='Description'
                        className='border w-full px-3 py-3 rounded-md'
                        onChange={handleChange}
                        value={formData.description}
                        name='description'
                    />
                </div>

                <div className='mt-2'>
                    <button
                        type='submit'
                        className='w-full rounded-md bg-[#dc2626] hover:bg-[#972f2f] flex justify-center items-center p-3 font-bold text-white'
                    >
                        Send
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Leads;
