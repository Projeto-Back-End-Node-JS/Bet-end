export interface IMatchesRequest {
  day: string;
  hour: string;
  team1: string;
  team2: string;
}

export interface IPoolMatches {
  poolId: string;
  matchesId: string;
}
