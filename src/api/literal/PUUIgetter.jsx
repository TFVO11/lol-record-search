import { getAccountInfo, getSearchUser } from "../axios/searchUsers";
import dataFormat from "../../util/dataFormat";

export class PUUIDgetter {
  constructor(gameNameTag) {
    this.gameNameTag = gameNameTag;
  }

  getAccount () {
    const objOfUserName = dataFormat(this.gameNameTag);

    return getAccountInfo(objOfUserName);
  }
};
