import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export default function OpenReportModal({ name }) {
  const nameCity = !name ? "Vancouver" : name;
  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "left",
        padding: "1rem",
        borderRadius: 5,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: 30, margin: 0 }}
        >
          {nameCity}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{
            fontSize: 14,
            margin: 0,
            justifySelf: "flex-end",
            backgroundColor: "red",
            padding: "0.5rem",
          }}
        >
          Create report
        </Button>
      </CardActions>
    </Card>
  );
}
