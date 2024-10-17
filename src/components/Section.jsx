import GenderImage from "/assets/home/Gender.jpg";

export default function Section({ imgSrc = GenderImage, label }) {
  return (
    <section className="bg-primary text-white">
      <div className="relative h-52">
        <img alt={label} className="w-full h-full object-cover" src={imgSrc} />
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-50">
          {/*<h1 className="text-4xl font-bold">{label}</h1>*/}
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-4xl font-bold">{label}</h1>
        </div>
      </div>
    </section>
  );
}
