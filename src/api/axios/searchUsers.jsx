import { RIOT_GET } from "./typeOfAPI";

const riotAPI = process.env.REACT_APP_API;
const riotKey = process.env.REACT_APP_RIOT_KEY;
const summoner = RIOT_GET.summoner;
const matchs = RIOT_GET.matchs;
const masteries = RIOT_GET.masteries;
const league = RIOT_GET.league;
const account = RIOT_GET.account;

const headers = {
  "X-Riot-Token": riotKey
}

export const getAccountInfo = async (gameNameTag) => {
  const [gameName, tag] = gameNameTag;
  try {
    const res = await axios.get(`${riotAPI}${account}/${gameName}/${tag}`)
    console.log("getAccount", res);
  } catch {
    console.error("계정 정보를 가져오지 못했습니다.", error)
  }
} 

export const getSearchUser = async (PUUID) => {
  const Name = PUUID;

  try {
    const res = await axios.get(`${riotAPI}${summoner}/${Name}`, headers=headers);
    console.log("getSearchUser", res);
  } catch {
    console.error("소환사 정보를 불러오지 못했습니다.", error);
  }
};

export const getMatches = async (puuid) => {
  try {
    const res = await axios.get(`${riotAPI}${matchs}/${puuid}/ids`);
    console.log("getMatches", res);
  } catch {
    console.error("매치 정보를 불러오지 못했습니다.", error);
  }
};

export const getMastery = async (encryptedSummonerId) => {
  try {
    const res = await axios.get(
      `${riotAPI}${masteries}/${encryptedSummonerId}`
    );
    console.log("getMastry", res);
  } catch {
    console.error("숙련도를 불러오지 못했습니다.", error);
  }
};

export const getLeague = async (encryptedSummonerId) => {
  try {
    const res = await axios.get(`${riotAPI}${league}/${encryptedSummonerId}`);
    console.log("getLeague", res);
  } catch {
    console.error("리그 정보를 가져오지 못했습니다.", res);
  }
};
