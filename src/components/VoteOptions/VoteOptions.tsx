import s from "./VoteOptions.module.css"

import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
    onVote: (option: VoteType) => void,
    onReset: () => void,
    canReset: boolean
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => onVote('good')}>Good</button>
      <button className={s.button} onClick={() => onVote('neutral')}>Neutral</button>
      <button className={s.button} onClick={() => onVote('bad')}>Bad</button>
      {canReset && (
        <button className={`${s.button} ${s.reset}`} onClick={canReset ? onReset : undefined}>Reset</button>
      )}
      </div>
  );
}
