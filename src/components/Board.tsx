import { Box } from "./Box";

interface Player {
  id: number
  colorId: number
  position: { x: number, y: number }
  score: number
}

export function Board({board, players, handleClick} : {
  board: number[][],
  players: Player[],
  handleClick: (x: number, y: number) => void
}) {
  return (
    <div className="flex flex-col items-center">
      <div className='grid grid-cols-7 gap-4'>
        {board.map((row, i) => (
          row.map((chipId, j) => (
            <Box key={i * 7 + j} chipId={chipId} borderId={
              players.find(player => player.position.x === j && player.position.y === i)?.colorId || 0
            } onClick={() => handleClick(j, i)} />
          ))
        ))}
      </div>
    </div>
  )
}