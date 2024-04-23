function Portfolio() {
  const listImages = [
    {
      id: 1,
      image: "/images/portfolio/image1.png",
      name: "OrdiSwap",
    },
    {
      id: 2,
      image: "/images/portfolio/image2.png",
      name: "Inscribe",
    },
    {
      id: 3,
      image: "/images/portfolio/image3.png",
      name: "RivusDAO",
    },
    {
      id: 4,
      image: "/images/portfolio/image4.png",
      name: "Memecoin",
    },
    {
      id: 5,
      image: "/images/portfolio/image5.png",
      name: "Architex",
    },
    {
      id: 6,
      image: "/images/portfolio/image6.png",
      name: "Komputai",
    },
    {
      id: 7,
      image: "/images/portfolio/image7.png",
      name: "NavyAI",
    },
    {
      id: 8,
      image: "/images/portfolio/image8.png",
      name: "BlockGames",
    },
    {
      id: 9,
      image: "/images/portfolio/image9.png",
      name: "GwynToken",
    },
  ];
  return (
    <div className="relative">
      <img
        src="/images/portfolio/light-1.png"
        alt="light-1"
        className="absolute right-0 -top-24"
      />
      <img
        src="/images/portfolio/light-2.png"
        alt="light-2"
        className="absolute left-0 top-[700px]"
      />
      <div className="container pt-36">
        <h1 className="text-[32px] md:text-[38px] lg:text-[42px] xl:text-[51px] font-extrabold w-full text-center">
          Our Portfolio
        </h1>
        <div className="mt-[80px] sm:mt-[100px] grid grid-cols-2 md:grid-cols-3 gap-[32px] justify-center w-full">
          {listImages.map((image) => (
            <div
              className="border rounded-[12px] border-white/10 overflow-hidden w-full"
              key={image.id}
            >
              <img
                src={image.image}
                alt={image.image}
                className="w-full object-cover"
              />
              <div className="bg-white/5 pt-4 pb-5 px-5 sm:text-[18px] font-light text-sm">
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
