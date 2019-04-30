import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

const styles = theme => ({
  container: {
    display: "flex",

    flexFlow: "column wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})

class OutlinedTextFields extends React.Component {
  state = {}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Post"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="default" className={classes.button}>
          Upload
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </form>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
