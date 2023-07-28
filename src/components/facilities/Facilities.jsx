import data from "../../data/facilities.json"

const Facilities = () => {
  return (
    <section className="w-[90%] my-20 font-mont mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl mb-3">
          Visit Our Famous Facilities
        </h1>
        <p className="max-w-xl mx-auto text-lg">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
      </div>
      <main>
        {data.map((data) => (
          <div
            key={data.id}
            className={`flex flex-col ${
              data.id === 2 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-20 mb-8`}
          >
            <img
              src={data.img}
              alt={data.title}
              className="flex-1 h-[400px] object-cover rounded-xl w-full md:w-[600px] "
            />
            <div className="flex-1">
              <h3 className="text-3xl text-dark font-bold font-lato max-w-lg mb-4">
                {data.title}
              </h3>
              <p className="text-lg">{data.desc}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Facilities