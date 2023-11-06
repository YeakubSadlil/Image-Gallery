import { useState } from "react";
import { imagedata } from "./images";
import "./Gallery-Style.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Checkbox,
} from "@mui/material";

function App() {
  const [images, setImages] = useState(imagedata);
  const [isHovered, setIsHovered] = useState({ id: null, value: false });
  const [selectedItem, setSelectedItem] = useState([]);

  const handleMouseOver = (id) => {
    setIsHovered({ id: id, value: true });
  };
  // console.log(isHovered)
  const handleMouseOut = (id) => {
    setIsHovered({ id: id, value: false });
  };

  const handleSelected = (id) => {					// store all the selected images id in an array
    setSelectedItem((pre) => [...pre, id]);
    // console.log(selectedItem);
  };

  return (
    <Box sx={{ py: "20px", px: "10px" }}>
      <div className="image-grid">
      {/* add image-grid class which will create grid-layout with 5 spans */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`grid-item ${index === 0 ? "feature-image" : ""}`}  // Set the 1st image(index = 0) as the feature image
          >
            <Card sx={{ border: "1px solid gray", borderRadius: "10px" }}>
              <CardActionArea
                onMouseOver={() => handleMouseOver(image.id)}
                onMouseOut={() => handleMouseOut(image.id)}
              >
                {((isHovered.id === image.id ) ||
                  selectedItem.includes(image.id)) && (
                  <CardHeader
                    sx={{ position: "absolute" }}
                    title={
                      <Box>
                        <Checkbox onClick={() => handleSelected(image.id)} />
                      </Box>
                    }
                  />
                )}
                <CardMedia
                  component="img"
                  image={image.imgPath}
                  alt={image.imgPath}
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