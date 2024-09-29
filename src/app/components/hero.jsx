const Hero = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/cognifuse1/30min', '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center"
        aria-label="Hero"
        style={{
          backgroundImage: `url('/images/HERO-IMG.jpg')`, // Replace with your image path
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

        <div className="relative mx-auto grid max-w-screen-xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto place-self-center">
            <h2 className="mb-4 max-w-xl text-lg font-bold text-red-500 dark:text-red-500 md:text-2xl lg:text-3xl text-center mx-auto">
              Are you an African SME <span className="">struggling to grow</span> because of manual processes?
            </h2>
            <h1 className="mb-4 max-w-3xl text-lg font-extrabold leading-none tracking-tight text-white md:text-xl lg:text-3xl">
              Discover How We Will Help You Buy Back Time And Get Cost-Effective Experts On Your Team Using Our All-in-one, AI-first Platform
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-300 md:text-base lg:mb-8 lg:text-lg text-center mx-auto">
              It&apos;s time you stop worrying about the small administrative tasks and get back to what matters—scaling your business.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleBooking}
                className="flex w-auto justify-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
