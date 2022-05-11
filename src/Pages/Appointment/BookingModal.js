import { format } from "date-fns";
import React from "react";

const BookingModal = ({ tritment, date }) => {
  const { name, slots } = tritment;
  const newDate = format(date, "PP");
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form className="form-control mt-10">
            <input
              type="text"
              readOnly
              value={newDate}
              class="input mb-3 text-[16px] bg-gray-200 input-bordered"
            />
            <input
              type="text"
              readOnly
              value={slots?.[0]}
              class="input mb-3 bg-gray-200 text-[16px] input-bordered"
            />
            <input
              type="text"
              required
              placeholder="Full Name"
              class="input mb-3 text-[16px] input-bordered"
            />
            <input
              type="text"
              required
              placeholder="Phone Number"
              class="input mb-3 text-[16px] input-bordered"
            />
            <input
              type="email"
              required
              placeholder="Email email address"
              class="input mb-3 text-[16px] input-bordered"
            />
            <div class="modal-action">
              <input
                for="booking-modal"
                class="btn w-full"
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
