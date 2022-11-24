import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImagelistComponent({ itemData, getCharBckgrUrl }) {
  const sendCharBckgrUrl = (url) => {
    getCharBckgrUrl(url);
  };

  return (
    <div id="imagelist--container">
      <span>Select scene</span>
      <ImageList
        className="imagelist--items"
        sx={{ maxWidth: 500, height: 520 }}
        variant="woven"
        cols={4}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem className="imageList-item" key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              onClick={(e) => sendCharBckgrUrl(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
