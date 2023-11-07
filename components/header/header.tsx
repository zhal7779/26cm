import Link from 'next/link';
import styles from './header.module.css';
import { HiUser } from 'react-icons/hi';
import { BsFillSuitHeartFill, BsFillDoorClosedFill } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import Image from 'next/image';
import { useState } from 'react';
export default function Header() {
  const menus = ['Special-Order', 'Showcase', 'PT', 'Welove'];
  const categories = [
    'BEST',
    'WOMEN',
    'MEN',
    'ACC',
    'BEAUTY',
    'INTERIOR',
    'DIGITAL',
    'CULTURE',
    'FOOD',
  ];
  const etcMenu = ['Event', 'Lookbook'];

  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const clickSelectedMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={30} />
            </Link>
          </div>
          <ul className={styles.user}>
            <li>
              <Link href="/">
                <HiUser />
                <p>MY PAGE</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsFillSuitHeartFill />
                <p>MY LIKE</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <GiShoppingBag />
                <p>SHOPPING BAG</p>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <BsFillDoorClosedFill />
                <p>LOGIN</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.nav}>
          <nav>
            <ul className={styles.nav_menu}>
              {menus.map((menu) => (
                <li key={menu}>
                  <Link
                    href={`/menu/${menu}`}
                    onClick={() => clickSelectedMenu(menu)}
                    className={selectedMenu === menu ? styles.selectedMenu : ''}
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.nav_categories}>
            <ul className={styles.nav_category}>
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category}`}
                    onClick={() => clickSelectedMenu(category)}
                    className={
                      selectedMenu === category ? styles.selectedCategory : ''
                    }
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
            <span className={styles.span}>|</span>
            <ul className={styles.nav_categry_etc}>
              {etcMenu.map((etc) => (
                <li key={etc}>
                  <Link
                    href={`/category/${etc}`}
                    onClick={() => clickSelectedMenu(etc)}
                    className={
                      selectedMenu === etc ? styles.selectedCategory : ''
                    }
                  >
                    {etc}
                  </Link>
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
