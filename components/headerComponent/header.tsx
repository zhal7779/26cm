import styles from './header.module.css';
import { HiUser } from 'react-icons/hi';
import { BsFillSuitHeartFill, BsFillDoorClosedFill } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

export default function Header() {
  const menus = ['Special-Order', 'Showcase', 'PT', 'Welove'];
  const subMenus = [
    'WOMEN',
    'MEN',
    'ACC',
    'BEAUTY',
    'INTERIOR',
    'DIGITAL',
    'CULTURE',
    'FOOD',
  ];
  const etcMenu = ['Best', 'Event'];

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.logo}>26CM</h1>
          <ul className={styles.user}>
            <li>
              <HiUser />
              <p>MY PAGE</p>
            </li>
            <li>
              <BsFillSuitHeartFill />
              <p>MY LIKE</p>
            </li>
            <li>
              <GiShoppingBag />
              <p>SHOPPING BAG</p>
            </li>
            <li>
              <BsFillDoorClosedFill />
              <p>LOGIN</p>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <nav>
            <ul className={styles.main_menus}>
              {menus.map((menu) => (
                <li key={menu}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.sub_menus}>
            <ul className={styles.sub_menu}>
              {subMenus.map((menu) => (
                <li key={menu}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
            <span className={styles.span}>|</span>
            <ul className={styles.etc_menu}>
              {etcMenu.map((menu) => (
                <li key={menu}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.search}>
          <PiMagnifyingGlassBold />
        </div>
      </div>
    </header>
  );
}
