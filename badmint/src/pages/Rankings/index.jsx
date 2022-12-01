import { useEffect, useState } from "react";
import RankingFilters from "./RankingFilters";
import RankingsTable from "./RankingsTable";
import RankingsController from '../../controllers/RankingsController'
import dayjs from 'dayjs';

function Rankings() {
  const [rankingsListResults, setRankingsListResults] = useState([]);
  const [rankingSelected, setRankingSelected] = useState({ label: "", id: null });

  const [categoriesListResults, setCategoriesListResults] = useState([]);
  const [categorySelected, setCategorySelected] = useState({ label: "", id: null });

  const [periodDateSelected, setPeriodDateSelected] = useState(dayjs(Date.now()).toISOString().substring(0, 10));

  const [rankingQueryResults, setRankingQueryResults] = useState([]);
  
  useEffect(function onCreate() {
    async function getRankingsList() {
      const result = await RankingsController.getRankingsList();
      setRankingsListResults(result);

      // just so the grid isn't empty at first
      setRankingSelected(result[0]);
    }
    getRankingsList();
  }, [])

  useEffect(function onRankingChange() {
    async function getCategoriesList() {
      if(rankingSelected?.id === null) {
        return
      }

      const result = await RankingsController.getCategoriesList(rankingSelected.id);
      setCategoriesListResults(result);

      // just so the grid isn't empty at first
      setCategorySelected(result[0])
    }
    getCategoriesList();
  }, [rankingSelected])

  useEffect(function onCategoryChange() {
    async function getRankingQuery() {
      if(rankingSelected?.id === null || categorySelected?.id === null) {
        return
      }

      const result = await RankingsController.getRankingQuery(rankingSelected?.id, categorySelected?.id, periodDateSelected);
      setRankingQueryResults(result);
    }
    getRankingQuery();
  }, [categorySelected, periodDateSelected])

  return (
    <div style={{ padding: "4rem", minWidth: 1120 }}>
      <h2>Rankings</h2>
      <RankingFilters
       rankingsListResults={rankingsListResults}
       categoriesListResults={categoriesListResults}
       rankingSelected={rankingSelected}
       setRankingSelected={setRankingSelected}
       categorySelected={categorySelected}
       setPeriodDateSelected={setPeriodDateSelected}
       setCategorySelected={setCategorySelected}
      />
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
