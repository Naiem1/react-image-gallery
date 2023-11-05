import { MdDelete } from 'react-icons/md';
import Checkbox from '../shared/Checkbox';
import { useSelector } from 'react-redux';

const Header = () => {
  const selectedImages = useSelector(state => state.image.selectedImages);

  return (
    <div className="navbar h-[10px] bg-base-100  border border-b-gray-300  rounded-tl-lg rounded-tr-lg">
      <div className="flex-1 items-center">
        <a className="btn btn-ghost normal-case text-xl">Gallery</a>

        <Checkbox />
        <h4 className="font-bold">3 item selected</h4>
      </div>

      {selectedImages.length < 0 ? (
        <button className="btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md">
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
