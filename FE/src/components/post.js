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
    minWidth: 125,
    maxWidth: 250,
    height: 275,
    margin: 10,
  },
  media: {
    height: 140,
  },
}

function MediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.gannett-cdn.com/-mm-/487e45eb3deb72e80a2e8854ede1c881d56bcfcb/c=0-105-2125-1306/local/-/media/2018/03/13/USATODAY/USATODAY/636565439512580964-GettyImages-500798391.jpg?width=3200&height=1680&fit=crop"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles.
          </Typography>
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
