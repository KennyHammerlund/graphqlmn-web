import React from "react";

export default function Footer() {
  return (
    <footer className="flex h-36 bg-blue-400 w-full">
      <h5 className="w-1/2 self-center text-center text-white">Follow Us On</h5>
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
  );
}
