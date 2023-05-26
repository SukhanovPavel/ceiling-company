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
        <div>
          <div>Адрес:</div>
          <div>Шатура, проспект Ильича д.40</div>
        </div>
        <div>
          <div>Телефон:</div>
          <a className={styles.phone} href="tel:+79999999999">8 (999) 999-99-99</a>
        </div>
        <div>
          <div>Режим работы:</div>
          <div>Пн-пт: 9:00-18:00</div>
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