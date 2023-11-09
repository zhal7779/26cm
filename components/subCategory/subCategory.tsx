import Link from 'next/link';
import {
  bestCategory,
  womenCategory,
  menCategory,
  accCategory,
  beautyCategory,
  interiorCategory,
  digitalCategory,
  curtuleCategory,
  foodCategory,
} from './data/categoryData';
import { useEffect, useState } from 'react';

type Props = {
  category: string | string[] | undefined;
};

export default function SubCategoty({ category }: Props) {
  const [categoryType, setCategoryType] = useState<string[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  useEffect(() => {
    if (category === 'BEST') {
      setCategoryType(bestCategory);
    } else if (category === 'WOMEN') {
      setCategoryType(womenCategory);
    } else if (category === 'MEN') {
      setCategoryType(menCategory);
    } else if (category === 'ACC') {
      setCategoryType(accCategory);
    } else if (category === 'BEAUTY') {
      setCategoryType(beautyCategory);
    } else if (category === 'INTERIOR') {
      setCategoryType(interiorCategory);
    } else if (category === 'DIGITAL') {
      setCategoryType(digitalCategory);
    } else if (category === 'CULTURE') {
      setCategoryType(curtuleCategory);
    } else {
      setCategoryType(foodCategory);
    }
  }, [category]);

  const handleClick = (item: string) => {
    setSelectedSubCategory(item);
  };

  console.log(selectedSubCategory);
  return (
    <div className="pr-[8rem] w-[20rem]">
      <h2 className="pb-[1.2rem] text-[2.3rem] font-semibold border-b-4 border-[#000000]">
        {category}
      </h2>
      <ul className="mt-[1.6rem] flex flex-col gap-7 text-[1.6rem] text-[#5d5d5d]">
        {categoryType.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`hover:text-[#000000] hover:font-semibold ${
              selectedSubCategory === item ? 'text-[#000000] font-semibold' : ''
            }`}
          >
            <Link href={`/category/${category}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
