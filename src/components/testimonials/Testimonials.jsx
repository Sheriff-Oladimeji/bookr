import data from "../../data/testimonial.json";
import Marquee from "react-fast-marquee";
const Testimonials = () => {
  return (
    <section >
      <h1 className="font-bold text-4xl md-text-6xl text-center cursive my-8">
        Testimonials
      </h1>
      <Marquee>
        <main className="flex flex-row h-full gap-8 mb-20">
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
              <p className="text-sm max-w-sm">{card.testimony}</p>
            </div>
          ))}
        </main>
      </Marquee>
    </section>
  );
};

export default Testimonials;
