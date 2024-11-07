import image9 from "../assets/9.jpg";

const ContactUs = () => {
  return (
    <div>
      <div
        className="h-portfolio bg-cover bg-center flex items-center justify-center shadow-md mb-8 rounded-lg"
        style={{ backgroundImage: `url(${image9})` }}
      >
        <h2 className="text-6xl font-bold text-white pb-20">Contact Us</h2>
      </div>
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-2xl text-gray-600">
            Better yet, see us in person! Call us at +91 6397347308, 9997776402,
            7520370720
          </p>
          <div className="text-2xl text-gray-600">
            <p className="mt-16 text-3xl text-gray-600:">Office Locations</p>
            <br />
            <p> Noida Office:</p>
            <p>Ingenious Decor Aesthetic Private Limited</p>
            <p>26/6 Rise Resort Residences</p>
            <p>Greater Noida West, Uttar Pradesh (India) - 201306</p>
            <br />
            <br />
            <p>Meerut Office:</p>
            <p>Ingenious Decor Aesthetic Private Limited</p>
            <p>162, Sindhawali, Rohta Road </p>
            <p>Meerut, Uttar Pradesh, 250002 </p>
            <br />
            <br />
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <i className="fas fa-envelope text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-3xl font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:contact@ingeniousdecoraesthetic.com"
                className="text-blue-500 hover:underline text-xl"
              >
                info@ingenioudecoraesthetic.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
