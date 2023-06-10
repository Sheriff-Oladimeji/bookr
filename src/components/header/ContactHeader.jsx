

const ContactHeader = () => {
  return (
    <div className="relative max-h-[400px] w-full">
          <div className="max-h-[400px] bg-black/40 absolute w-full h-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact us</h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb20lMjB3ZWJzaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full max-h-[400px] object-cover"
      />
    </div>
  );
}

export default ContactHeader