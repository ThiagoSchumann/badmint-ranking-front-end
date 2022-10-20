import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";

const rankingPeriodList = [
  { label: "2022 week 22", championshipDate: "2022-06-02" },
  { label: "2022 week 15", championshipDate: "2022-04-14" },
  { label: "2021 week 48", championshipDate: "2021-12-03" },
  { label: "2021 week 09", championshipDate: "2021-03-06" },
];

function RankingFilters() {
  return (
    <>
      <h2>Rankings</h2>
      <Grid container spacing={1} style={{ width: "100%" }}>
        <Grid xs={1}>
          <h4>Filter</h4>
        </Grid>
        <Grid xs={2}>
          <TextField
            id="filterAthleteMemberID"
            label="Member ID"
            variant="outlined"
            size="small"
            //style={{marginLeft: 10, marginRight: 10}}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            id="filterAthleteName"
            label="Athlete Name"
            variant="outlined"
            size="small"
            //style={{marginLeft: 10, marginRight: 10}}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            id="filterAthleteAge"
            label="Age"
            variant="outlined"
            size="small"
            type="number"
            //style={{marginLeft: 10, marginRight: 10}}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            id="filterAthleteClub"
            label="Club"
            variant="outlined"
            size="small"
            //style={{marginLeft: 10, marginRight: 10}}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={2}>
          <Autocomplete
            disablePortal
            id="filterRankingPeriod"
            size="small"
            options={rankingPeriodList}
            sx={{ width: 208 }}
            renderInput={(params) => (
              <TextField {...params} label="Ranking Period" />
            )}
            //style={{marginLeft: 10, marginRight: 10}}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={1}>
          <Button
            id="filterButtonSearch"
            variant="contained"
            disableElevation
            style={{ backgroundColor: "#3EB489" }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default RankingFilters;
