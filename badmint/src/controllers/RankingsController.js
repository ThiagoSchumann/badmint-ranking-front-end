import ApiAdapter from "../api/apiAdapter";

async function getRankingQuery() {
  // example for now
  const response = await ApiAdapter.get("api/ranking-query&cat_id=57&ryear=2022&week=40&page_size=25&page_no=1")
  return response.data;
}

export default {
  getRankingQuery
}
