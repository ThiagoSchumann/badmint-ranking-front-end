import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

const columns = [
  {
    field: "classification",
    headerName: "Classification",
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Posição do atleta nesse Ranking no período em questão",
  },
  {
    field: "athleteMemberID",
    headerName: "Member ID",
    width: 150,
    sortable: false,
    hideable: false,
    description: "Código do atleta na Federação",
  },
  {
    field: "athleteName",
    headerName: "Athlete Name",
    width: 400,
    sortable: false,
    hideable: false,
  },
  {
    field: "athleteAge",
    headerName: "Age",
    type: "number",
    width: 50,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Idade do atleta no período em questão",
  },
  {
    field: "athleteClub",
    headerName: "Club",
    width: 110,
    sortable: false,
    hideable: false,
    description: "Clube do atleta no período em questão",
  },
  {
    field: "scorePoints",
    headerName: "Score Points",
    type: "number",
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Pontos válidos do atleta no período em questão",
  },
  {
    field: "testDescription",
    headerName: "Test Description",
    description: "This column has a value getter and is not sortable.",
    width: 300,
    sortable: false,
    hideable: false,
    valueGetter: (params) =>
      `${params.row.athleteName || ""} testing ${
        params.row.athleteMemberID || ""
      }`,
    hide: true,
  },
];

function RankingsTable({ rankingQueryResults }) {
  const handlePopoverOpen = (event) => {};

  return (
    <Box sx={{ height: "75vh", width: "100%" }}>
      <DataGrid
        rows={rankingQueryResults}
        columns={columns}
        //components={{Toolbar: GridToolbar}}
        pageSize={25}
        rowsPerPageOptions={[25]}
        disableColumnMenu
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        componentsProps={{
          cell: {
            onMouseEnter: handlePopoverOpen,
          },
        }}
        filterModel={{
          items: [
            { columnField: "athleteAge", operatorValue: ">", value: "0" },
          ],
          items: [
            { columnField: "scorePoints", operatorValue: ">", value: "0" },
          ],
          //linkOperator: GridLinkOperator.And
        }}
      />
      <Popover
        sx={{
          pointerEvents: "none",
        }}
        //open={open}
        disableRestoreFocus
      ></Popover>
    </Box>
  );
}

export default RankingsTable