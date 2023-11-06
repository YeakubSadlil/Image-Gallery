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
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";

function App() {
  const [images, setImages] = useState(imagedata);
  const [isHovered, setIsHovered] = useState({ id: null, value: false });
  const [selectedItem, setSelectedItem] = useState([]);

  const handleMouseOver = (id) => {
    setIsHovered({ id: id, value: true });
  };
  
  const handleMouseOut = (id) => {
    setIsHovered({ id: id, value: false });
  };

  const handleSelected = (id) => {               // handle checkbox selection
    if (selectedItem.includes(id)) {             // if the image is already selected  and clicked to unselect remove it from the selected item list
      const updateItem = selectedItem.filter((item) => item !== id);
      setSelectedItem(updateItem);
    } else {                                     // if the image is not selected and clicked to select add it to the selected item list
      setSelectedItem((pre) => [...pre, id]);
    }
  };
  // console.log(selectedItem)
  return (
    <Box sx={{ py: "20px", px: "10px" }}>
      <Card
        sx={{ padding: "10px", border: "1px solid gray", borderRadius: "10px" }}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`grid-item ${index === 0 ? "feature-image" : ""}`}
            >
              <Card sx={{ border: "1px solid gray", borderRadius: "10px" }}>
                <CardActionArea
                  onMouseOver={() => handleMouseOver(image.id)}
                  onMouseOut={() => handleMouseOut(image.id)}
                >
                  {(isHovered.id === image.id || // show checkbox for only the image that is hovered
                    selectedItem.includes(image.id)) && ( // or show checkboxes only for the images that are selected
                    <CardHeader // otherwise checkboxes will not be shown
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
      </Card>
    </Box>
  );
}

export default App;
