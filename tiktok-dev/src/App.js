// This is the main website that will display when the app is launched
import React, { useEffect, useState } from "react";
import { getUserInfo } from "./getUserInfo";
import firebase from "firebase";
import "./App.css";
import { TextField } from "@material-ui/core";
import ReactLoading from "react-loading";
import FadeIn from "react-fade-in";
import CountUp from "react-countup";

/*
firebase.initializeApp({
  apiKey: "AIzaSyB6xSbUL_3DYxd5mK9PBPdxMI9h7MHmoAg",
  authDomain: "tiktokappanalysis.firebaseapp.com",
  projectId: "tiktokappanalysis",
  storageBucket: "tiktokappanalysis.appspot.com",
  messagingSenderId: "263996531504",
  appId: "1:263996531504:web:0a28bce64849673beb1ef5",
  measurementId: "G-4WNB0KH4E7",
});
*/

// Declares the functional component
const App = (props) => {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const analyzeUser = async () => {
    /*
    if (input.trim() !== "") {
      setIsLoading(true);
      const userObject = await getUserInfo(input);
      setUserData(userObject);
      setIsLoading(false);
    }
    */
    setIsLoading(true);
    setTimeout(() => {
      setUserData({
        name: "Zyad 👨‍💻",
        image:
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8059f88d7dae6e1d6ca26c1e4a946688~c5_720x720.jpeg?x-expires=1612126800&x-signature=M36vM09759vLlvK5OmFBTVhISUw%3D",
        followers: 3774,
        numVideos: 8,
        numViews: 4473,
        numLikes: 473,
        numComments: 16,
        numShares: 6,
        engagementRate: 1.87,
      });
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={"container"}>
      <div className={"titleText"}>TikTok Engagement</div>
      <div className={"inputContainer"}>
        <div className={"textInputContainer"}>
          <TextField
            value={input}
            label={"TikTok Username"}
            placeholder={"Type in a username..."}
            onChange={(event) => setInput(event.target.value)}
            variant={"outlined"}
            fullWidth
          />
        </div>
        <div className={"horizontalSpacer"} />
        {isLoading === true ? (
          <ReactLoading
            type={"spin"}
            color={"#90ee90"}
            height={50}
            width={50}
          />
        ) : (
          <button className={"searchButton"} onClick={() => analyzeUser()}>
            Search
          </button>
        )}
      </div>
      {userData === "User is Private" ? (
        <div className="userInfoContainer">
          <div className={"normalText userBasicInfoRow"}>{userData}</div>
        </div>
      ) : userData !== "" ? (
        <FadeIn transitionDuration={750}>
          <div className={"userInfoContainer"}>
            <div className={"userBasicInfoRow"}>
              <div className={"normalText"}>{userData.name}</div>
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />

              <img src={userData.image} className={"userImage"} />
            </div>
            <div className={"userBasicInfoRow"}>
              <div>
                <CountUp
                  duration={5}
                  end={userData.followers}
                  className={"normalText"}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Followers</div>
              </div>
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div>
                <CountUp
                  duration={5}
                  end={userData.numVideos}
                  className={"normalText"}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Videos</div>
              </div>
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div>
                <CountUp
                  duration={5}
                  end={userData.numViews}
                  className={"normalText"}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Total Views</div>
              </div>
            </div>
            <div className={"userBasicInfoRow"}>
              <div>
                <CountUp
                  duration={5}
                  end={userData.numLikes}
                  className={"normalText"}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Total Likes</div>
              </div>
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div>
                <CountUp
                  duration={5}
                  end={userData.numComments}
                  className={"normalText"}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Total Comments</div>
              </div>
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div className={"horizontalSpacer"} />
              <div>
                <CountUp
                  duration={5}
                  end={userData.numShares}
                  className={"normalText"}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Total Shares</div>
              </div>
            </div>
            <div className={"userBasicInfoRow"}>
              <div>
                <CountUp
                  duration={5}
                  end={userData.engagementRate}
                  className={"normalText"}
                  decimals={2}
                  suffix={'%'}
                />
                <div className={"verticalSpacer"} />
                <div className={"smallText"}>Engagement Rate</div>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : (
        ""
      )}
    </div>
  );
};

// exports the component
export default App;
