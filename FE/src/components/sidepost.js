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
    minWidth: 100,
    maxWidth: 200,
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
          image="https://thumbs-prod.si-cdn.com/yWWH1nprqD5BY8wd7s5SCPxUYJU=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/bf/4e/bf4ec3eb-669f-4a1d-87ad-dd83f81c384d/4694899147_fcd4b69350_o.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            goldfish
          </Typography>
          <Typography component="p">
            Goldfish are cooler thank you think
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
