import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const category = router.query.category;

  return <div>{category} 카테고리 페이지</div>;
}
