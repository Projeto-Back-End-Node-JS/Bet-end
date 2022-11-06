import { Matches } from "../../entities/matches.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { PoolUsers } from "../../entities/poolUsers.entity";
import { User } from "../../entities/user.entity";

export interface IParticipants {
  userId: string;
  userName: string;
}

export interface IPoolRequest {
  name: string;
  owner: string;
  poolUsers: User[];
  poolMatches: Matches[];
}
