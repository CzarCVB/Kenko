import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className='container'>
      <div className='flex justify-evenly'>
        <div className='card bg-light mb-3 col-4 shadow-md'>
          <div className='card-header'>
            <div className='flex justify-between'>
              <span className='font-bold' style={{ fontSize: "larger" }}>
                Appointments
              </span>
              <AiOutlineCalendar
                style={{ fontSize: "larger", marginTop: "0.3rem" }}
              />
            </div>
          </div>
          <div className='card-body bg-white'>
            <div className='flex mb-2'>
              <FaUserMd className='h-9 w-8' />
              <div className='ml-2'>
                <h4 className='card-title'>Dr. Atul Chauhan</h4>
                <h6 className='card-subtitle mb-2 text-muted'>Gynecologist</h6>
              </div>
            </div>
            <div className='flex justify-around mb-2'>
              <div className='max-w-[50%]'>
                <div className='mb-5'>
                  <h6 className='card-subtitle text-muted'>Date</h6>
                  <p>Friday 17 May, 2020</p>
                </div>
                <div>
                  <h6 className='card-subtitle text-muted'>Address</h6>
                  <p>Suite 405, Level 4/188 Edward St, Sydney NSW</p>
                </div>
              </div>
              <div className='max-w-[50%]'>
                <div className='mb-5'>
                  <h6 className='card-subtitle text-muted'>Time</h6>
                  <p>9:30am - 10:00am</p>
                </div>
                <div>
                  <h6 className='card-subtitle text-muted'>
                    Areas of Interest
                  </h6>
                  <p>Mental Health</p>
                  <p>Travel medicine</p>
                  <p>Travel advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card text-bg-light mb-3 ml-5 col-7 shadow-md'>
          <div className='card-header'>
            <span className='font-bold' style={{ fontSize: "larger" }}>
              Updates
            </span>
          </div>
          <div className='card-body bg-white'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <div className='flex'>
                  <div className='me-2 col-3'>
                    <span></span>Dr. Atul Chauchan
                  </div>
                  <p className='col-9'>
                    Dr. Atul Chauchan added two new conditions to your health
                    record on 09 May regarding your symptoms
                  </p>
                </div>
              </li>
              <li className='list-group-item'>
                <div className='flex'>
                  <div className='me-2 col-3'>
                    <span></span>Dr. Chaitanya Vishnu Bhatt
                  </div>
                  <p className='col-9'>
                    Dr. Chaitanya Vishnu Bhatt updated the prescription of
                    Alfuzosin from 8mg to 10mg
                  </p>
                </div>
              </li>
              <li className='list-group-item'>
                <div className='flex'>
                  <div className='me-2 col-3'>
                    <span></span>Dr. Atul Chauchan
                  </div>
                  <p className='col-9'>
                    Dr. Atul Chauchan added two new conditions to your health
                    record on 09 May regarding your symptoms
                  </p>
                </div>
              </li>
              <li className='list-group-item'>
                <div className='flex'>
                  <div className='me-2 col-3'>
                    <span></span>Dr. Chaitanya Vishnu Bhatt
                  </div>
                  <p className='col-9'>
                    Dr. Chaitanya Vishnu Bhatt updated the prescription of
                    Alfuzosin from 8mg to 10mg
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='col-4'>
          <h4 style={{ fontSize: "larger" }}>Medications</h4>
          <div className='card me-3 my-2 shadow-md'>
            <div className='card-body'>
              <h5 className='card-title'>Fenofibrate (48mg)</h5>
              <p className='card-text'>Take with food every morning.</p>
              <p className='text-blue-600 mt-1'>Last Refil 27 Apr, 2020</p>
            </div>
          </div>
          <div className='card me-3 my-2 shadow-md'>
            <div className='card-body'>
              <h5 className='card-title'>Alfuzosin (10mg)</h5>
              <p className='card-text'>
                Take 1 with food twice a day, and avoid drinking alcohol for 2
                hours after.
              </p>
              <p className='text-blue-600 mt-1'>Last Refil 27 Apr, 2020</p>
            </div>
          </div>
          <div className='card me-3 my-2 shadow-md'>
            <div className='card-body'>
              <h5 className='card-titlNamee'>Dexamethasone (4mg)</h5>
              <p className='card-text'>
                Take 3 tablets, 3 times a day for 7 days.
              </p>
              <p className='text-blue-600 mt-1'>Last Refil 27 Apr, 2020</p>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <h4 style={{ fontSize: "larger" }}>Current Conditions</h4>
          <div className='card me-3 my-2 shadow-md'>
            <div className='card-body'>
              <span
                className='badge text-bg-warning'
                style={{ fontSize: "1rem", height: "2rem" }}>
                Moderate
              </span>
              <h5 className='card-title mt-1' style={{ fontSize: "2.4rem" }}>
                Sinusitis
              </h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                A condition in which the cavity around the nasal passage become
                inflamed
              </h6>
              <div className='flex mt-2'>
                <div className='col-6 me-2'>
                  <h6 className='text-muted'>Primary</h6>
                  <p>Dr. Chaitanya Vishnu Bhatt</p>
                </div>
                <div className='col-6'>
                  <h6 className='text-muted'>Last Seen</h6>
                  <p>05 March, 2020</p>
                </div>
              </div>
              <div className='flex mt-2'>
                <div className='col-6 me-2'>
                  <h6 className='text-muted'>Treatment</h6>
                  <p>Nasonex Aerosol</p>
                  <p className='text-muted'>Mometasone furate 50mcg/spray</p>
                </div>
                <div className='col-6'>
                  <h6 className='text-muted'>Next Appointment</h6>
                  <button
                    type='button'
                    className='bg-teal-400 text-white p-2 rounded mt-2'>
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <h4 style={{ fontSize: "larger" }}>Recent Bills</h4>
          <div className='card me-3 my-2 shadow-md'>
            <div className='card-body'>
              <div className='flex mt-2'>
                <div className='col-6 me-2'>
                  <h6 className='text-muted'>Your Payment</h6>
                  <p style={{ fontSize: "2rem" }}>$110</p>
                </div>
                <div className='col-6'>
                  <h6 className='text-muted'>Medicare</h6>
                  <p style={{ fontSize: "1.4rem" }}>$124</p>
                </div>
              </div>
              <div className='flex mt-2'>
                <div className='col-6 me-2'>
                  <h6 className='text-muted'>
                    Paid on <p>27 april,</p> 2020 to Dorian Med pvt Ltd
                  </h6>
                </div>
                <div className='col-6'>
                  <h6 className='text-muted'>Total</h6>
                  <p style={{ fontSize: "1.4rem" }}>$234</p>
                </div>
              </div>
              <div className='me-2 mt-3'>
                <div>
                  <span>Dr. Chaitanya Vishnu Bhatt</span>
                  <p className='text-muted' style={{ fontSize: "0.8rem" }}>
                    Otolaryngologist
                  </p>
                </div>
              </div>
              <div className='me-2 mt-3 flex'>
                <SlLocationPin className='me-1 mt-1 w-6 h-6' />
                <div>
                  Suite 206/203-233 New King James Rd, Edgecliff NSW 2027
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
