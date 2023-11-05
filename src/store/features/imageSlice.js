import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data';

const initialState = {
  images: [...data],
  selectedImages: [],
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    getImages: (state) => {
      return state;
    },
    setImages: (state, action) => {
      state.images = action.payload
    },
    deleteImages: (state) => {
      state.images = state.images.filter(
        (image) => !state.selectedImages.includes(image)
      );
    },
    getSelectedImages: (state) => {
      return state;
    },

    setSelectedImages: (state, action) => {
      state.selectedImages.includes(action.payload)
        ? (state.selectedImages = state.selectedImages.filter(
            (image) => image !== action.payload
          ))
        : (state.selectedImages = action.payload);
    },
    clearSelectedImages: (state) => {
      state.selectedImages = [];
    },
  },
});

export const {
  getImages,
  setImages,
  setSelectedImages,
  getSelectedImages,
  clearSelectedImages,
  deleteImages,
} = imageSlice.actions;
export default imageSlice.reducer;
