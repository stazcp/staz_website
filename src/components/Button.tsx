import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'black',
      boxShadow: '0 0 10px rgb(0, 0, 0)', // Solid black shadow on hover
      // If you want to change the color of the text on hover, you can do it like this:
      color: 'white',
    },
  },
})

export default function MyButton() {
  const classes = useStyles()

  return <Button className={classes.root}>Hover over me</Button>
}
