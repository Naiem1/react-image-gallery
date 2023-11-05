import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { resetImageIndex } from '../../../store/features/imageSlice';
import { open } from '../../../store/features/toggleSlice';
import Carousel from '../../Carousel';

const Backdrop = () => {
  const dispatch = useDispatch();
  const toggleOpen = useSelector((state) => state.toggle.toggle);

  const onToggleHandler = () => {
    dispatch(resetImageIndex());
    dispatch(open());
  };

  return (
    <>
      {toggleOpen ? (
        <div className="overflow-hidden fixed w-full h-screen bg-[#2d2929b6] z-[900] left-0 right-0 bottom-0 top-0 grid place-items-center">
          <button
            onClick={onToggleHandler}
            className="btn btn-warning btn-outline btn-circle absolute right-0 md:right-2 top-0 md:top-2 text-xl "
          >
            <RxCross2 />
          </button>

          <div className="w-[90%] h-[90%] bg-slate-50 relative z-[99999] ">
            <Carousel />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Backdrop;
