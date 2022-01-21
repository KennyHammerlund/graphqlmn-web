import React, { useState } from "react";

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
    <div>
      <header className="h-fit p-16 flex border-2 justify-around py-16 flex-row">
        <div className="w-2/6 flex flex-col justify-evenly border-2">
          <h1 className="w-1/2 self-center">Big Digital World</h1>
          <h2 className="w-1/2 self-center">Meetup 2021</h2>
          <p className="w-1/2 self-center">
            I'm baby everyday carry YOLO adaptogen bicycle rights hoodie, neutra
            letterpress selvage listicle knausgaard chambray pour-over.
          </p>
        </div>
        <div className="flex flex-col border-2 w-2/6 py-16 justify-around">
          <h4 className="self-center">Register Yourself</h4>
          <h3 className="self-center">Reserve Your Seat</h3>
          <form className="flex flex-col justify-evenly border-2 m-auto p-12 w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleName}
            />
            <input
              type="text"
              placeholder="Your Phone No"
              value={phone}
              onChange={handlePhone}
            />
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={handleEmail}
            />
            <button type="submit" onClick={handleSubmit}>
              Register Now
            </button>
          </form>
        </div>
      </header>
      <main className="px-72">
        <div className="cardLeftPic">
          <div className="image">
            <div className="meetupInfo">
              <div className="infoLeft">
                <h5>Where</h5>
              </div>
              <div className="infoRight">
                <h5>When</h5>
              </div>
            </div>
          </div>
          <div className="cardText">
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
        <div className="cardRightPic">
          <div className="cardText">
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
          <div className="doubleImage"></div>
        </div>
        <div className="cardLeftPic">
          <div className="image"></div>
          <div className="cardText">
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
        <footer>
          <h5>Follow Us On</h5>
          <ul>
            <li>
              <a href="#">Slack Icon</a>
            </li>
            <li>
              <a href="#">Insta Icon</a>
            </li>
            <li>
              <a href="#">Facebook Icon</a>
            </li>
            <li>
              <a href="#">LinkedIn Icon</a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
