import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Blog({title,body}) {
  return (
    <Card sx={{ maxWidth: 275, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
