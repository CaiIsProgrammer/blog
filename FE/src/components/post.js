import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    width: 250,
    height: 350,
    margin: 10,
  },
  media: {
    height: 150,
  },
}

function MediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.pImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pName}
          </Typography>
          <Typography component="p">{props.pPost}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions />
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCard)
