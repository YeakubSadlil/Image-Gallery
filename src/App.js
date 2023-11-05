import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  Checkbox,
} from "@mui/material";
import { imagedata } from "./images.js";
import "./Gallery-Style.css";
import { useState } from "react";

function App() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [isHovered, setHovered] = useState({ id: null, value: false });

  const handleMouseHover = (id) => {
    setHovered({ id: id, value: true });
  };
  const handleMouseOut = (id) => {
    setHovered({ id: id, value: false });
  }
  const handleSelected = (id) => {
    setSelectedItem((pre) => [...pre, id]);
    console.log(selectedItem);
  };
  //console.log(isHovered);

  return (
    <Box sx={{ px: "10px", py: "10px" }}>
      <div className="image-grid">
        {" "}
        {/* add image-grid class which will create grid-layout with 5 spans */}
        {imagedata.map((image, index) => (
          <div
            key={index}
            className={index === 0 ? "feature-image" : "grid-item"} // Set the 1st image(index = 0) as the feature image
          >
            <Card sx={{ border: "1px solid red", BorderRadius: "15px" }}>
              <CardActionArea onMouseOver={() => handleMouseHover(image.id)}
                              onMouseOut={() => handleMouseOut(image.id)}>
                <CardHeader
                  title={
                    <Box>
                      <Checkbox onClick={() => handleSelected(image.id)}/>
                    </Box>
                  }
                />
                <CardMedia
                  component="img"
                  image={image.imgPath}
                  alt={"image"}
                />
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default App;
