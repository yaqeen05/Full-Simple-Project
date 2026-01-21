const contactDetails = [
  {
    title: "Phone",
    text: "+1 (555) 123-4567",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "contact@airevolution.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id='contact' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* contact info */}
        <div>
          <span className='text-primary font-semibold'>Get in Touch</span>
          <h2 className='text-3xl md:text-4xl font-bold mt-2'>
            Ready to <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Transform</span> Your Buisness with AI?
          </h2>
          <p className=' mt-4 max-w-2xl mx-auto'>
          Our team of AI experts is ready to help you implement cutting-edge solutions tailored to your specific needs. Contact us today to schedule a consultation.
          </p>
          <div className='mt-8 space-y-4'>
            {contactDetails.map((detail, i)=>(
              <div key={i} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10 text-primary">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{detail.title}</h3>
                  <p className="mt-1 text-gray-600">{detail.text}</p>
                </div>   
              </div>
            ))}
          </div>
        </div> 
        {/* contact form */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8"> 
          <form>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:border-2 p-3 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:border-2 p-3 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:border-2 p-3 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:border-2 p-3 border" />
              </div>
            </div>
            <button className="w-full mt-6  bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium text-center transition shadow-lg hover:shadow-primary/30">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;