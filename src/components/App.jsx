// import { useState } from "react";
import profilesData from "./data/userData.json";
import Profile from "./Profile/Profile";
import "./App.css";

function App() {
  const onBtnClick = (event) => {
    console.log("Hello guys", event);
  };
  const onBtnClick2 = (beerGlassCount) => {
    console.log("beerGlassCount", beerGlassCount);
  };
  const onSayMyName = (profileName) => {
    console.log("profileName: ", profileName);
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={onBtnClick}>click me</button>
      <button onClick={() => onBtnClick2(322)}>click us</button>
      <section title="User list">
        {profilesData.map((profileItem) => {
          return (
            <Profile
              key={profileItem.email}
              name={profileItem.name}
              phone={profileItem.phone}
              status={profileItem.status}
              email={profileItem.email}
              hasPhysicalAddress={profileItem.hasPhisicalAddress}
              onSayMyName={onSayMyName}
            />
          );
        })}
      </section>
    </>
  );
}
export default App;
