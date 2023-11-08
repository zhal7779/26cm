import Link from 'next/link';
import styles from './header.module.css';
import { googleUserState } from '../../recoil/atoms/googleUserState';
import { useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';
import { HiUser } from 'react-icons/hi';
import {
  BsFillSuitHeartFill,
  BsFillDoorClosedFill,
  BsDoorOpenFill,
} from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import Image from 'next/image';

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

  const googleUser = useRecoilValue(googleUserState);
  const [selectedMenu, setSelectedMenu] = useState<string>('');
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const clickSelectedMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  //스크롤 감지 로직
  const updateScroll = () => {
    setScrollPosition(Math.floor(window.scrollY));
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header className={styles.header}>
      <div
        className={
          scrollPosition < 100 ? styles.container : styles.change_container
        }
      >
        <div className={styles.content}>
          <div
            className={scrollPosition < 100 ? styles.logo : styles.change_logo}
          >
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={30} />
            </Link>
          </div>
          <ul className={styles.user}>
            <li>
              <Link href="/">
                <HiUser />
                {scrollPosition < 100 ? <p>MY PAGE</p> : ''}
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsFillSuitHeartFill />
                {scrollPosition < 100 ? <p>MY LIKE</p> : ''}
              </Link>
            </li>
            <li>
              <Link href="/">
                <GiShoppingBag />
                {scrollPosition < 100 ? <p>SHOPPING BAG</p> : ''}
              </Link>
            </li>
            <li>
              {googleUser.length <= 0 ? (
                <Link href="/login">
                  <BsFillDoorClosedFill />
                  {scrollPosition < 100 ? <p>LOGIN</p> : ''}
                </Link>
              ) : (
                <Link href="/">
                  <BsDoorOpenFill />
                  {scrollPosition < 100 ? <p>LOGOUT</p> : ''}
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className={scrollPosition < 100 ? styles.nav : styles.change_nav}>
          <nav>
            <ul
              className={
                scrollPosition < 100 ? styles.nav_menu : styles.change_nav_menu
              }
            >
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

          <div
            className={
              scrollPosition < 100
                ? styles.nav_categories
                : styles.change_nav_categories
            }
          >
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
        <div
          className={
            scrollPosition < 100 ? styles.search : styles.change_search
          }
        >
          <PiMagnifyingGlassBold />
        </div>
      </div>
    </header>
  );
}
