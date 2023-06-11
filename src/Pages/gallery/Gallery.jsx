
import Footer from "../../components/footer/Footer";
import GalleryHeader from "../../components/header/GalleryHeader"
import images from  "../../data/gallery.json"

const Gallery = () => {
 
  return (
    <section>
      <GalleryHeader />
      <div className="w-[90%] md:w-[80%] mx-auto  grid sm:grid-cols-2 md:grid-cols-3 gap-8 my-40">
        {images.map((image) => (
          <div key={image.id} className="">
            <img
              src={image.imgUrl}
              alt=""
              className="w-full max-w-[500px]  h-[350px] object-cover scale-100 hover:scale-105  duration-200 rounded-lg"
            />
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Gallery