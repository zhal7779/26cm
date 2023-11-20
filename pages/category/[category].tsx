import { useRouter } from 'next/router';
import SubCategoty from '../../components/subCategory/subCategory';
import Dropdown from '../../components/dropdown/dropdown';
import type { NextPageWithLayout } from '../_app';
import { getAppLayout } from '../../util/getLayout';

const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const category = router.query.category;

  return (
    <div className="flex">
      <SubCategoty category={category} />
      <div className="w-full flex justify-between">
        {category} 카테고리 페이지
        <Dropdown />
      </div>
    </div>
  );
};

CategoryPage.getLayout = getAppLayout;

export default CategoryPage;
