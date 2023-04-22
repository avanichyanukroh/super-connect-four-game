import Cell from './Cell';

interface RowProps {
  rowData: number[],
  rowNum: number
}

function Row({rowData, rowNum}: RowProps) {

  return (
    <div className="flex border border-sky-500 bg-slate-300">
      {rowData.map((cell, index) => {
        return <Cell key={index} cell={cell} />
      })}
    </div>
  );
}

export default Row;