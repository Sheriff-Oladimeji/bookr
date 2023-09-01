import data from  "../../data/testimonial.json"

const Testimonials = () => {
 
  return (
    <section className="w-[90%] my-20 font-mont mx-auto ">
      <h1 className="font-bold text-4xl md-text-6xl text-center cursive my-8">Testimonials</h1>
      <main className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {data.map((card) => (
          <div
            key={card.id}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full p-4 py-4 rounded-md"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={card.image}
                alt={card.name}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h4 className="text-[24px]">{card.name}</h4>
            </div>
            <p className="text-[16px]">{card.testimony}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
