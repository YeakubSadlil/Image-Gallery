import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { imagedata } from "./images.js";
import "./Gallery-Style.css";

function App() {
  return (
    <Box>
      <div className="image-grid">
        {imagedata.map((image, index) => (
          <div
            key={index}
            className={index === 0 ? "feature-image" : "grid-item"}  // Set the 1st image(index = 0) as the feature image
          >
            <Card>
              <CardMedia component="img" image={image.imgPath} alt={"image"} />  
            </Card>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default App;
