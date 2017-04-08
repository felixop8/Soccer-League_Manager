import { BoardMembers } from './board-members';
import { Info } from './info';
import { Players } from './players';
import { PlayersTwo } from './players-two';

export class Team {
  public players: any[];
  public boardMembers: any[];
  constructor(
    boardMembers: BoardMembers,
    public info: Info,
    players: Players
  ) {
    this.players = [players];
    this.boardMembers = [boardMembers];
  }
}
