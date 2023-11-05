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
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedImages } from '../store/features/imageSlice';
import Grid from './Grid';
import SortableItem from './SortableItem';
import { open, toggleState } from '../store/features/toggleSlice';

const ImageGallery = () => {
  const images = useSelector((state) => state.image.images);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setItems([...images]);
  }, [images]);

  const [activeId, setActiveId] = useState(null);
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
    console.log('inside-handler', id);
    dispatch(setSelectedImages(id));
  };


  const toggleOpen = useSelector(state => state.toggle);

  const handleToggleOpen = (id) => {
    dispatch(open())
  }

  console.log(toggleOpen);


  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={5}>
          {items.map((image, index) => (
            <SortableItem
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
