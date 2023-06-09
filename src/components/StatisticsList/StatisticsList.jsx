import PropTypes from 'prop-types';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import { Stats, Title, StatList, StatListItem } from './StatisicsList.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <StatListItem
            key={item.id}
            style={{ backgroundColor: '#' + getRandomColor() }}
          >
            <StatisticsCard item={item} />
          </StatListItem>
        ))}
      </StatList>
    </Stats>
  );
};

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
