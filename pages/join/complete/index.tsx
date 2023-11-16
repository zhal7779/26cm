import Button from '../../../components/button';

export default function JoinCompletePage() {
  return (
    <div className="w-[40rem] mx-auto flex flex-col items-center">
      <div className="w-full text-[4rem] text-center pb-10 border-b-4 border-[#000000]">
        <p className="mb-5">회원가입이 완료되었습니다.</p>
        <p>26CM에서 즐거운 쇼핑되세요.</p>
      </div>
      <div className="flex flex-col pt-24 gap-6">
        <Button text={'로그인하기'} link={'/login'} />
      </div>
    </div>
  );
}
