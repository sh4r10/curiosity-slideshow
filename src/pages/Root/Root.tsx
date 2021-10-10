import React, { useContext, useEffect } from "react";
import axios from "axios";
import { StateContext, DispatchContext } from "../../store/Context";
import { setManifest, setPhotos } from "../../store/Actions";
import { useStyles } from "./Root.styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

/* TODO in this file:
- Declare the type for the photos response (see type ManifestResponse for help)
- Fetch photos taken by the curiosity rover at 2020-09-27 (earth date) (API docs: https://api.nasa.gov/index.html)
- Utilize context to dispatch the photo data from the request to NASA (the store can be found in src/store)
- "Show slideshow" button should be hidden when no photos data is available
*/

export type ManifestResponse = {
  photo_manifest: {
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    photos: Array<{
      cameras: string[];
      earth_date: string;
      sol: number;
      total_photos: number;
    }>;
    status: string;
    total_photos: number;
  };
};

export type PhotoResponse = {
  photos: Array<{
    id: number;
    sol: number;
    camera: {
      id: number;
      name: string;
      rover_id: number;
      full_name: string;
    };
    img_src: string;
    earth_date: string;
    rover:{
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    }
  }>
};

const Root = () => {
  const { manifest, photos } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const history = useHistory();
  const classes = useStyles();

  /*const API_KEY = "7JPxXLG7jt4HrODSGLDRJvhVFYgle7bfn665ZpOc";*/
  const API_KEY = "uSNa6EcVb5VUx0RbmgNdHTHciPNvJerUAg0AzQNM";

  useEffect(() => {
    (async () => {
      const {data: { photo_manifest },} = await axios.get<ManifestResponse>(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=${API_KEY}`,
      );

      const {data: {photos}} = await axios.get<PhotoResponse>(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-9-27&api_key=${API_KEY}`
      );
      
      dispatch(setManifest(photo_manifest));
      dispatch(setPhotos(photos));
    })();
  }, [dispatch]);

  return (
    <div className={classes.rootcontainer}>
      {manifest && <h1>{`${manifest.name} is ${manifest.status}!`}</h1>}
      {(photos === undefined || photos.length === 0) ? '' :
      <Button classes={{ text: classes.button }} onClick={() => {history.push("/slideshow");}}>
        Show slideshow
      </Button>}
    </div>
  );
};

export default Root;
