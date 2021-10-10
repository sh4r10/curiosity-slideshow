import React, {useContext, useState} from "react";
import { StateContext } from "../../store/Context";
import { useStyles } from "./Slideshow.styles";
import { Button } from "@material-ui/core";

/* TODO in this file:
- Retrieve the photos data from the context state
- Create a slideshow according to document specification
- If no photos available the user should be redirected back to '/'
*/

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const {photos} = useContext(StateContext);
  const max = useContext(StateContext).photos?.length ?? 1;

  const classes = useStyles();

  const previous = () =>{
    if(index>1){
      setIndex(index-1);
    }
  }

  const next = () => {
    if((max-1)> index){
      setIndex(index+1);
    }
  }

  const currentSrc = photos?.[index]?.img_src;

  return (
    <div className={classes.rootContainer}>
      <img src={currentSrc} alt='' style={{maxWidth: '100%', maxHeight:'100%', position: 'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}/>
      <Button className={`${classes.btn} ${classes.prev}`} variant="contained" onClick={previous}>Previous</Button>
      <Button className={`${classes.btn} ${classes.next}`}variant="contained" onClick={next}>Next</Button>
      <h3 className={classes.counter  }>{`${index}/${max}`}</h3>
    </div>
  );
};

export default Slideshow;
