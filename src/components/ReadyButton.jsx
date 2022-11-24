import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function ReadyButton({showCardOnly}) {

const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <Box>
        <Button variant="outlined"  onClick={() => {
          setIsClicked(!isClicked)
          showCardOnly(isClicked)
          console.log(isClicked)
  }}>Ready</Button>
      </Box>
    </>
  );
}
