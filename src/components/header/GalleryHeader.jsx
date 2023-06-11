

const GalleryHeader = () => {
  return (
    <div className="relative max-h-[400px] w-full font-mono">
      <div className="max-h-[400px] bg-black/30 absolute w-full h-full  flex py-4 flex-col justify-center items-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">Gallery</h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1579488081688-3dbbbae7893e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full max-h-[400px] object-cover "
      />
    </div>
  );
}

export default GalleryHeader