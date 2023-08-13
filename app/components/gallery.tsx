interface Image {
  src: string;
  alt: string;
}
type Images = Image[][];

export const Gallery = () => {
  const images: Images = [];

  for (let i = 0; i < 4; i++) {
    const keys: Record<string, number> = {
      0: 1,
      1: 4,
      2: 7,
      3: 10,
    };

    images[i] = Array.from({ length: 3 }, (_, index) => ({
      src: `/g${index + keys[i]}.jpg`,
      alt: `Gallery mage ${index + keys[i]}`,
    }));
  }

  return (
    <>
      <div
        id="servises-title"
        className="text-center py-10 bg-black w-full h-full "
      >
        <h1 className="font-sans tracking-wider text-4xl text-white uppercase">
          Галерея
        </h1>
      </div>
      <div id="gallery" className="p-4 px-8 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((_, i) => {
            return (
              <div key={'section' + i} className="grid gap-2">
                {images[i].map(({ src, alt }, index) => {
                  return (
                    <div key={'item'+ index}>
                      <img className="h-auto max-w-full " src={src} alt={alt} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
