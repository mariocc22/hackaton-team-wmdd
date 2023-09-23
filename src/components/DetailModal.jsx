import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

export default function DetailModal({ details }) {
  console.log("details", details);
  const [activeModal, setActiveModal] = useState({
    name: details.item.name,
    type: details.item.type,
    image: details.item.image,
    postedDate: details.item.postedDate,
    dateResolved: details.item.endDate,
    reportBy: details.item.reporterName,
  });

  console.log("activeModal", activeModal);

  // const detailsPlace = {
  //   name: details.name ,
  //   type: details.type ,
  //   datePosted: details.datePosted ,
  //   dateResolved: details.dateResolved,
  //   reportBy: details.reportBy
  // };
  // console.log("detailsPlace", detailsPlace);
  // const detailsPlace = {
  //   name: details?.name || "Pacific Center Mall",
  //   type: details?.type || "Construction",
  //   datePosted: details?.datePosted || "2021-10-08",
  //   dateResolved: details?.dateResolved || "2021-10-10",
  //   reportBy: details?.reportBy || "John Doe",
  // };

  return (
    <Card sx={{ maxWidth: 300, textAlign: "left", borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={activeModal.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontWeight: "bold" }}
            component="div"
          >
            {activeModal.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Type: </span>
            {activeModal.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Date posted: </span>
            {activeModal?.postedDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Date Resolved: </span>
            {activeModal.dateResolved}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Report by: </span>
            {activeModal.reportBy}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
