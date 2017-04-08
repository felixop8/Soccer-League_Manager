import { BoardMembers } from './board-members';
import { Info } from './info';
import { Players } from './players';
import { PlayersTwo } from './players-two';

export class Team {
  public players: any[]
  constructor(
    public boardMembers: BoardMembers,
    public info: Info,
    players: Players
  ) {
    this.players = [players]
  }
}
