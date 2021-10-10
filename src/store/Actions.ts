import { ManifestResponse, PhotoResponse } from "../pages/Root/Root";

// action types
const SET_MANIFEST = "SET_MANIFEST" as const;
const SET_PHOTOS = "SET_PHOTOS" as const;

// action functions
const setManifest = (manifest: ManifestResponse["photo_manifest"]) => ({
  type: SET_MANIFEST,
  payload: manifest,
});

const setPhotos = (photos: PhotoResponse["photos"]) => ({
  type: SET_PHOTOS,
  payload: photos,
});

// export action types
export { SET_MANIFEST };
export { SET_PHOTOS };

// export action functions
export { setManifest };
export { setPhotos };

// Export typings
export type Action = ReturnType<typeof setManifest | typeof setPhotos>;
