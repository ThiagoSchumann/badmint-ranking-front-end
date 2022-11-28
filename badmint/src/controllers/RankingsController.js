import ApiAdapter from "../api/apiAdapter";
import RankingFilters from "../pages/Rankings/index.jsx";

async function getRankingsList() {
  // example for now
  const response = await ApiAdapter.get("api/ranking")
  return response.data;
}

async function getCategoriesList() {
  // example for now
  console.log("caminho: api/category?ranking="+ApiAdapter.getRankingID(RankingFilters.RankingSelected));
  const response = await ApiAdapter.get("api/category?ranking="+ApiAdapter.getRankingID(RankingFilters.RankingSelected));
  return response.data;
}

async function getRankingQuery() {
  // example for now
  // api/ranking-query&cat_id=57&ryear=2022&week=40&page_size=25&page_no=1
  const response = await ApiAdapter.get("api/ranking-query?ranking=123&category=abc&athletename=ucas%athleteage=15")
  return response.data;
}

export default {
  getRankingsList,
  getCategoriesList,
  getRankingQuery,
}
