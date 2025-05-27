import Button from '@/shared/ui/button';
import styles from '../styles/categoryList.module.scss';
type CategoryListProps = {
  categoryList: Category[];
  isMobile: boolean;
  category: number;
  categoryCurrentHandler: (id: number) => void;
};
export default function CategoryListPres({
  categoryList,
  isMobile,
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
              >
                {isMobile ? (
                  <Button
                    variants={category === item.id ? 'active' : 'basic'}
                    size="small"
                  >
                    {item.categoryName}
                  </Button>
                ) : (
                  <Button
                    className={
                      category === item.id
                        ? `${styles.currentColor}`
                        : `${styles.btnBorderNone}`
                    }
                  >
                    {item.categoryName}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
