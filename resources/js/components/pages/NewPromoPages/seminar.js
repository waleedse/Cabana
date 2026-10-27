import React, { useState } from 'react';
import "./components/newPromoPage.css"
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';

const SeminarFinantialFitness = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { errors, values, touched, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            message: '',
        },
        onSubmit: async (values) => {
            setIsSubmitting(true);
            try {
                const response = await axios.post('/api/seminar-registration', values);
                if (response.data.status === 200) {
                    toast.success(response.data.message);
                    // Reset form
                    Object.keys(values).forEach(key => setFieldValue(key, ''));
                } else {
                    toast.error('An error occurred. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error('An error occurred. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Name field is required';
            }

            if (!values.email) {
                errors.email = 'Email field is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.phone) {
                errors.phone = 'Phone field is required';
            }

            if (!values.date) {
                errors.date = 'Please select a seminar date';
            }

            return errors;
        },
    });

    return (
        <div>
            <div>
                <img onClick={() => { window.open('https://secure.cabanacapitals.com/pages/47/', '_blank') }} className='mobileMargin' style={{ width: '100%', cursor: 'pointer' }} src='/assets/images/seminar/TopImage.jpg'></img>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <a href='#speakers' className='col-md-4'>
                        <img style={{ width: '100%', height: '90%' }} src='/assets/images/seminar/Speakers.png'></img>
                    </a>
                    <a href='#why' className='col-md-4'>
                        <img style={{ width: '100%', height: '90%' }} src='/assets/images/seminar/Why.png'></img>
                    </a>
                    <a href='#agenda' className='col-md-4'>
                        <img style={{ width: '100%', height: '90%' }} src='/assets/images/seminar/Agenda.png'></img>
                    </a>
                </div>
            </div>
            <div style={{ backgroundImage: 'url(/assets/images/seminar/Register.jpg)', padding: '20px' }} className='mt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 text-light'>
                            <h1 className='title text-light text-bolder'>Lagos Seminar
                            </h1>
                            <h3> Friday 18.10.2024 &
                                Saturday 19.10.2024
                                Aurum Markets Lagos Office

                            </h3>
                            <h1>10 : 30 am <br />    <span className='text-center ml-5' >to</span>

                                <br />
                                12
                                : 30 am</h1>
                            <h3> 4th floor. 103 Mosesola House, Allen Avenue,
                                Ikeja Lagos</h3>
                        </div>
                        <div className='col-md-6 p-4 '>
                            <div className='card p-3'>
                                <div className='card-body'>
                                    <form onSubmit={handleSubmit} className='form' style={{ minWidth: '0' }}>
                                        <h1 className="title text-center mb-4">Reserve your spot today! </h1>
                                        <div className="form-group position-relative">
                                            <input onChange={handleChange} value={values.name} type="text" id="formName" name='name' className="form-control form-control-lg thick" placeholder="Name" />
                                            {touched.name && errors.name && <p className='text-danger mt-2'>{errors.name}</p>}
                                        </div>
                                        <div className="form-group position-relative">
                                            <input type="email" onChange={handleChange} value={values.email} name='email' id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail" />
                                            {touched.email && errors.email && <p className='text-danger mt-2'>{errors.email}</p>}
                                        </div>
                                        <div className="form-group position-relative">
                                            <select
                                                onChange={handleChange}
                                                value={values.date}
                                                name='date'
                                                id="formSeminarDate"
                                                className="form-control form-control-lg thick"
                                            >
                                                <option value="">Select a seminar date</option>
                                                <option value="2024-10-18">Friday, 18 October 2024</option>
                                                <option value="2024-10-19">Saturday, 19 October 2024</option>
                                            </select>
                                            {touched.date && errors.date && <p className='text-danger mt-2'>{errors.date}</p>}
                                        </div>
                                        <div className="form-group position-relative">
                                            <input type="tel" onChange={handleChange} value={values.phone} name='phone' id="formPhone" className="form-control form-control-lg thick" placeholder="Phone" />
                                            {touched.phone && errors.phone && <p className='text-danger mt-2'>{errors.phone}</p>}
                                        </div>
                                        <div className="form-group message">
                                            <textarea id="formMessage" onChange={handleChange} name='message' value={values.message} className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
                                        </div>
                                        <div>
                                            <input type='checkbox' required /> <span>I hereby consent to the collection, processing, and use of my personal
                                                data by Aurum Markets for marketing purposes in accordance with
                                                the privacy policy.</span>
                                        </div>
                                        <div className="text-center mt-2">
                                            <button type="submit" className="btn btnSubmitContactUs" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Send message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="speakers" className='container mt-5'>
                <h1 className='text-center'>Panel of <span className='title text-bold' style={{ color: '#500d55' }}>Speakers</span></h1>
                <div className='col-md-12 mt-5 card'>
                    <img style={{ width: '100%' }} src='/assets/images/seminar/speaker1.png'></img>
                </div>
                <div className='col-md-12 mt-4 card'>
                    <img style={{ width: '100%' }} src='/assets/images/seminar/speaker2.png'></img>
                </div>
            </div>

            <img id="why" style={{ width: '100%' }} src='/assets/images/seminar/agendabanner.png'></img>

            <div id="agenda" className='text-center'>
                <h1 className='text-center mt-5'>Agenda</h1>

                <img className='text-center mt-4 mb-5' style={{ width: '70%' }} src='/assets/images/seminar/AgendaDetails2.png'></img>
            </div>



        </div >
    );
};

export default SeminarFinantialFitness;
