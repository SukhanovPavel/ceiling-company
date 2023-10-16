import {Map, Placemark} from "@pbe/react-yandex-maps";
import {YMaps} from "@pbe/react-yandex-maps";

import styles from "./Contacts.module.css";

type Props = {
  handleClick: () => void;
}

export const Contacts = ({handleClick}: Props) => (
  <YMaps>
    <div className={styles._}>
      <div className={styles.block}>
        <h3>Контакты</h3>
        <div className={styles.phones}>
          <div>Адрес:</div>
          <div>Шатура, проспект Ильича д.40</div>
        </div>
        <div className={styles.phones}>
          <div>Телефон:</div>
          <div><a className={styles.phone} href="tel:+79153277339">8 (915) 327-73-39</a></div>
          <div><a className={styles.phone} href="tel:+79264977703">8 (926) 497-77-03</a></div>
        </div>
        <div className={styles.phones}>
          <div>Режим работы:</div>
          <div>Пн-пт: 8:00-18:00</div>
          <div>Сб: 9:00-16:00</div>
        </div>
        <div>
          <div>Email:</div>
          <a className={styles.phone} href="mailto:vysota-shatura@yandex.ru">vysota-shatura@yandex.ru</a>
        </div>
        <button onClick={handleClick}>Обратный звонок</button>
      </div>
      <div className={styles.block}>
        <Map
          // className={styles.map}
          defaultState={{ center: [55.575271, 39.529011], zoom: 15 }}
          // width="25rem"
          // height="50vh"
        >
          <Placemark defaultGeometry={[55.575495, 39.529565]} />
        </Map>
      </div>
    </div>
  </YMaps>
)