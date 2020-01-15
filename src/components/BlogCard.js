import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import tempImage from "../images/temp.jpg"

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  chip: {
    margin: 10,
  },
  media: {
    height: 140,
  },
})

export default function BlogCard({ date, description, title, urlPath }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tempImage}
          title="(Image title...)"
        />
        <Chip
          className={classes.chip}
          label="vim"
          clickable
          color="primary"
          size="small"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
