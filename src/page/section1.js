import React from "react";

export const Section1 = () => {
  return (
    <section className="w-full h-dvh bg-[#101010] relative">
      <div className="pointer-events-none overflow-hidden w-full h-full">
        <video
          autoPlay
          muted
          playsInline
          loop
          src="https://blacklisted.agency/wp-content/uploads/2024/07/Blacklisted-Agency-Banner.mp4"
          style={{
            objectFit: "cover",
            display: "flex",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          boxSizing: "border-box",
          top: 0,
          left: 0,
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(180deg, #00000000 0%, #101010 100%)",
        }}
      />
      <div className="absolute top-0 items-center w-full h-full">
        <div className="flex justify-between items-center w-full md:px-20 lg:px-32 px-5 min-h-32">
          <div className="text-end lg:text-3xl md:text-2xl text-lg  text-white font-semibold">
            blacklisted.
            <br />
            agency
          </div>
          <div className="relative w-11 h-11 bg-blue-600 rounded-full flex-row flex gap-2 items-center justify-center scale-75 md:scale-100">
            <div className="w-[2px] h-5 bg-white rotate-12 " />
            <div className="w-[2px] h-5 bg-white rotate-12 " />
            <div className="w-[2px] h-5 bg-white rotate-12 " />
          </div>
        </div>
        <div className="absolute bottom-0 lg:text-[80px] md:text-5xl text-3xl font-bold w-full text-center flex flex-col items-center">
          <h1 style={{ color: "#f2edd9", lineHeight: 1 }}>
            growth hacking with
          </h1>
          <h1 style={{ color: "#006AFF", lineHeight: 1 }}>
            commercial strategies
          </h1>

          <div className="text-xl font-normal text-white border-[#006AFF] border-[3px] px-24 py-2 mt-8 flex items-center justify-center">
            explore
          </div>
        </div>
      </div>
    </section>
  );
};
