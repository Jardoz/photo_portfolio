
export const Important = () => {
    
  return (
    <div className="w-full bg-black flex justify-center">
      <div className="mx-10 lg:mx-52 my-10 bg-gray-700 p-5 opacity-80">
        <h2 className="text-3xl tracking-wider uppercase pb-5 text-center">
          важлива інформація
        </h2>
        <h3 className="text-xl uppercase pb-5">
          перед бронюванням уважно ознайомтеся з умовами та корисною для вас
          інформацією, зазначеною нижче
        </h3>

        <ul className="list-disc px-5 leading-7">
          <li>
            бронь зйомки здійснюється за передоплатою 50% від загальної вартості
          </li>
          <li>
            передоплата не повертається в разі скасування броні менш ніж за 7
            днів до зйомки
          </li>
          <li>
            передоплата не повертається в разі скасування броні менш ніж за 7
            днів до зйомки
          </li>
          <li>
            у разі непередбачених обставин перенесення дати зйомки можливе 1 раз
          </li>
          <li>
            за побажання клієнта надається право на вибір фото для ретуші, а
            також запит на отримання вихідного матеріалу відразу після зйомки
          </li>
          <li>
            термін віддачі фото до 3 тижнів, відео до 4 тижнів. інші міста на 1
            тиждень більше
          </li>
          <li>
            {`фото/відео віддаються у вигляді посилання на хмару (без втрати
            якості)`}
          </li>
          <li>{`фото у форматі raw (cr2) віддаються тільки за індивідуальним
            запитом`}</li>
          <li>
            з огляду на ваші побажання спільно підбираємо студію, локацію, образ
            та ідею зйомки
          </li>
          <li>
            при бронюванні зйомки зі стилістом ви отримуєте два готових образи,
            виходячи від ідеї зйомки, а також допомогу стиліста під час зйомки.
            кожен наступний образ оплачується окремо
          </li>
          <li>
            під час зйомки я повністю допомагаю з фотопозуванням, а так само з
            сюжетом відео - при отриманні готового відеоролика, ви маєте право
            на одне внесення правок у матеріал
          </li>
          <li>
            середній таймінг готового відео становить 1 хвилину за 1 годину
            нашої з вами спільної роботи. збільшення таймінгу відео
            обговорюється особисто.
          </li>
        </ul>
      </div>
    </div>
  );
}
