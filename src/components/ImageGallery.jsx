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
import { setImageIndex } from '../store/features/imageSlice';
import { open } from '../store/features/toggleSlice';
import Grid from './Grid';
import SortableImage from './SortableImage';

const ImageGallery = () => {
  const images = useSelector((state) => state.image.images);
  const dispatch = useDispatch();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const {
    images: items,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleImageSelection,
  } = useImageGallery(images, dispatch, arrayMove);

  const handleToggleOpen = (id) => {
    dispatch(open());
    dispatch(setImageIndex(id));
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid>
          {items.map((image, index) => (
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
