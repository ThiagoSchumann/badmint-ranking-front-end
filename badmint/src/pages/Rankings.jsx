import * as React from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Popover from "@mui/material/Popover";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

const columns = [
  {
    field: 'classification',
    headerName: 'Classification',
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: 'center',
    align: 'center',
    description: 'Posição do atleta nesse Ranking no período em questão',
  },
  {
    field: 'athleteMemberID',
    headerName: 'Member ID',
    width: 150,
    sortable: false,
    hideable: false,
    description: 'Código do atleta na Federação',
  },
  {
    field: 'athleteName',
    headerName: 'Athlete Name',
    width: 400,
    sortable: false,
    hideable: false,
  },
  {
    field: 'athleteAge',
    headerName: 'Age',
    type: 'number',
    width: 50,
    sortable: false,
    hideable: false,
    headerAlign: 'center',
    align: 'center',
    description: 'Idade do atleta no período em questão',
  },
  {
    field: 'athleteClub',
    headerName: 'Club',
    width: 110,
    sortable: false,
    hideable: false,
    description: 'Clube do atleta no período em questão',
  },
  {
    field: 'scorePoints',
    headerName: 'Score Points',
    type: 'number',
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: 'center',
    align: 'center',
    description: 'Pontos válidos do atleta no período em questão',
  },
  {
    field: 'testDescription',
    headerName: 'Test Description',
    description: 'This column has a value getter and is not sortable.',
    width: 300,
    sortable: false,
    hideable: false,
    valueGetter: (params) =>
      `${params.row.athleteName || ''} testing ${params.row.athleteMemberID || ''}`,
    hide: true,
  },
];

const rows = [
  { id: 1, classification: 1, athleteMemberID: 'ab123', athleteName: 'Jon Snow',           athleteAge: 35,    athleteClub: 'IBAD',    scorePoints: 2780 },
  { id: 2, classification: 2, athleteMemberID: 'cd456', athleteName: 'Cersei Lannister',   athleteAge: 42,    athleteClub: 'CBBd',    scorePoints: 2590 },
  { id: 3, classification: 3, athleteMemberID: 'ef789', athleteName: 'Jaime Lannister',    athleteAge: 45,    athleteClub: 'IBAD',    scorePoints: 2100 },
  { id: 4, classification: 4, athleteMemberID: 'gh012', athleteName: 'Arya Stark',         athleteAge: 16,    athleteClub: 'IBAD',    scorePoints: 1880 },
  { id: 5, classification: 5, athleteMemberID: 'ij345', athleteName: 'Daenerys Targaryen', athleteAge: null,  athleteClub: 'Joacaba', scorePoints: 1740 },
  { id: 6, classification: 6, athleteMemberID: 'kl678', athleteName: null,                 athleteAge: 150,   athleteClub: 'CBBd',    scorePoints: 1720 },
  { id: 7, classification: 7, athleteMemberID: 'mn901', athleteName: 'Ferrara Clifford',   athleteAge: 44,    athleteClub: null,      scorePoints: 1050 },
  { id: 8, classification: 8, athleteMemberID: 'op234', athleteName: 'Rossini Frances',    athleteAge: 36,    athleteClub: 'Joacaba', scorePoints: 970 },
  { id: 9, classification: 9, athleteMemberID: 'qr567', athleteName: 'Harvey Roxie',       athleteAge: 65,    athleteClub: 'CBBd',    scorePoints: 360 },
];

const rankingPeriodList = [
  { label: '2022 week 22', championshipDate: '2022-06-02' },
  { label: '2022 week 15', championshipDate: '2022-04-14' },
  { label: '2021 week 48', championshipDate: '2021-12-03' },
  { label: '2021 week 09', championshipDate: '2021-03-06' },
]

function Rankings() {
  const handlePopoverOpen = (event) => {};
  return (
    <div>
      <h2>Rankings</h2>
      <Grid container spacing={1} style={{width: '100%'}}>
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
            style={{width: '100%'}}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            id="filterAthleteName"
            label="Athlete Name"
            variant="outlined"
            size="small"
            //style={{marginLeft: 10, marginRight: 10}}
            style={{width: '100%'}}
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
            style={{width: '100%'}}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            id="filterAthleteClub"
            label="Club"
            variant="outlined"
            size="small"
            //style={{marginLeft: 10, marginRight: 10}}
            style={{width: '100%'}}
          />
        </Grid>
        <Grid xs={2}>
          <Autocomplete
            disablePortal
            id="filterRankingPeriod"
            size="small"
            options={rankingPeriodList}
            sx={{ width: 208 }}
            renderInput={(params) => <TextField {...params} label="Ranking Period" />}
            //style={{marginLeft: 10, marginRight: 10}}
            style={{width: '100%'}}
          />
        </Grid>
        <Grid xs={1}>
          <Button
            id="filterButtonSearch"
            variant="contained"
            disableElevation
            style={{ backgroundColor: '#3EB489' }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ height: 1000, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          //components={{Toolbar: GridToolbar}}
          pageSize={25}
          rowsPerPageOptions={[25]}
          disableColumnMenu
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          componentsProps={{
            cell: {
              onMouseEnter: handlePopoverOpen
            }
          }}
          filterModel={{
            items: [{ columnField: 'athleteAge', operatorValue: '>', value: '0' }],
            items: [{ columnField: 'scorePoints', operatorValue: '>', value: '0' }],
            //linkOperator: GridLinkOperator.And
          }}
        />
        <Popover
          sx={{
            pointerEvents: "none"
          }}
          //open={open}
          disableRestoreFocus
        ></Popover>
      </Box>
    </div>
  );
}

export default Rankings;