const riotAPI = process.env.REACT_APP_API;
const summoner = "/lol/summoner/v4/summoners/by-name";
const matchs = "/lol/match/v5/matches/by-puuid";
const masteries =
  "/lol/champion-mastery/v4/champion-masteries/by-summoner";
const league = "/lol/league/v4/entries/by-summoner";

export const getSearchUser = async (summonerName) => {
  const Name = summonerName;

  try {
    const res = await axios.get(`${riotAPI}${summoner}/${Name}`);
    console.log("getSearchUser", res);
  } catch {
    console.error("소환사 정보 실패", error);
  }
};

export const getMatches = async (puuid) => {
  
  try {
    const res = await axios.get(`${riotAPI}${matchs}/${puuid}/ids`)
    console.log("getMatches", res);
  } catch {
    console.error("매치 정보를 불러오지 못했습니다.", error)
  }
}

export const getMastery = async (encryptedSummonerId) => {

  try {
    const res = await axios.get(`${riotAPI}${masteries}/${encryptedSummonerId}`)
    console.log("getMastry", res);
  } catch {
    console.error("숙련도를 불러오지 못했습니다.", error);
  }

}

export const getLeague = async (encryptedSummonerId) => {
  try {
    const res = await axios.get(`${riotAPI}${league}/${encryptedSummonerId}`)
    console.log("getLeague", res)
  } catch {
    console.error("리그 정보를 가져오지 못했습니다.", res);
  }
}
