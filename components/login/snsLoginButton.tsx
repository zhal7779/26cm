import Image from 'next/image';
import { googleLogin } from '../../app/api/firebase';
type Props = {
  SNS: string;
};
export default function SNSLoginButton({ SNS }: Props) {
  return (
    <button
      className="flex w-11/12 items-center gap-2 border border-gray-400 rounded "
      onClick={googleLogin}
    >
      <div className="border-r border-gray-400 p-5">
        <Image src="/googleLogo.png" alt="google" width={25} height={25} />
      </div>
      <p className="text-2xl font-semibold w-9/12 text-center">
        {SNS} 아이디로 로그인
      </p>
    </button>
  );
}
