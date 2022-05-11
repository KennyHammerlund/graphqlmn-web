import React from "react";
import LOGO from "../assets/images/circle_logo.svg";

// const url =
const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(0,#78be42, #173a64)",
      }}
    >
      <div
        className="bg-white justify-center p-6 rounded-md shadow"
        style={{ maxWidth: 600 }}
      >
        <div className="flex items-center justify-center">
          <img
            style={{
              width: 300,
              height: 300,
              maxHeight: "80vh",
              maxWidth: "80vw",
            }}
            src={LOGO}
            alt="React Logo"
          />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-8">
          <span className="block">Ready to dive in?</span>
        </h2>
        <a href="mailto:admin@graphqlmn.com" className="text-blue-600">
          Send us an email to join
        </a>
        <div>{/* <MailchimpSignup /> */}</div>
        <h2 className="font-bold tracking-tight text-gray-900 text-xl mt-8">
          <span className="block">What is GraphQL MN?</span>
        </h2>
        <p>
          GraphQL MN is a group of people enjoying the benefits GraphQL can
          bring to software development. We have monthly meetups in the
          Minneapolis, MN metro area. At the moment we are just getting started,
          if you are interested in participating feel free to reach out or join
          our mailing list above.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
