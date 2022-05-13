import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ tritment, date }) => {
  const { name, slots } = tritment;
  const newDate = format(date, "PP");
  const [user] = useAuthState(auth);

  const handelBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const slot = e.target.slot.value;
    const phone = e.target.phone.value;
    console.log(name, email, slot, phone);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handelBooking} className="form-control mt-10">
            <input
              type="text"
              disabled
              value={newDate}
              className="input mb-3 text-[16px] input-bordered"
            />
            <select
              name="slot"
              className="select select-bordered w-full mb-3 bg-[#E6E6E6]"
            >
              {slots?.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input mb-3 text-[16px] input-bordered"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              className="input mb-3 text-[16px] input-bordered"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="input mb-3 text-[16px] input-bordered"
            />
            <div className="modal-action">
              <input
                htmlFor="booking-modal"
                className="btn w-full"
                type="submit"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
