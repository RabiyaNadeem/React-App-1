import React from "react";
import "semantic-ui-css/semantic.min.css";

// const configSeasons =
// {
//    summer: {
//     text:'Let us hit the beach',
//     iconName:'sun'
//    },

//    winter: {
//     text: 'Brrr! It is chilly',
//     iconName: 'snowflake'
//    }
// };
const checkSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    lat > 0 ? "winter" : "summer";
  } else {
    lat > 0 ? "summer" : "winter";
  }
};
const Seasons = (props) => {
  const season = (props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Brrrrr! It is chilly" : "Let us hit the beach!";
  const icon = season === "winter" ? "snowflake" : "sun";
  // const {text , iconName}= configSeasons[season];
  return (
    <div>
      <i className={`massive ${icon}icon`} />
      <h1>{text}</h1>
      <i className={` massive ${icon}icon`} />
    </div>
  );
};

export default Seasons;

//  import "./seasonDisplay.css";
// import React from "react";

// const seasonConfig = {
//   summer: {
//     text: "Let's Hit the Beach !",
//     iconName: "sun",
//   },
//   winter: {
//     text: "Burr, It's Chilly",
//     iconName: "snowflake",
//   },
// };

// const getSeason = (lat, month) => {
//   if (month > 2 && month < 9) {
//     return lat > 0 ? "summer" : "winter";
//   } else {
//     return lat > 0 ? "winter" : "summer";
//   }
// };

// const SeasonDisplay = (props) => {
//   const season = getSeason(props.lat, new Date().getMonth());
//   const { text, iconName } = seasonConfig[season];
//   return (
//     <div className={`season-display ${season}`}>
//       <i className={`icon-left massive ${iconName} icon`} />
//       <h1>{text}</h1>
//       <i className={`icon-right massive ${iconName} icon`} />
//     </div>
//   );
// };

// export default SeasonDisplay;
