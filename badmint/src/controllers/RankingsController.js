import ApiAdapter from "../api/apiAdapter";
import RankingFilters from "../pages/Rankings/index.jsx";

async function getRankingsList() {
  // example for now
  const response = await ApiAdapter.get("api/ranking")
  return response.data;
}

async function getCategoriesList(rankingId) {
  // example for now
  console.log("categories path: api/category?ranking=" + rankingId);
  const response = await ApiAdapter.get("api/category?ranking=" + rankingId);
  return response.data;
}

async function getRankingQuery(rankingId, categoryId, periodDate, athleteMemberID, athleteName, athleteAge, athleteClub) {
  // example for now
  // api/ranking-query&cat_id=57&ryear=2022&week=40&page_size=25&page_no=1
  console.log(`get ranking query path:   api/ranking-query?ranking=${rankingId}&category=${categoryId}&period_date=${periodDate}&athlete_member_id=${athleteMemberID}&athlete_name=${athleteName}&athlete_age=${athleteAge}&athlete_club=${athleteClub}`)
  const response = await ApiAdapter.get(`api/ranking-query?ranking=${rankingId}&category=${categoryId}&period_date=${periodDate}&athlete_member_id=${athleteMemberID}&athlete_name=${athleteName}&athlete_age=${athleteAge}&athlete_club=${athleteClub}`)
  return response.data;
}

export default {
  getRankingsList,
  getCategoriesList,
  getRankingQuery,
}
