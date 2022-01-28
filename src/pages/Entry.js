import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import CustomHR from "../components/CustomHR";

export default function Entry() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [submission, setSubmission] = useState({});

  const handleName = (e) => setName({ value: e.target.value });
  const handlePhone = (e) => setPhone({ value: e.target.value });
  const handleEmail = (e) => setEmail({ value: e.target.value });

  const handleSubmit = () => {
    setSubmission({ name: name, phone: phone, email: email });
    console.log(submission);
  };

  // bg-main-header
  // bg-gradient-to-r from-violet-500 to-fuchsia-500
  // bg-[url('/assets/images/marek-piwnicki-unsplash.jpg')]

  return (
    <div className="bg-slate-50">
      <header className="h-fit w-full p-16 flex justify-evenly py-16 flex-row bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div
          className="w-2/6 flex flex-col justify-center text-slate-100"
          style={{ textShadow: "1px 1px 2px black" }}
        >
          <h1 className="py-2 text-5xl text-cyan-500 font-bold">
            Big Digital World
          </h1>
          <h2 className="py-2 text-4xl font-bold">Meetup 2022</h2>
          <p className="w-1/2 py-2">
            I'm baby everyday carry YOLO adaptogen bicycle rights hoodie, neutra
            letterpress selvage listicle knausgaard chambray pour-over.
          </p>
        </div>
        <div className="w-1/6">
          <SignUpForm
            handleName={handleName}
            handlePhone={handlePhone}
            handleEmail={handleEmail}
            handleSubmit={handleSubmit}
          />
        </div>
      </header>
      <main className="px-72">
        <div className="cardLeftPic my-36 flex">
          <div className="image shadow-lg w-4/5 px-8 py-4 mx-12 flex-col bg-slate-200 rounded-2xl">
            <div className="meetupInfo flex h-2/6 items-center bg-slate-100 translate-y-64 translate-x-12 rounded-2xl shadow-lg">
              <div className="infoLeft w-1/2 justify-start p-4 flex">
                <FontAwesomeIcon
                  className="m-2"
                  color="fuschia"
                  icon={faMapMarkerAlt}
                />
                <div className="flex-col">
                  <h5 className="text-lg">Where</h5>
                  <address className="text-xs">
                    <p>Example Place</p>
                    <p>123 Main St</p>
                    <p>Anytown, US</p>
                  </address>
                </div>
              </div>
              <div className="infoRight w-1/2 justify-start p-4 flex">
                <FontAwesomeIcon className="m-2" icon={faClock} />
                <div className="flex-col">
                  <h5 className="text-lg">When</h5>
                  <div className="text-xs">
                    <p>Day of the Week</p>
                    <p>
                      <time dateTime="YY-MM-DDTHH:NN">MM, DD, YY</time>
                    </p>
                    <p>Time Range</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardText w-4/5 mx-12 px-8 py-4">
            <h5 className="uppercase text-sm text-slate-600">The Meetup</h5>
            <h3 className="text-4xl my-6">About the event</h3>
            <span>
              <CustomHR />
            </span>
            <p className="my-6">
              Disrupt direct trade chicharrones chia biodiesel 90's celiac
              hoodie austin plaid yuccie pug blog. Mustache umami marfa kale
              chips mixtape swag seitan 90's prism.
            </p>
            <button className="border-2 rounded-lg text-white bg-pink-500 w-40 h-12 shadow-lg">
              Join Us
            </button>
          </div>
        </div>
        <div className="cardRightPic justify-between my-36 flex">
          <div className="cardText w-4/5 mx-12 px-8 py-4">
            <h5 className="uppercase text-sm text-slate-600">About Us</h5>
            <h3 className="text-4xl my-6">What We're Doing</h3>
            <span>
              <CustomHR />
            </span>
            <p className="my-6">
              Cardigan fashion axe intelligentsia stumptown drinking vinegar
              schlitz shaman squid chicharrones knausgaard. Dreamcatcher iceland
              master cleanse paleo gentrify, distillery lyft pug gluten-free
              echo park.
            </p>
            <button className="border-2 rounded-lg text-white bg-pink-500 w-40 h-12 shadow-lg">
              Contact Us
            </button>
          </div>
          <div className="image shadow-lg w-4/5 px-8 py-4 mx-12 flex-col bg-slate-200 rounded-2xl"></div>
        </div>
        <div className="cardLeftPic justify-between my-36 flex">
          <div className="image shadow-lg w-4/5 px-8 py-4 mx-12 flex-col bg-slate-200 rounded-2xl"></div>
          <div className="cardText w-4/5 mx-12 px-8 py-4">
            <h5 className="uppercase text-sm text-slate-600">Join Us</h5>
            <h3 className="text-4xl my-6">Join us on Slack</h3>
            <span>
              <CustomHR />
            </span>
            <p className="my-6">
              Health goth meggings activated charcoal, fam ethical stumptown
              selfies small batch air plant poke slow-carb palo santo VHS
              live-edge pickled. Locavore plaid PBR&B, forage flannel gastropub
              literally wayfarers try-hard.
            </p>
            <button className="border-2 rounded-lg text-white bg-pink-500 w-40 h-12 shadow-lg">
              Join Us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
