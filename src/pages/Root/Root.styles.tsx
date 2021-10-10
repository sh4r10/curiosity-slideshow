import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  rootcontainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "relative",
    background: "#f7f7f7",
    alignItems: "center",
  },

  button: {
    "&.MuiButton-root": {
      backgroundColor: "#0000FF48",
      color: "white",
      width: "200px",
      '&:hover': {
        backgroundColor: "#fff",
        color: '#0000FF48'
      }
    },
  },
}));
