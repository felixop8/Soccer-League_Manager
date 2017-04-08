import { BoardMembers } from './board-members';
import { Info } from './info';
import { Players } from './players';

export class Team {
  constructor(
    public boardMembers: BoardMembers,
    public info: Info,
    public players: Players,
  ){}
}
