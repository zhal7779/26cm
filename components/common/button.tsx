import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  text: string;
  link: string;
};
const Button = ({ text, link }: Props) => {
  const router = useRouter();

  const clickRouter = () => {
    router.push(link);
  };
  return (
    <div
      className="w-[40rem] h-[5.6rem] flex items-center justify-center bg-black text-white rounded-md text-[1.6rem] font-semibold cursor-pointer"
      onClick={clickRouter}
    >
      {text}
    </div>
  );
};

export default Button;
