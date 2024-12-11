import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import bg from '/assets/images/black bg.jpg'
import Banner from "../utils/Banner";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      alert("Form submitted successfully!\n" + JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
     <Banner image={bg} title='Contact Us'/>
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-semibold text-gray-800 text-4xl mb-4">
                Contact Us
              </h2>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-gray-700 text-2xl mt-1" />
                <p className="text-gray-700">
                  D-217 B, Vibhuti Khand, Gomti Nagar, Lucknow-226010
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-gray-700 text-2xl mt-1" />
                <a
                  href="mailto:abc@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  abc@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-gray-700 text-2xl mt-1" />
                <a
                  href="tel:+917817821976"
                  className="text-gray-700 hover:underline"
                >
                  +91 9838587992
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 shadow-lg rounded-lg bg-gray-50">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-black transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
