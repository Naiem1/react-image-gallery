import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSelectedImages,
  deleteImages,
} from '../../store/features/imageSlice';
import Checkbox from '../shared/Checkbox';
import Backdrop from '../shared/UI/Backdrop';

const Header = () => {
  const selectedImages = useSelector((state) => state.image.selectedImages);
  const dispatch = useDispatch();

  const onDeleteImageHandler = () => {
    console.log('deleted');
    dispatch(deleteImages());
    dispatch(clearSelectedImages());
  };

  const clearSelectedHandler = () => {
    dispatch(clearSelectedImages());
  };

  console.log('[Header.js]', selectedImages);
  return (
    <div className="navbar h-[10px] bg-base-100  border border-b-gray-300  rounded-tl-lg rounded-tr-lg">
      <div className="flex-1 items-center">
        <a className="btn btn-ghost normal-case text-xl">Gallery</a>

        {selectedImages.length > 0 && (
          <div className="flex items-center">
            <Checkbox
              checked={selectedImages.length > 0 ? 'checked' : null}
              onChange={clearSelectedHandler}
            />
            <h4 className="text-lg font-bold">
              {selectedImages.length} File selected
            </h4>
          </div>
        )}
      </div>
      <Backdrop />
      {selectedImages.length > 0 ? (
        <button
          onClick={onDeleteImageHandler}
          className="btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md"
        >
          Delete
          <span className="text-xl">
            <MdDelete />
          </span>
        </button>
      ) : null}
      <div className="flex-none"></div>
    </div>
  );
};

export default Header;
