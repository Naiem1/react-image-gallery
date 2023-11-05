import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import useHeader from '../../hooks/userHeader';
import Checkbox from '../shared/Checkbox';
import Backdrop from '../shared/UI/Backdrop';

const Header = () => {
  const selectedImages = useSelector((state) => state.image.selectedImages);
  const dispatch = useDispatch();
  const { clearSelectedHandler, onDeleteImageHandler } = useHeader(dispatch);

  return (
    <div className="navbar header">
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
