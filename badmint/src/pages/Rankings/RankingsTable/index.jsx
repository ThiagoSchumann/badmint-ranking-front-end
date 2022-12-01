import * as React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "classification",
    headerName: "Classificação",
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Posição do atleta nesse Ranking, nessa Categoria, no período em questão",
  },
  {
    field: "athletesMembersIDs",
    headerName: "Member ID",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1MemberID}<br/>{/*cellValues.row.athlete2MemberID*/}</label>)},
    width: 150,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    description: "Código do atleta na Federação",
  },
  {
    field: "athletesNames",
    headerName: "Nome do Atleta/Dupla",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1Name}<br/>{/*cellValues.row.athlete2Name*/}</label>)},
    width: 400,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    description: "Nome do atleta (ou atletas, em caso de duplas)",
  },
  {
    field: "athletesAges",
    headerName: "Idade",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1Age}<br/>{/*cellValues.row.athlete2Age*/}</label>)},
    type: "number",
    width: 80,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Idade do atleta no período em questão",
  },
  {
    field: "athletesClubs",
    headerName: "Clube",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1Club}<br/>{/*cellValues.row.athlete2Club*/}</label>)},
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    description: "Clube do atleta no período em questão",
  },
  {
    field: "scorePoints",
    headerName: "Pontuação",
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
    headerAlign: "center",
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
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        marginTop: 1,
      }}
    >
      <DataGrid
        rows={rankingQueryResults}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        rowHeight={35}
        disableColumnMenu
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        componentsProps={{
          cell: {
            onMouseEnter: handlePopoverOpen,
          },
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