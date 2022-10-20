// const USE_REMOTE_API=process.env.USE_REMOTE_API
const USE_REMOTE_API=false

// async function onBuscar() {
//   try {
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//     setLocalidade(response.data.localidade);
//   } catch (error) {
//     console.error(error);
//   }
// }


// ranking=123="Estadual SC"
// category=abc="Simples masculino sub 17"

//"api/rankings"
// -> pro dropdown do ranking
const rankings=[
  {
    id: 1,
    name: "Estadual SC", 
  },
  {
    id: 2,
    name: "Estadual PR", 
  },
  {
    id: 3,
    name: "Estadual SP", 
  },
]


//"api/category?rankingId=123"
// -> pro dropdown das categorias
const categories=[
  {
    id: 1,
    name: "Masculino duplas sub-17",
  },
  {
    id: 2,
    name: "Feminino simples principal",
  },
  {
    id: 3,
    name: "Misto duplas senior",
  },
] 

// "api/ranking-query?ranking=123&category=abc"

const rankingQuery = [
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

//https://bwfworldtour.bwfbadminton.com/rankings/?id=9&cat_id=57&ryear=2022&week=40&page_size=25&page_no=1

class RemoteApiAdapter {
  get(url) {
    throw new Error("Method not implemented.");
  }
  post(url, params, data) {
    throw new Error("Method not implemented.");
  }
  delete(url, params) {
    throw new Error("Method not implemented.");
  }

}

class StubApiAdapter {
  async get(url) {
    if(url.includes("rankings")) {
      return { data: rankings };
    }
    if(url.includes("categories")) {
      return { data: categories };
    }
    if(url.includes("ranking-query")) {
      return { data: rankingQuery };
    }
  }
  post(params) {
    throw new Error("Method not implemented.");
  }
  delete(params) {
    throw new Error("Method not implemented.");
  }
}

const ApiAdapter = USE_REMOTE_API ? new RemoteApiAdapter() : new StubApiAdapter();

export default ApiAdapter;
