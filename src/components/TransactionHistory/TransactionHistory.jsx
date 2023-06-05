import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.mainCell}>Type</th>
          <th className={css.mainCell}>Amount</th>
          <th className={css.mainCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Event.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
