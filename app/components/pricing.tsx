import { Airplay, Gem, VenetianMask } from "lucide-react";

export const Pricing = () => {
  return (
    <div id="pricing" className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10 md:mb-16">
      <div className="md:container px-4 mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-sans tracking-wider text-4xl text-white uppercase">
              Вартість послуг
            </h1>
            <p className="text-light text-gray-500 text-xl">
              Here are our pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            <div
              id="plan"
              className=" text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-gray-800">
                <div className="w-full bg-[url('/brand.jpg')] md:h-[400px] h-[300px] bg-cover bg-no-repeat"></div>
                <h2 className="tracking-wide font-bold text-3xl text-white mt-2">
                  Бренди
                </h2>
                <h3 className="font-normal text-gray-300 text-2xl mt-3">
                  $399<sup>,99</sup>
                </h3>
              </div>
              <div id="content" className="">
                <div
                  id="icon"
                  className="my-5 flex flex-col items-center text-gray-300"
                >
                  <Airplay size={55} className="my-1" />
                  <p className="text-gray-500 text-sm pt-2">
                    Контент для твого бренду
                  </p>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul>
                    <li>1 год фотоз'йомка</li>
                    <li>1,5 год фотостудія</li>
                    <li>Асистент</li>
                    <li>Повний супровід по позах</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="w-full block bg-gray-900 font-medium text-xl py-4 rounded hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white"
                    >
                      Обрати
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="plan"
              className=" text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-gray-800">
                <div className="w-full bg-[url('/model2.jpg')] h-[400px] bg-cover bg-no-repeat"></div>
                <h2 className="tracking-wide font-bold text-3xl text-white mt-2">
                  Персональні
                </h2>
                <h3 className="font-normal text-gray-300 text-2xl mt-3">
                  $199<sup>,99</sup>
                </h3>
              </div>
              <div id="content" className="">
                <div
                  id="icon"
                  className="my-5 flex flex-col items-center text-gray-300"
                >
                  <VenetianMask size={55} className="my-1" />
                  <p className="text-gray-500 text-sm pt-2">
                    Створи свою власну історію
                  </p>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul>
                    <li>1 год фотоз'йомка</li>
                    <li>1,5 год фотостудія</li>
                    <li>Асистент</li>
                    <li>Повний супровід по позах</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="w-full block bg-gray-900 font-medium text-xl py-4 rounded hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white"
                    >
                      Обрати
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="plan"
              className=" text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-gray-800">
                <div className="w-full bg-[url('/model3.jpg')] h-[400px] bg-cover bg-no-repeat"></div>
                <h2 className="tracking-wide font-bold text-3xl text-white mt-2">
                  Преміум
                </h2>
                <h3 className="font-normal text-gray-300 text-2xl mt-3">
                  $299<sup>,99</sup>
                </h3>
              </div>
              <div id="content" className="">
                <div
                  id="icon"
                  className="my-5 flex flex-col items-center text-gray-300"
                >
                  <Gem size={55} className="my-1" />
                  <p className="text-gray-500 text-sm pt-2">Повний супровід</p>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul>
                    <li>5 год фотоз'йомка</li>
                    <li>3 год фотостудія</li>
                    <li>Асистент</li>
                    <li>Повний супровід</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="w-full block bg-gray-900 font-medium text-xl py-4 rounded hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white"
                    >
                      Обрати
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
