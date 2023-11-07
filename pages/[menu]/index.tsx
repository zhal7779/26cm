import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const menu = router.query.menu;

  return <div>{menu}</div>;
}
