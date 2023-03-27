
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";
import {InputLabel} from "@mui/material";

export default function SelectCharacter({ setNameOfChar }) {

  const options = ['Acrok', 'Aome', 'Dechameron', 'Jack', 'Olak', 'Rirke', 'Uon', 'Weapon']

  return (
    <div>
    <InputLabel id="selectLabel" sx={{color: "white"}}>Choose Character</InputLabel>
      <Select
      defaultValue={""}
      style={{minWidth: 200}}
      variant="outlined"
      labelId="selectLabel"
      onChange={(e)=>setNameOfChar(e.target.value)}
      
      >
        {options.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
      </Select>

    </div>
  );
}
