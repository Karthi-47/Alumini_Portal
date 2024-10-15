import React from 'react';

const Content = () => {
  return (
    <>
      <section className="py-2 bg-white sm:py-10 lg:py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <img
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                alt=""
              />
              <div className="pl-12 pr-6">
                <img
                  className="relative"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                  alt=""
                />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <p className="text-3xl sm:text-4xl">👋</p>
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">
                        "Never underestimate the power of connections. This portal is more than just a tool. it’s a community built on shared goals, dreams, and support."
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16">
              <h2 className="text-center text-2xl last:text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Connecting Alumni and Students for a Brighter Future
              </h2>
              <p className="text-center font-normal leading-relaxed text-gray-900 mt-5">
              This portal serves as a bridge between alumni and current students, fostering opportunities for collaboration and growth. Alumni can contribute through donations, job postings, and event sharing.
              </p>
              <p className="mt-6 text-center font-normal leading-relaxed text-gray-900">
              Students benefit from AI-driven career suggestions and access to valuable job opportunities. Admins manage the system to ensure a seamless and effective experience for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Alumni & Student Portal
          </h1>
          <p className="text-gray-600 text-lg text-center mb-8 max-w-2xl">
            This portal connects alumni with current students, facilitating donations, job postings, and event sharing
            from alumni, while enabling students to explore career paths and opportunities through AI-powered suggestions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Alumni Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?t=st=1728994250~exp=1728997850~hmac=62e359cc439b836f29e60f606f49fcec9f2bcad02e1ea4d88d3a9c3c4ab3693a&w=740"
                alt="Alumni"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Alumni
              </h2>
              <p className="text-gray-600">
                Alumni can manage their profiles, donate to support students, and post job vacancies and event details for
                students.
              </p>
            </div>

            {/* Students Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://img.freepik.com/free-photo/young-student-woman-with-backpack-bag-holding-hand-with-thumb-up-gesture-isolated-white-wall_231208-11498.jpg?w=740&t=st=1728993980~exp=1728994580~hmac=ad9b5b1d8a59cad9272fef15dbd4a70472150bd18e7d9a1829a1c84cf568f5e7"
                alt="Students"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Students
              </h2>
              <p className="text-gray-600">
                Students can create profiles, upload resumes, and receive AI-powered career path suggestions and job
                opportunities posted by alumni.
              </p>
            </div>

            {/* Admin Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-1447.jpg?t=st=1728994140~exp=1728997740~hmac=4c9914af39b58e8b2cbddf6da4fec260b4ed9cb28077e8871eb176bfb49f4c84&w=740"
                alt="Admin"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Admin
              </h2>
              <p className="text-gray-600">
                Admins can manage alumni and student users, oversee job postings, and add extra features for system
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
