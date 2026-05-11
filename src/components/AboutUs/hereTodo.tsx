import React from "react";
import image from "@/assets/Logo.png";

const HereToDo: React.FC = () => {
  return (
    <section
      className=""
      style={{
        width: "100%",
        minHeight: "850px",
        paddingTop: "100px",
        boxSizing: "border-box",
        background:
          "linear-gradient(360deg, #E1E1E1 0%, #FFFFFF 47.78%), #FFFFFF",
        borderBottom: "5px solid #E1E1E1",
      }}
    >
      <div className=" px-4 lg:px-6 max-w-[1280px] mx-auto" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Left — text content */}
        <div
          className="w-[65%]"
          style={{
            flex: "0 1 665px", // grows up to 665px, shrinks on smaller screens
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(36px, 4.2vw, 60px)", // fluid: 36px → 60px
              lineHeight: "95%",
              color: "#EF4123",
              margin: 0,
            }}
          >
            What we are here to do:
          </h2>

          <p
            style={{
              fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif",
              fontWeight: 350,
              fontSize: "clamp(16px, 1.67vw, 24px)", // fluid: 16px → 24px
              lineHeight: "120%",
              color: "#EF4123",
              margin: 0,
            }}
          >
            Make IT delivery faster and less painful for the organisations we
            work with. Create one million skilled tech jobs in underserved
            communities worldwide.
            <br />
            <br />
            Those two things are not separate goals. They are the same goal
            approached from different sides.
          </p>
        </div>

        {/* Right — logo / decorative image */}
        <div
          className="w-[35%]"
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginLeft: "40px", // breathing room between columns
          }}
          aria-hidden="true"
        >
          <img
            src={image}
            alt=""
            style={{
              width: "clamp(200px, 24.7vw, 356px)", // fluid: 200px → 356px
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HereToDo;
