import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../../store/features/toggleSlice';

const Backdrop = ({ children }) => {
  const dispatch = useDispatch();
  const toggleOpen = useSelector((state) => state.toggle.toggle);

  const onToggleHandler = () => {
    dispatch(open());
  };

  return (
    <>
      {toggleOpen ? (
        <div className="fixed w-full h-screen bg-[#2d2929b6] z-[900] left-0 right-0 bottom-0 top-0 grid place-items-center">
          <button
            onClick={onToggleHandler}
            className="btn btn-warning btn-outline btn-circle absolute right-2 top-2 text-xl"
          >
            <RxCross2 />
          </button>

          <div className="w-3/4  h-4/5">{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Backdrop;
