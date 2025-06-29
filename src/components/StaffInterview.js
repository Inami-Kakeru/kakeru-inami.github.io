import React from 'react';
import { staffInterviews } from '../data/staffInterviews';

const StaffInterview = () => {
  return (
    <section 
      className="py-16 bg-primary bg-opacity-5"
      aria-labelledby="staff-interview-heading"
    >
      <div className="container-custom">
        <h2 
          id="staff-interview-heading" 
          className="text-3xl font-mincho text-center mb-12"
        >
          スタッフインタビュー
        </h2>
        <div className="max-w-4xl mx-auto space-y-16">
          {staffInterviews.map((staff, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={staff.image}
                    alt={`${staff.name}の写真`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-mincho mb-2">{staff.name}</h3>
                    <p className="text-gray-600">
                      {staff.position} / 経験{staff.experience}
                    </p>
                  </div>
                  <div className="space-y-6">
                    {staff.qa.map((item, qaIndex) => (
                      <div key={qaIndex}>
                        <h4 className="font-medium text-primary mb-2">
                          Q. {item.question}
                        </h4>
                        <p className="text-gray-700">
                          A. {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffInterview; 