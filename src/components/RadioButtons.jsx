import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";

export default function RadioButtons({ setFilterColorClass }) {
  const handleChange = (event) => {
    setFilterColorClass(event.target.value);
  };

  const controlProps = (item) => ({
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <RadioGroup row>
        <Radio
          {...controlProps("img--filter_first")}
          sx={{
            color: "#652269",
            "&.Mui-checked": {
              color: "#652269",
            },
            padding: "6px"
          }}
        />
        <Radio
          {...controlProps("img--filter_second")}
          sx={{
            color: "#4dcec8",
            "&.Mui-checked": {
              color: "#4dcec8",
            },
            padding: "6px"
          }}
        />
        <Radio
          {...controlProps("img--filter_third")}
          sx={{
            color: "#2ebe66",
            "&.Mui-checked": {
              color: "#2ebe66",
            },
            padding: "6px"
          }}
        />
        <Radio
          {...controlProps("img--filter_fourth")}
          sx={{
            color: "#fafd6d",
            "&.Mui-checked": {
              color: "#fafd6d",
            },
            padding: "6px"
          }}
        />
        <Radio
          {...controlProps("img--filter_fifth")}
          sx={{
            color: "#ffffff",
            "&.Mui-checked": {
              color: "#ffffff",
            },
            padding: "6px"
          }}
        />
      </RadioGroup>
    </div>
  );
}
