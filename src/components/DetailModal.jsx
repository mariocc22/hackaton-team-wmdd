import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DetailModal({ details }) {
  const detailsPlace = {
    name: details?.name || "Pacific Center Mall",
    type: details?.type || "Construction",
    datePosted: details?.datePosted || "2021-10-08",
    dateResolved: details?.dateResolved || "2021-10-10",
    reportBy: details?.reportBy || "John Doe",
  };

  return (
    <Card sx={{ maxWidth: 300, textAlign: "left", borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/src/assets/img_2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontWeight: "bold" }}
            component="div"
          >
            {detailsPlace.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Type: </span>
            {detailsPlace.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Date posted: </span>
            {detailsPlace.datePosted}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Date Resolved: </span>
            {detailsPlace.dateResolved}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: "black" }}>Report by: </span>
            {detailsPlace.reportBy}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
