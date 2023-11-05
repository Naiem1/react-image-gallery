import Carousel from "../components/Carousel";
import ImageGallery from "../components/ImageGallery";
import Backdrop from "../components/shared/UI/Backdrop";

const Gallery = () => {
  return (
    <div className="h-[88vh] w-full bg-white shadow-md overflow-auto rounded-bl-lg rounded-br-lg">
      <ImageGallery />
      
    </div>
  );
};

export default Gallery;

