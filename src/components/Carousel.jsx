import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { swipeConfidenceThreshold, swipePower, variants } from '../utils/carousel';



const Carousel = () => {
  const currentImageIndex = useSelector((state) => state.image.imageIndex);
  const [[page, direction], setPage] = useState([currentImageIndex, 0]);
  const images = useSelector((state) => state.image.images);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div>
      <div className="w-full h-96 border">
        <AnimatePresence
          initial={false}
          custom={direction}
          style={{ width: '900px' }}
        >
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute h-full w-full will-change-transform"
          />
        </AnimatePresence>
      </div>
      <div
        className="next"
        onClick={() => paginate(-1)}
      >
        <BsArrowRightSquareFill />
      </div>
      <div
        className="prev"
        onClick={() => paginate(1)}
      >
        <BsArrowLeftSquareFill />
      </div>
    </div>
  );
};

export default Carousel;
