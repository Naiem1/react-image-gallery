import { useCallback, useEffect, useState } from 'react';
import { setSelectedImages } from '../store/features/imageSlice';

const useImageGallery = (imagesData, dispatch, arrayMove) => {
  const [images, setImages] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setImages([...imagesData]);
  }, [imagesData]);

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setImages((items) => {
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

 

  console.log('[useImageGallery]', images);
  return {
    images,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleImageSelection,
  };
};

export default useImageGallery;