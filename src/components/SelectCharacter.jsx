import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

export default function SelectCharacter({ options, getNameOfSelectedChar }) {
  const [inputValue, setInputValue] = useState("Characters");

  const namesArr = options.map((opt) => opt.label);

  const sendName = (newInputValue) => {
    if (newInputValue !== "") {
      getNameOfSelectedChar(newInputValue);
    }
  };

  return (
    <>
      {inputValue.length > 10 && <p id="selectCharacter--inputTooLong_p">No!</p>}
      <Autocomplete
        disablePortal
        isOptionEqualToValue={(option, value) => option.id === value.id}
        inputValue={inputValue}
        id="combo-box-demo"
        options={options}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          const index = namesArr.indexOf(newInputValue);
          sendName(newInputValue);
        }}
        sx={{ width: "13rem", borderColor: "#ffffff" }}
        renderInput={(params) => (
          <TextField {...params}  label="Characters" sx={{ width: "13rem" }} />
        )}

        // Ez itt valamiért baj! (controlled to uncontrolled? inputProps={{ maxLength: 12 }}
      />
    </>
  );
}
