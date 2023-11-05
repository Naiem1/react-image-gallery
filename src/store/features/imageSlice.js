import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data';

const initialState = {
  images: [...data],
  selectedImages: [],
  imageIndex: 0,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    getImages: (state) => {
      return state;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    deleteImages: (state, action) => {
      state.images = state.images.filter(
        (image) => !state.selectedImages.includes(image)
      );
    },
    getSelectedImages: (state) => {
      return state;
    },

    setSelectedImages: (state, action) => {
      console.log(action.payload);
      state.selectedImages.includes(action.payload)
        ? (state.selectedImages = state.selectedImages.filter(
            (image) => image !== action.payload
          ))
        : state.selectedImages.push(action.payload);
    },
    clearSelectedImages: (state) => {
      state.selectedImages = [];
    },

    setImageIndex: (state, action) => {
      const currentIndex = state.images.findIndex(
        (image) => image === action.payload
      );
      state.imageIndex = currentIndex;
    },

    resetImageIndex: (state) => {
      state.imageIndex = 0;
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
  setImageIndex,
  resetImageIndex
} = imageSlice.actions;
export default imageSlice.reducer;
