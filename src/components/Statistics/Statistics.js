import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <p className={s.description}>
        Good:<span className={s.value}>{good}</span>
      </p>
      <p className={s.description}>
        Neutral:<span className={s.value}>{neutral}</span>
      </p>
      <p className={s.description}>
        Bad:<span className={s.value}>{bad}</span>
      </p>
      <p className={s.description}>
        Total:<span className={s.value}>{total}</span>
      </p>
      {!isNaN(positivePercentage) && (
        <p className={s.description}>
          Positive feedback:<span className={s.value}>{positivePercentage}%</span>
        </p>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
