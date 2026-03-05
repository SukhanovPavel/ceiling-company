'use client'
import React from "react";
import {
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle,
  Paintbrush,
  Wrench,
  BadgeCheck,
} from "lucide-react";

import styles from "./StretchCeilingPage.module.css";

const StretchCeilingPage: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h1>
            НАТЯЖНЫЕ ПОТОЛКИ
            <span>ПОД КЛЮЧ В ШАТУРЕ</span>
          </h1>

          <div className={styles.subline}>
            <div>
              <Clock size={45} color='#ff4d4d'/> За <b>24 часа</b>
            </div>
            <div>
              <ShieldCheck size={45} color='#ff4d4d'/> Гарантия <b>15 лет</b>
            </div>
            <div>
              Рассрочка <b>0%</b>
            </div>
          </div>

          <div className={styles.benefits}>
            <li className={styles.leftCard}>
              <CheckCircle size={45} color='#ff4d4d' />
              Бесплатный замер сегодня
            </li>
            <li className={styles.leftCard}>
              <CheckCircle size={45} color='#ff4d4d' />
              Чисто и без пыли
            </li>
            <li className={styles.leftCard}>
              <CheckCircle size={45} color='#ff4d4d' />
              Цена от <span>500₽/м²</span>
            </li>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.formCard}>
            <div>
              <Phone size={22} />
              +7 (915) 327-75-39
            </div>
            <div>
              <Phone size={22} />
              +7 (926) 497-77-03
            </div>
            <button className={styles.callBtn}>
              Заказать звонок
            </button>
          </div>

          <div className={styles.formCard}>
            <h3>
              Получите расчет стоимости
              <span> за 5 минут</span>
            </h3>

            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className={styles.input}
            />

            <button className={styles.primaryBtn}>
              Вызвать замерщика
            </button>
          </div>
        </div>
      </div>

      {/* STRIP */}
      <div className={styles.strip}>
        <div>
          <Paintbrush size={20} />
          Уберем после монтажа
        </div>
        <div>
          <Wrench size={20} />
          Подтянем бесплатно
        </div>
        <div>
          <BadgeCheck size={20} />
          Гарантия 15 лет
        </div>
        <div>
          <Clock size={20} />
          Установка за 1 день
        </div>
      </div>

      {/* CALCULATOR */}
      <div className={styles.calculator}>
        <div className={styles.calcImage} />

        <div className={styles.calcForm}>
          <div className={styles.row}>
            <label>Площадь:</label>
            <input type="number" defaultValue={18} />
          </div>

          <div className={styles.row}>
            <label>Тип потолка:</label>
            <select>
              <option>Матовый</option>
              <option>Сатиновый</option>
              <option>Глянцевый</option>
            </select>
          </div>

          <button className={styles.primaryBtn}>
            Рассчитать стоимость
          </button>

          <p>Работаем без навязчивых продаж</p>
        </div>
      </div>
    </section>
  );
};

export default StretchCeilingPage;
