import {
  DndContext,
  DragOverlay,
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
import { setImageIndex, setSelectedImages } from '../store/features/imageSlice';
import { open } from '../store/features/toggleSlice';
import Grid from './Grid';
import SortableImage from './SortableImage';
import { useCallback, useEffect, useState } from 'react';
import data from '../data/data';
import ImageItem from './ImageItem';

const ImageGallery = () => {
  const images = useSelector((state) => state.image.images);
  const dispatch = useDispatch();


  const [items, setItems] = useState([...data]);
  const [activeId, setActiveId] = useState(null);

  // useEffect(() => {
  //   setItems([...images]);
  // }, [images]);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);
  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const handleImageSelection = (id) => {
    dispatch(setSelectedImages(id));
  };
  
  // const {
  //   images: items,
  //   handleDragStart,
  //   handleDragEnd,
  //   handleDragCancel,
  //   handleImageSelection,
  // } = useImageGallery(images, dispatch, arrayMove);
  
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
      <SortableContext items={images} strategy={rectSortingStrategy}>
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
