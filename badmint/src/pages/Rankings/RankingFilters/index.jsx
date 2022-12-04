import * as React from "react";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

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

function RankingFilters({ 
  rankingsListResults,
  categoriesListResults,
  rankingSelected,
  setRankingSelected,
  categorySelected,
  setPeriodDateSelected,
  setCategorySelected,  
  setAthleteMemberIDFilter,
  setAthleteNameFilter,
  setAthleteAgeFilter,
  setAthleteClubFilter,
}) {
  const [showFilters, setShowFilters] = useState(true);
  
  function updateShowFilters() {
    setShowFilters(!showFilters);
  }

  useEffect(() => {
    updateShowFilters();
  }, [])

  const [value, setValue] = React.useState(dayjs(Date.now()));

  const handleDateChange = (newValue) => {
    if (newValue == null || isNaN(newValue)) {
      newValue = dayjs(Date.now());
    }
    setValue(newValue);
    setPeriodDateSelected(newValue.toISOString().substring(0, 10));
  };

  const [tempMemberIDFilter, setTempMemberIDFilter] = useState('');
  const [tempNameFilter, setTempNameFilter] = useState('');
  const [tempAgeFilter, setTempAgeFilter] = useState('');
  const [tempClubFilter, setTempClubFilter] = useState('');

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
        <Grid xs={6}>
          <Autocomplete
            disablePortal
            id="filterRankings"
            size="small"
            sx={{
              width: 208, 
              paddingRight: 1
            }}
            style={{ width: "100%" }}
            renderInput={(params) =>  
              <CssTextField {...params} label="Ranking" />
            }
            options={rankingsListResults}
            value={rankingSelected}
            onChange={ (_, ranking) => setRankingSelected(ranking)}
            getOptionSelected={(option, value) => option.id === value.id }

          />
        </Grid>
        <Grid xs={4}>
          <Autocomplete
            disablePortal
            id="filterRankingCategories"
            size="small"
            sx={{
              width: 208, 
              paddingRight: 1
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Categoria" />
            )}
            style={{ width: "100%" }}
            options={categoriesListResults}
            value={categorySelected}
            onChange={ (_, category) => setCategorySelected(category)}
            getOptionSelected={(option, value) => option.id === value.id }
          />
        </Grid>
        <Grid xs={2}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}            
            id="filterRankingPeriodDatePickerLocalProvider"
            renderInput={(params) => (
              <CssTextField {...params} label="Período do Ranking" />
            )}
          >
            <DesktopDatePicker
              // disablePortal
              id="filterRankingPeriodDatePicker"
              label="Período do Ranking"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleDateChange}
              renderInput={(params) => (
                <CssTextField {...params}
                  sx={{width: '100%'}}
                  size="small"
                  label="Período do Ranking"
                  />
              )}
              //renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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
        onClick={ () => updateShowFilters() }
      >
        <h4>Filtros</h4>
        <ExpandMoreIcon
          style={{
            marginTop: 20,
            display: showFilters ? 'none' : '',
          }}
        />
        <ExpandLessIcon
          style={{
            marginTop: 20,
            display: showFilters ? '' : 'none',
          }}
        />
      </div>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          marginBottom: 20,
          paddingTop: 1,
          paddingBottom: 1,
          display: showFilters ? '' : 'none',
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
            onChange={(v) => setTempMemberIDFilter(v.target.value)}
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
            onChange={(v) => setTempNameFilter(v.target.value)}
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
            onChange={(v) => setTempAgeFilter(v.target.value)}
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
            onChange={(v) => setTempClubFilter(v.target.value)}
          />
        </Grid>
        <Grid xs={1}>
          <Link
            to="#abc"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              id="filterButtonSearch"
              variant="contained"
              disableElevation
              style={{
                backgroundColor: "#3EB489",
                width: '100%',
                height: '100%',
              }}
              onClick={() => {
                setAthleteMemberIDFilter(tempMemberIDFilter);
                setAthleteNameFilter(tempNameFilter);
                setAthleteAgeFilter(tempAgeFilter);
                setAthleteClubFilter(tempClubFilter);
              }}
            >
              Filtrar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default RankingFilters;
