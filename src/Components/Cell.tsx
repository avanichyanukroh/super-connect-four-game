interface CellProps {
  cell: number
}

function Cell({cell}: CellProps) {

  function handleCellColor():string {
    console.log('test', cell);
    if (cell === 1) {
      return 'red';
    }

    if (cell === 2) {
      return 'black';
    }

    return 'none';
  }

  return (
    <div className="flex justify-center items-center w-full aspect-square border border-sky-500 bg-slate-300">
      <div
        className="border-4 rounded-full border-sky-500 w-5/6 h-5/6"
        style={{backgroundColor: handleCellColor()}}
      >
      </div>
    </div>
  );
}

export default Cell;