import PropTypes from 'prop-types';
import './styles.scss';

const Table = ({ info }) => {
  const columns = Object.keys(info[0]);
  const tdData = () => {
    return info.map((data, id) => {
      return (
        <tr key={id}>
          {columns.map((v) => {
            return <td key={v}>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table className="custom-table">
      <tbody>{tdData()}</tbody>
    </table>
  );
};

Table.propTypes = {
  info: PropTypes.array,
};

export default Table;
