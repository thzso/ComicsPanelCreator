
import Radio from "@mui/material/Radio";

export default function RadioButtons({getFilterColor}) {
  

  const handleChange = (event) => {
    
    getFilterColor(event.target.value)
  
  };

  const controlProps = (item) => ({
    // checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  

  return (
    <div>
      <Radio
        {...controlProps("img--filter_first")}
        // value="img--filter_first"
        sx={{
          color: "#652269",
          "&.Mui-checked": {
            color: "#652269",
          },
        }}
      />
      <Radio
        {...controlProps("img--filter_second")}
        sx={{
          color: "#4dcec8",
          "&.Mui-checked": {
            color: "#4dcec8",
          },
        }}
      />
      <Radio
        {...controlProps("img--filter_third")}
        sx={{
          color: "#2ebe66",
          "&.Mui-checked": {
            color: "#2ebe66",
          },
        }}
      />
      <Radio
        {...controlProps("img--filter_fourth")}
        sx={{
          color: "#fafd6d",
          "&.Mui-checked": {
            color: "#fafd6d",
          },
        }}
      />
      <Radio
        {...controlProps("img--filter_fifth")}
        sx={{
          color: "#ffffff",
          "&.Mui-checked": {
            color: "#ffffff",
          },
        }}
      />
    </div>
  );
}
