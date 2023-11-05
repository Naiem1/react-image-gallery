import { clearSelectedImages, deleteImages } from "../store/features/imageSlice";

const useHeader = (dispatch) => {
  const onDeleteImageHandler = () => {
    dispatch(deleteImages());
    dispatch(clearSelectedImages());
  };

  const clearSelectedHandler = () => {
    dispatch(clearSelectedImages());
  };


  return {
    onDeleteImageHandler,
    clearSelectedHandler,
  }
}


export default useHeader;