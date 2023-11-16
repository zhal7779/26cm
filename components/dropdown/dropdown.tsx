import React, { useState } from 'react';
import { sortData } from './data/sortData';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styles from './dropdown.module.css';

const Dropdown = () => {
  const [dropdownView, setDropdownView] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>(sortData[0]);

  const handleClickDropdown = () => {
    setDropdownView(!dropdownView);
  };

  const handleClickMenu = (menu: string) => {
    setSelectedMenu(menu);
    setDropdownView(!dropdownView);
  };

  return (
    <div className={styles.container}>
      <label onClick={handleClickDropdown}>
        <div className={styles.selected_menu}>
          {selectedMenu}
          {dropdownView ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </label>
      {dropdownView && (
        <ul className={styles.content}>
          {sortData.map((data) => (
            <li key={data} onClick={() => handleClickMenu(data)}>
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
