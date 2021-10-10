import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(() => ({
    rootContainer: {
        width: '100%',
        height: '100vh',
        background: '#f7f7f7',
        overflow: 'hidden',
      },
    btn: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '20px',
        width: '200px',
        backgroundColor: '#0000FF',
        opacity: '30%',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#0000FF',
        }
    },
    prev: {
        left: 0
    }, 
    next: {
        right: 0
    },
    counter: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: '20px'
    }
}));