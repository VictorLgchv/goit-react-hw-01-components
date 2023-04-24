import PropTypes from 'prop-types';
import {TableTr,TableTd} from './TransactionsCard.styled';

export const TransactionsCard = ({ item: { type, amount, currency } }) => {
  return (
    <TableTr>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
  );
};

TransactionsCard.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
}