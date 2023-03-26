import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImagelistComponent({ setBckgrUrl }) {
  const images = [
    "space",
    "base",
    "bridge",
    "cellar",
    "city_ruins",
    "comms",
    "exit",
    "home_walt_weapon_jack",
    "jack",
    "labor_weapon",
    "underground",
    "desktop_bg",
  ];

  return (
    <div id="imagelist--container">
      <span>Select scene</span>
      <ImageList className="imagelist--items" variant="woven" cols={4} gap={8}>
        {images.map((image) => (
          <ImageListItem className="imageList-item" key={image}>
            <img
              src={`images/${image}.jpg`}
              alt={image}
              loading="lazy"
              onClick={(e) => setBckgrUrl(e.target.src)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
