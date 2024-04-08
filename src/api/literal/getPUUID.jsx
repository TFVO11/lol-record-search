import { getAccountInfo, getSearchUser } from "../axios/searchUsers";

export const getPUUID = {
  gameNameTag: "성공성냥 #KR7",
  spliter: function (gameNameTag) {
    const gameNameTagArr = gameNameTag.split(" ");

    return gameNameTagArr
  },

  getAccount: getAccountInfo(spliter(this.gameNameTag)),

  getSearchUser: getSearchUser(this.getAccount)
}