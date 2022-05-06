import TableData from "./TableData";
function DynamicTable() {
  // get table column
  const column = Object.keys(TableData[0]);

  // get table heading data
  const ThData = () => {
    return column.map((data, i) => {
      return <th key={i}>{data}</th>;
    });
  };

  // get table row data
  const tdData = () => {
    return TableData.map((data, index) => {
      return (
        <tr key={index}>
          {column.map((v) => {
            return <td key={data[v]}>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table className="table table-striped ">
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>{tdData()}</tbody>
    </table>
  );
}
export default DynamicTable;
