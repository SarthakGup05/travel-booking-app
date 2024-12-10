import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    destination: Yup.string().required("Destination/Tour Package is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      destination: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Form submitted successfully!\n" + JSON.stringify(values, null, 2));
    },
  });

  return (
    <section
      className="bg-gray-300 py-12 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/black bg.jpg')" }}
    >
      <div className="bg-gray-900 bg-opacity-50 py-12 px-6 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Plan Your Dream Journey
          </h1>
          <p className="text-gray-200 mt-4">
            Fill out the form below and let us help you design the perfect travel experience.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Let us know your travel needs and we'll get back to you with the best quote.
          </p>

          <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Destination/Tour Package Field */}
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="destination"
              >
                Destination / Tour Package
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Enter your destination or package"
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={formik.values.destination}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.destination && formik.errors.destination && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.destination}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
              >
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
