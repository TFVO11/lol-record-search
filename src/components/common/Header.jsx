import React from "react";

function Header() {
  const navList = ["PROFILE", "RECORD", "CHART", "SUMMARY"];

  return (
    <div>
      <ul>
        {navList.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default Header;
