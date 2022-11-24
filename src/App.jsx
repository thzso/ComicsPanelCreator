import title from "./assets/tla.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SelectCharacter from "./components/SelectCharacter";
import CharacterCard from "./components/CharacterCard";
import { useState } from "react";
import RadioButtons from "./components/RadioButtons";
import MultilineTextField from "./components/MultilineTextfield";
import ReadyButton from "./components/ReadyButton";
import Imagelist from "./components/Imagelist";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "SequentialistBB, cursive",
    },
  });

  const options = [
    { label: "Acrok", id: 1, url: "../public/images/Acrok.png" },
    { label: "Aome", id: 2, url: "../public/images/BLueAome.png" },
    { label: "Dechameron", id: 3, url: "../public/images/Dechameron.png" },
    { label: "Jack", id: 4, url: "../public/images/Jack.png" },
    { label: "Olak", id: 5, url: "../public/images/Olak.png" },
    { label: "Rirke", id: 6, url: "../public/images/Rirke.png" },
    { label: "Uon", id: 7, url: "../public/images/Uon.png" },
    { label: "Weapon", id: 8, url: "../public/images/Weapon002.png" },
  ];

  const itemData = [
    { img: "../public/images/scenes/space.jpg", title: "space" },
    { img: "../public/images/scenes/base.jpg", title: "base" },
    { img: "../public/images/scenes/bridge.jpg", title: "bridge" },
    { img: "../public/images/scenes/cellar.jpg", title: "cellar" },
    { img: "../public/images/scenes/city_ruins.jpg", title: "city_ruins" },
    { img: "../public/images/scenes/comms.jpg", title: "comms" },
    { img: "../public/images/scenes/exit.jpg", title: "exit" },
    {
      img: "../public/images/scenes/home_walt_weapon_jack.jpg",
      title: "home_walt_weapon_jack",
    },
    { img: "../public/images/scenes/jack.jpg", title: "jack" },
    { img: "../public/images/scenes/labor_weapon.jpg", title: "labor_weapon" },
    { img: "../public/images/scenes/underground.jpg", title: "underground" },
    { img: "../public/images/desktop_bg.jpg", title: "space" },
  ];

  const [picUrl, setPicUrl] = useState("");

  const [nameOfChar, setNameOfChar] = useState("");

  const [charBckgrUrl, setBckgrUrl] = useState(
    "../public/images/desktop_bg.jpg"
  );

  const [filterColorClass, setFilterColorClass] = useState(null);

  const [onlyCardIsClicked, setOnlyCardIsClicked] = useState(false);

  const [contentOfBubble, setContentOfBubble] = useState("");

  const getCharBckgrUrl = (url) => {
    setBckgrUrl(url);
  };

  const getNameOfSelectedChar = (text) => {
    setNameOfChar(text);
    for (const opt of options) {
      if (text === opt.label) {
        setPicUrl(opt.url);
        setNameOfChar(text);
        console.log(nameOfChar);
      }
    }
  };

  const getFilterColor = (selectedColorClassName) => {
    setFilterColorClass(selectedColorClassName);
  };

  const getBubbleText = (text) => {
    setContentOfBubble(text);
    console.log("getbubbletextben: ", contentOfBubble);
  };

  const showCardOnly = (boolean) => {
    setOnlyCardIsClicked(!onlyCardIsClicked);
    // console.log("APP.jsx: ", onlyCardIsClicked);
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div id="header--div">
          <img src={title} className="title_svg" alt="title" />
          <span id="span--title">
            <em> - Create your comic panel!</em>
          </span>
        </div>

        <div
          className="main"
          style={{ backgroundImage: `url(${charBckgrUrl})` }}
        >
          {onlyCardIsClicked !== true && (
            <>
              <div className="select-char-sheet boxes">
                <SelectCharacter
                  options={options}
                  getNameOfSelectedChar={getNameOfSelectedChar}
                />
                <RadioButtons getFilterColor={getFilterColor} />
                <MultilineTextField getBubbleText={getBubbleText} />
                <ReadyButton showCardOnly={showCardOnly} />
              </div>

              <Imagelist
                itemData={itemData}
                getCharBckgrUrl={getCharBckgrUrl}
              />
            </>
          )}

          <CharacterCard
            options={options}
            picUrl={picUrl}
            filterColorClass={filterColorClass}
            nameOfChar={nameOfChar}
            onlyCardIsClicked={onlyCardIsClicked}
            contentOfBubble={contentOfBubble}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;



// useEffect(() => {
//   const firstRender = ref.current;

//   if (firstRender) {
//     ref.current = false;
//     console.log('First Render');
//   } else {
//     console.log('Not a first Render');
//   }
// })


