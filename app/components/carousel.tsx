"use client";

import useContactForm from "@/hooks/useContactForm";

const data = [
  {
    src: "slide1.jpg",
    title: "подарунковий сертифікат",
  },
  {
    src: "slide2.jpg",
    title: "ретушування",
  },
  {
    src: "slide3.jpg",
    title: "виїзна фотоз'йомка",
  },
  {
    src: "slide4.jpg",
    title: "навчання",
  },
];

export const Carousel = () => {
  const { onAsk } = useContactForm();

  const onDetails = (req: string) => {
    onAsk(req);
    window.location.href = "#contacts";
  };

  return (
    <>
      <div id="services" className="text-center py-10 bg-black w-full h-full ">
        <h1 className="font-sans tracking-wider text-4xl text-white uppercase">
          Додаткові послуги
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((slide, i) => {
          const { src, title } = slide;
          return (
            <div key={i} className="relative md:h-[550px] h-96 group flex items-center justify-center overflow-hidden">
              <img
                src={src}
                alt={`Servises image ${i+1}`}
                className="absolute inset-0 object-cover w-full h-full md:group-hover:opacity-60"
              />
              {/* Hidden content for desktop*/}
              <div
                className="transition-all transform
                                translate-y-10 sm:opacity-100
                                group-hover:opacity-100
                                md:group-hover:translate-y-0"
              >
                <div className="  flex flex-col items-center justify-center">
                  <p className="md:text-lg text-white uppercase md:tracking-wide text-center">
                    {title}
                  </p>
                  <button
                    onClick={() => onDetails(title)}
                    className="px-4 py-2 text-sm text-white bg-gray-600"
                  >
                    Деталі
                  </button>
                </div>
              </div>
              {/* End of hidden content */}
            </div>
          );
        })}
      </div>
    </>
  );
};
