import ImageGallery from '../components/ImageGallery';

const Gallery = () => {
  return (
    <div className="h-[88vh] w-full bg-white shadow-md overflow-auto rounded-bl-lg rounded-br-lg">
      <ImageGallery />
    </div>
  );
};

export default Gallery;
