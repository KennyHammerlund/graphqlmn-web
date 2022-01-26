import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";

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

  return (
    <div className="bg-slate-50">
      <header className="h-fit p-16 flex justify-evenly py-16 flex-row bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div
          className="w-2/6 flex flex-col justify-center text-slate-100"
          style={{ textShadow: "1px 1px 2px black" }}
        >
          <h1 className="py-2 text-5xl text-cyan-500 font-bold">
            Big Digital World
          </h1>
          <h2 className="py-2 text-4xl font-bold">Meetup 2021</h2>
          <p className="w-1/2 py-2">
            I'm baby everyday carry YOLO adaptogen bicycle rights hoodie, neutra
            letterpress selvage listicle knausgaard chambray pour-over.
          </p>
        </div>
        <div className="w-1/6">
          <SignUpForm />
        </div>
      </header>
      <main className="px-72 mt-12">
        <div className="cardLeftPic my-12 justify-between flex">
          <div className="image w-4/5 mx-12 px-8 py-4 flex-col bg-slate-200 rounded-2xl">
            <div className="meetupInfo flex h-16 bg-slate-100 justify-evenly translate-y-36 translate-x-12 rounded-2xl">
              <div className="infoLeft w-1/2 justify-start p-4">
                <h5>Where</h5>
              </div>
              <div className="infoRight w-1/2 justify-start p-4">
                <h5>When</h5>
              </div>
            </div>
          </div>
          <div className="cardText w-4/5 mx-12 px-8 py-4">
            <h5>The Meetup</h5>
            <h3>About the event</h3>
            <span>divider</span>
            <p>
              Disrupt direct trade chicharrones chia biodiesel 90's celiac
              hoodie austin plaid yuccie pug blog. Mustache umami marfa kale
              chips mixtape swag seitan 90's prism.
            </p>
            <button>Join Us</button>
          </div>
        </div>
        <div className="cardRightPic justify-between my-12 flex">
          <div className="cardText mx-12 w-4/5 px-8 py-4">
            <h5>About Us</h5>
            <h3>What We're Doing</h3>
            <span>divider</span>
            <p>
              Cardigan fashion axe intelligentsia stumptown drinking vinegar
              schlitz shaman squid chicharrones knausgaard. Dreamcatcher iceland
              master cleanse paleo gentrify, distillery lyft pug gluten-free
              echo park.
            </p>
            <button>Join Us</button>
          </div>
          <div className="doubleImage mx-12 w-4/5 px-8 py-4">
            <p className="bg-slate-200 h-full rounded-2xl">image</p>
          </div>
        </div>
        <div className="cardLeftPic justify-between my-12 flex">
          <div className="image w-4/5 px-8 py-4 mx-12 flex-col bg-slate-200 rounded-2xl"></div>
          <div className="cardText w-4/5 mx-12 px-8 py-4">
            <h5>The Meetup</h5>
            <h3>About the event</h3>
            <span>divider</span>
            <p>
              Health goth meggings activated charcoal, fam ethical stumptown
              selfies small batch air plant poke slow-carb palo santo VHS
              live-edge pickled. Locavore plaid PBR&B, forage flannel gastropub
              literally wayfarers try-hard.
            </p>
            <button>Join Us</button>
          </div>
        </div>
      </main>
      <footer className="flex h-36 bg-blue-400 w-full">
        <h5 className="w-1/2 self-center text-center text-white">
          Follow Us On
        </h5>
        <ul className="flex w-1/2 justify-center self-center">
          <li>
            <a href="#" className="text-white">
              Slack Icon
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Insta Icon
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Facebook Icon
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              LinkedIn Icon
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
