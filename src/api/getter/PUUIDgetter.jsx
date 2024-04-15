import {
  getAccountInfo,
  getSearchUser,
  getMatches,
  getMastery,
  getLeague,
} from "../axios/searchUsers";
import dataFormat from "../../util/dataFormat";

export class PUUIDgetter {
  constructor(gameNameTag) {
    this.gameNameTag = gameNameTag;
  }

  getAccount() {
    const objOfUserName = dataFormat(this.gameNameTag);
    console.log("obj", objOfUserName);
    return getAccountInfo(objOfUserName);
  }
}

export class UserInfoGetter {
  constructor(PUUID) {
    this.PUUID = PUUID;
  }

  getInfo() {
    const userInfo = getSearchUser(this.PUUID);
    const userMatch = getMatches(this.PUUID);
    const userMastery = getMastery(this.PUUID);
    const userLeague = getLeague(this.PUUID);

    console.log("userInfo", userInfo);
    console.log("userMatch", userMatch);
    console.log("userMastery", userMastery);
    console.log("userLeague", userLeague);
  }
}
