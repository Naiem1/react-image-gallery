import { forwardRef } from 'react';
import { HiViewfinderCircle } from 'react-icons/hi2';
import './../styles.css';
import Checkbox from './shared/Checkbox';

// eslint-disable-next-line react/display-name
const Item = forwardRef(
  ({ id, withOpacity, isDragging, url, style, index, ...props }, ref) => {
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

    return (
      <div style={inlineStyles} className="image-container">
        <div
          ref={ref}
          {...props}
          style={{ width: '100%', height: '100%' }}
          className="image"
        ></div>

        <div
          style={{
            position: 'absolute',
            with: '100%',
            zIndex: 200,
            top: 0,
            left: 0,
          }}
          className="checkbox-input"
        >
          <Checkbox className="bg-white" onChange={() => console.log(index)} />
        </div>
        <div
          style={{
            position: 'absolute',
            with: '100%',
            zIndex: 200,
            top: '0',
            right: '0',
            fontSize: '25px',
            padding: '5px'
          }}
        >
          <button className="btn btn-sm icon-btn show-image" onClick={() => alert('done')}>
            <HiViewfinderCircle />
          </button>
        </div>
      </div>
    );
  }
);

export default Item;
