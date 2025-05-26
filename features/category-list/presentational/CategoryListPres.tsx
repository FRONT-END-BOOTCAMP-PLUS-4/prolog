import Button from '@/shared/ui/button';
import styles from '../styles/categoryList.module.scss';
type CategoryListProps = {
  categoryList: Category[];
  category: number;
  categoryCurrentHandler: (id: number) => void;
};
export default function CategoryListPres({
  categoryList,
  category,
  categoryCurrentHandler,
}: CategoryListProps) {
  return (
    <>
      <div className={styles.vh}>
        <div className={styles.container}>
          <div>
            <h2 className={styles.title}>목록보기</h2>
          </div>
          <div className={styles.categoryListColumn}>
            {categoryList.map((item) => (
              <div
                className={styles.currentText}
                onClick={() => categoryCurrentHandler(item.id)}
                key={item.id}
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>목록보기</h2>
        </div>
        <div className={styles.categoryListColumn}>
          {categoryList.map((item) => (
            <div
              className={styles.currentText}
              onClick={() => categoryCurrentHandler(item.id)}
              key={item.id}
            >
                <Button
                  variants={category === item.id ? 'active' : 'basic'}
                  size="small"
                >
                  {item.categoryName}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
