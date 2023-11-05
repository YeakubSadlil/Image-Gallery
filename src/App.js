import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { imagedata } from "./images.js";
import "./Gallery-Style.css";

function App() {
  return (
    <Box sx={{ px: "10px", py: "10px" }}>
      <div className="image-grid">        {/* add image-grid class which will create grid-layout with 5 spans */}
        {imagedata.map((image, index) => (
          <div
            key={index}
            className={index === 0 ? "feature-image" : "grid-item"}   // Set the 1st image(index = 0) as the feature image
          >
            <Card sx={{ border: "1px solid red", BorderRadius: "15px" }}>
              <CardMedia component="img" image={image.imgPath} alt={"image"} />
            </Card>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default App;
