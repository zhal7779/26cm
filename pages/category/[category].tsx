import { useRouter } from 'next/router';
import SubCategoty from '../../components/subCategory/subCategory';

export default function CategoryPage() {
  const router = useRouter();
  const category = router.query.category;

  return (
    <div className="flex">
      <SubCategoty category={category} />
      {category} 카테고리 페이지
    </div>
  );
}
