import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useDispatch, useSelector } from 'react-redux';
import useImageGallery from '../hooks/useImageGallery';
import Grid from './Grid';
import SortableImage from './SortableImage';

const ImageGallery = () => {
  const imagesData = useSelector((state) => state.image.images);
  const dispatch = useDispatch();
  
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const {
    images,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleImageSelection,
    handleToggleOpen,
  } = useImageGallery(imagesData, dispatch, arrayMove);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <Grid>
          {images.map((image, index) => (
            <SortableImage
              key={image}
              url={image}
              id={image}
              index={index}
              handleImageSelection={handleImageSelection}
              handleToggleOpen={handleToggleOpen}
            />
          ))}
        </Grid>
      </SortableContext>
    </DndContext>
  );
};

export default ImageGallery;
