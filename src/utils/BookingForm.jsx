import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ closeModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    destination: Yup.string().required("Destination is required"),
    guests: Yup.string().required("Please select the number of guests"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      destination: "",
      guests: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log("Form Submitted", values);
      formik.resetForm();
      closeModal();
      setIsSubmitting(false);
    },
  });

  return (
    <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Plan Your Journey with Us
      </h1>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-4">
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Destination/Tour Package</label>
          <input
            type="text"
            name="destination"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.destination && formik.errors.destination
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Destination/tour"
            value={formik.values.destination}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.destination && formik.errors.destination && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.destination}</p>
          )}
        </div>

        {/* Guests */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Guests</label>
          <select
            name="guests"
            className={`w-full px-4 py-3 border rounded-md outline-none ${
              formik.touched.guests && formik.errors.guests
                ? "border-red-500"
                : "border-gray-300"
            }`}
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Guests</option>
            {[...Array(10)].map((_, i) => (
              <option value={i + 1} key={i}>
                {i + 1}
              </option>
            ))}
          </select>
          {formik.touched.guests && formik.errors.guests && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.guests}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`w-full px-6 py-3 font-bold rounded-md transition duration-300 ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700 text-white"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;