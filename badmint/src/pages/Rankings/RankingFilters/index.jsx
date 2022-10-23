import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { styled } from '@mui/material/styles';

const rankingsList = [
  { id: 1, label: "Ranking Estadual de Santa Catarina", },
  { id: 2, label: "Ranking Estadual do Paraná", },
  { id: 3, label: "Ranking Particular do Clube XYZ", },
  { id: 4, label: "Ranking Nacional Brasileiro de Badminton", },
  { id: 5, label: "Ranking Privativo do Clube IBAd", },
];

const rankingCategoriesList = [
  { id: 1, label: "Masculino Duplas Sub-17", },
  { id: 2, label: "Feminino Simples Principal", },
  { id: 3, label: "Misto Duplas Senior", },
];

const rankingPeriodList = [
  { id: 1, label: "2022 semana 22", championshipDate: "2022-06-02" },
  { id: 2, label: "2022 semana 15", championshipDate: "2022-04-14" },
  { id: 3, label: "2021 semana 48", championshipDate: "2021-12-03" },
  { id: 4, label: "2021 semana 09", championshipDate: "2021-03-06" },
];

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3EB489"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3EB489"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3EB489"
    },
    "&:hover fieldset": {
      borderColor: "#3EB489"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3EB489"
    }
  }
});

function RankingFilters() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",          
          marginTop: -10,
          //backgroundColor: 'lightblue',
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        <Grid xs={5}>
          <Autocomplete
            disablePortal
            id="filterRankings"
            size="small"
            options={rankingsList}
            sx={{
              width: 208, 
              paddingRight: 1
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Ranking" />
            )}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={4}>
          <Autocomplete
            disablePortal
            id="filterRankingCategories"
            size="small"
            options={rankingCategoriesList}
            sx={{
              width: 208, 
              paddingRight: 1
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Categoria" />
            )}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={3}>
          <Autocomplete
            disablePortal
            id="filterRankingPeriod"
            size="small"
            options={rankingPeriodList}
            sx={{
              width: 208,
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Período do Ranking" />
            )}
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: -5,
          marginBottom: -15,
          //backgroundColor: 'lightblue',
        }}
      >
        <h4>Filtros</h4>
      </div>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          marginBottom: 20,
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        <Grid xs={3}>
          <CssTextField
            id="filterAthleteMemberID"
            label="Member ID"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            sx={{
              paddingRight: 1
            }}
          />
        </Grid>
        <Grid xs={5}>
          <CssTextField
            id="filterAthleteName"
            label="Nome do Atleta/Dupla"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            sx={{
              paddingRight: 1
            }}
          />
        </Grid>
        <Grid xs={1}>
          <CssTextField
            id="filterAthleteAge"
            label="Idade"
            variant="outlined"
            size="small"
            type="number"
            style={{ width: "100%" }}
            sx={{
              paddingRight: 1
            }}
          />
        </Grid>
        <Grid xs={2}>
          <CssTextField
            id="filterAthleteClub"
            label="Clube"
            variant="outlined"
            size="small"
            style={{
              width: "100%",
            }}
            sx={{
              paddingRight: 1,
            }}
          />
        </Grid>
        <Grid xs={1}>
          <Button
            id="filterButtonSearch"
            variant="contained"
            disableElevation
            style={{
              backgroundColor: "#3EB489",
              width: '100%',
              height: '100%'
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default RankingFilters;
