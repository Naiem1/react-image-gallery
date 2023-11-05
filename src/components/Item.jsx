import { forwardRef } from 'react';
import { HiViewfinderCircle } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import './../styles.css';
import Checkbox from './shared/Checkbox';

// eslint-disable-next-line react/display-name
const Item = forwardRef(
  (
    {
      id,
      handleImageSelection,
      handleToggleOpen,
      url,
      style,
      index,
      ...props
    },
    ref
  ) => {
    const inlineStyles = {
      transformationOrigin: '0, 0',
      height: index === 0 ? 410 : 200,
      gridColumnStart: index === 0 ? 'span 2' : null,
      gridRowStart: index === 0 ? 'span 2' : null,
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '5px',
      border: '1px solid rgb(204, 207, 210)',
      color: 'white',
      position: 'relative',
      zIndex: 100,
      ...style,
    };

    const selectedImages = useSelector((state) => state.image.selectedImages);

    return (
      <div style={inlineStyles} className="image-container">
        <div
          ref={ref}
          {...props}
          className={`image  width: '100%', height: '100%' ${
            selectedImages.includes(id) ? 'checked-overlay' : null
          }`}
        ></div>

        <div
          className={`absolute w-full z-[200] top-0 left-0 checkbox-input ${
            selectedImages.includes(id) ? 'block' : 'hidden'
          }`}
        >
          <Checkbox
            className="bg-white"
            checked={selectedImages.includes(id)}
            onChange={() => handleImageSelection(id)}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            with: '100%',
            zIndex: 200,
            top: '0',
            right: '0',
            fontSize: '25px',
            padding: '5px',
          }}
          className={`show-image-icon `}
        
        >
          <button
            className={`btn btn-primary text-white btn-sm icon-btn  `}
            onClick={() => handleToggleOpen(id)}
          >
            <HiViewfinderCircle />
          </button>
        
        </div>
      </div>
    );
  }
);

export default Item;
