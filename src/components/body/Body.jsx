import styles from './Body.module.scss';

const MovableItem = () => {
  return <div className={styles.movableItem}>Перетаскиваемая карточка</div>;
};
const FirstColumn = () => {
  return (
    <div className={styles.firstColumn}>
      Колонка 1
      <MovableItem />
    </div>
  );
};

const SecondColumn = () => {
  return <div className={styles.secondColumn}>Колонка 2</div>;
};
export const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <FirstColumn />
        <SecondColumn />
      </div>
    </div>
  );
};
