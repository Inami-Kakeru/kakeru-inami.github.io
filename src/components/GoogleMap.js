import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.990621050237!2d139.57344797677386!3d35.73501197258707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e695d1a2e8c1%3A0x4d5f5d1f1b7e8f0a!2z44CSMTc4LTAwNjQg5p2x5Lqs6YO95riv5Yy65Y2X5aSn5rOJ77yV5LiB55uu77yT77yV4oiS77yY!5e0!3m2!1sja!2sjp!4v1709534844316!5m2!1sja!2sjp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ぴあざさるうとへの地図"
        aria-label="ぴあざさるうとへの地図"
      ></iframe>
    </div>
  );
};

export default GoogleMap; 