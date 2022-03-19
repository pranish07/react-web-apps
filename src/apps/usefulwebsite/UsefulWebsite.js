import React from "react";
import Button from "./Button.jsx";

import "../../styles.css";
function UsefulWebsite() {
  return (
    <>
      <h1 className="uw-title">useful websites</h1>
      <h3 className="uw-desc">Here are some listings of useful websites</h3>

      <Button name="google" link="https://www.google.com" />
      <Button name="facebook" link="https://www.facebook.com" />
      <Button name="twitter" link="https://www.twitter.com" />
      <Button name="github" link="https://github.com"/>
      <Button name="dsa" link=""/>
      <Button name="react" link="https://beta.reactjs.org/"/>
    </>
  );
}

export default UsefulWebsite;
