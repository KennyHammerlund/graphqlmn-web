import React from "react";

export default function CustomHR({ style }) {
  return (
    <div className="self-start text-5xl text-pink-500">
      <p
        style={{
          letterSpacing: -12,
          textShadow: `4px 0px 4px black`,
          ...style,
        }}
      >
        ~~~~~
      </p>
    </div>
  );
}

// saving for possible later use - low wavy lines ﹏﹏﹏
