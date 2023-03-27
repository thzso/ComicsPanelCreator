import title from "./assets/tla.svg";
import "./App.css";
import { useState, useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";
import SelectCharacter from "./components/SelectCharacter";
import CharacterCard from "./components/CharacterCard";
import RadioButtons from "./components/RadioButtons";
import MultilineTextField from "./components/MultilineTextfield";
import Imagelist from "./components/Imagelist";
import exportAsImage from "./utils/exportAsImage";

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

  const [nameOfChar, setNameOfChar] = useState("");
  const [charBckgrUrl, setBckgrUrl] = useState("/images/desktop_bg.jpg");
  const [filterColorClass, setFilterColorClass] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [contentOfBubble, setContentOfBubble] = useState("");

  const exportRef = useRef(null);

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
          ref={exportRef}
          className={`main ${isReady ? "isReadyMain" : ""}`}
          style={{ backgroundImage: `url(${charBckgrUrl})` }}
        >
          {isReady !== true && (
             <>
              <div className="select-char-sheet boxes">
                <SelectCharacter {...{ setNameOfChar }} />
                <RadioButtons {...{ setFilterColorClass }} />
                <MultilineTextField {...{ setContentOfBubble }} />
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsReady(!isReady);
                  }}
                >
                  Ready
                </Button>
                </div>
                  <Imagelist {...{ setBckgrUrl }} />
              </>

            
          )}

          <CharacterCard
            {...{ filterColorClass, nameOfChar, isReady, contentOfBubble }}
          />
        </div>
        {isReady && (
          <div className="btnContainer">
            <div id="saveBtn">
            <Button
              variant="outlined"
              onClick={() => exportAsImage(exportRef.current, "test")}
            >
              Save
            </Button>
            </div>
            <Button variant="outlined" onClick={() => {setIsReady(!isReady);setContentOfBubble("")}}>
              Back
            </Button>
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
