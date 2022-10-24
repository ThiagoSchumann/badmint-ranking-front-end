import { useEffect, useState } from "react";
import RankingFilters from "./RankingFilters";
import RankingsTable from "./RankingsTable";
import RankingsController from '../../controllers/RankingsController'

function Rankings() {
  const [rankingsListResults, setRankingsListResults] = useState([]);
  const [categoriesListResults, setCategoriesListResults] = useState([]);
  const [rankingQueryResults, setRankingQueryResults] = useState([]);

  useEffect(() => {
    async function getRankingsList() {
      const result = await RankingsController.getRankingsList();
      setRankingsListResults(result);
    }
    async function getCategoriesList() {
      const result = await RankingsController.getCategoriesList();
      setCategoriesListResults(result);
    }
    async function getRankingQuery() {
      const result = await RankingsController.getRankingQuery();
      setRankingQueryResults(result);
    }
    getRankingsList();
    getCategoriesList();
    getRankingQuery();
  }, [])

  return (
    <div style={{ padding: "4rem", minWidth: 1120 }}>
      <h2>Rankings</h2>
      <RankingFilters rankingsListResults={rankingsListResults} categoriesListResults={categoriesListResults} />
      <RankingsTable rankingQueryResults={rankingQueryResults} />
    </div>
  );
}

export default Rankings;

// Rankings filter

//*=required
// ranking period=default -> today

// Ranking*, Category*, Member Id, Athlete name, age, club, ranking period* (calendar)

// Ranking={estadual sc, estadual pr, global, club do martendal}
