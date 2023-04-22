
import { useState, ReactElement } from 'react';
import Row from './Row';
import Cell from './Cell';

interface ContentPageProps {

}

function ContentPage({}: ContentPageProps) {
  const [currPlayerTurn, setCurrPlayerTurn] = useState<number>(1);
  const [grid, setGrid] = useState<number[][]>(
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]
  );

  function endPlayerTurn() {
    if (currPlayerTurn === 1) {
      setCurrPlayerTurn(2);
    } else {
      setCurrPlayerTurn(1);
    }
  }

  function handlePlayerSelection(rowNum: number, cellNum: number) {
    for (let i = grid.length; i > 0; i--) {
      if (grid[i][cellNum] === 0) {
        let newGrid: number[][] = [...grid];
        newGrid[i][cellNum] = currPlayerTurn;
        setGrid(newGrid);
        endPlayerTurn();
      }
      
    }
  }

  return (
    <div className="flex-col bg-black">
      {grid.map((rowData, index) => {
        return <Row key={index} rowData={rowData} rowNum={index} />
      })}
    </div>
  );
}

export default ContentPage;