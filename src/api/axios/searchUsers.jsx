import axios from "axios";
import { RIOT_GET } from "./typeOfAPI";

let riotAPI = "https://asia.api.riotgames.com";
const riotKey = process.env.REACT_APP_RIOT_KEY;
const summoner = RIOT_GET.summoner;
const matchs = RIOT_GET.matchs;
const masteries = RIOT_GET.masteries;
const league = RIOT_GET.league;
let account = RIOT_GET.account;

const config = {
  headers: {
    "X-Riot-Token": riotKey,
    "Access-Control-Allow-Origin": "https://asia.api.riotgames.com"
  }
};

export let getAccountInfo = async (gameNameTag) => {
  console.log("gamenametag", gameNameTag)
  let {Name, Tag} = gameNameTag;
  console.log(typeof(Name))
  console.log(typeof(Tag))

  //https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/%EC%84%B1%EA%B3%B5%EC%84%B1%EB%83%A5/KR7
  try {
    let res = await axios.get(`${riotAPI}${account}/${Name}/${Tag}`, config)
    console.log("getAccount", res);
    return res
  } catch (err) {
    console.error(err)
  }
} 

export const getSearchUser = async (PUUID) => {
  const Name = PUUID;

  try {
    let res = await axios.get(`${riotAPI}${summoner}/${Name}`, config);
    console.log("getSearchUser", res);
  } catch {
    console.error("소환사 정보를 불러오지 못했습니다.");
  }
};

export const getMatches = async (puuid) => {
  try {
    const res = await axios.get(`${riotAPI}${matchs}/${puuid}/ids`);
    console.log("getMatches", res);
  } catch {
    console.error("매치 정보를 불러오지 못했습니다.");
  }
};

export const getMastery = async (encryptedSummonerId) => {
  try {
    const res = await axios.get(
      `${riotAPI}${masteries}/${encryptedSummonerId}`
    );
    console.log("getMastry", res);
  } catch {
    console.error("숙련도를 불러오지 못했습니다.");
  }
};  

export const getLeague = async (encryptedSummonerId) => {
  try {
    const res = await axios.get(`${riotAPI}${league}/${encryptedSummonerId}`);
    console.log("getLeague", res);
  } catch {
    console.error("리그 정보를 가져오지 못했습니다.");
  }
};
