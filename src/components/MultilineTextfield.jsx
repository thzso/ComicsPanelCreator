import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function MultilineTextField({ getBubbleText }) {
  const [isToolong, setIsToolong] = useState(false);

  const Sendtext = (text) => {
    getBubbleText(text);
  };

  return (
    <div>
      <TextField
        inputProps={{ maxLength: 45 }}
        id="standard-multiline-flexible"
        label="text of speech bubble"
        multiline
        maxRows={8}
        onInput={(e) => {
          Sendtext(e.target.value);

          e.target.value.length === 45
            ? setIsToolong(true)
            : setIsToolong(false);
          console.log(isToolong);
        }}
        variant="standard"
      />
      {isToolong && <p>No more space!</p>}
    </div>
  );
}
