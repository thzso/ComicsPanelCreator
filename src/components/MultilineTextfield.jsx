import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function MultilineTextField({ setContentOfBubble }) {
  const [isToolong, setIsToolong] = useState(false);

  return (
    <div>
      <TextField
        inputProps={{ maxLength: 45 }}
        id="standard-multiline-flexible"
        label="speech bubble text"
        multiline
        maxRows={8}
        onInput={(e) => {
         setContentOfBubble(e.target.value);

          e.target.value.length === 45
            ? setIsToolong(true)
            : setIsToolong(false);
        }}
        variant="standard"
      />
      {isToolong && <p>No more space!</p>}
    </div>
  );
}
