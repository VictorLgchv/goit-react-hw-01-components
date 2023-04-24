import PropTypes from 'prop-types';
import { Table,TableThead,TableTr, TableTh, TableTbody} from './TransactionsList.styled';
import { TransactionsCard } from 'components/TransactionsCard/TransactionsCard';

export const TransactionsHistory = ({ items }) => {
  return (
    <Table>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>

      <TableTbody>
        {items.map(item => (
          <TransactionsCard item={item} key={item.id}/>
        ))}
      </TableTbody>
    </Table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
}