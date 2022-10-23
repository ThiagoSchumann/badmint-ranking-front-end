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
  { id: 1, name: "Estadual SC", },
  { id: 2, name: "Estadual PR", },
  { id: 3, name: "Clube XYZ", },
  { id: 4, name: "Nacional", },
  { id: 5, name: "Clube IBAd", },
]


//"api/category?rankingId=123"
// -> pro dropdown das categorias
const categories=[
  { id: 1, name: "Masculino Duplas Sub-17", },
  { id: 2, name: "Feminino Simples Principal", },
  { id: 3, name: "Misto Duplas Senior", },
] 

// "api/ranking-query?ranking=123&category=abc"

const rankingQuery = [
  {
    id: 1, classification: 1, scorePoints: 2780,
    athlete1MemberID: 'ab123', athlete1Name: 'Jon Snow', athlete1Age: 35, athlete1Club: 'IBAD',
    athlete2MemberID: '', athlete2Name: '', athlete2Age: null, athlete2Club: ''
  },
  {
    id: 2, classification: 2, scorePoints: 2590,
    athlete1MemberID: 'cd456', athlete1Name: 'Cersei Lannister', athlete1Age: 42, athlete1Club: 'CBBd',
    athlete2MemberID: '', athlete2Name: '', athlete2Age: null, athlete2Club: '',
  },
  {
    id: 3, classification: 3, scorePoints: 2100,
    athlete1MemberID: 'ef789', athlete1Name: 'Jaime Lannister', athlete1Age: 45, athlete1Club: 'IBAD',     
    athlete2MemberID: 'string123test', athlete2Name: 'Khal Drogo', athlete2Age: 12, athlete2Club: 'IBCT',
  },
  {
    id: 4, classification: 4, scorePoints: 1880,
    athlete1MemberID: 'gh012', athlete1Name: 'Arya Stark', athlete1Age: 16, athlete1Club: 'IBAD',     
    athlete2MemberID: '', athlete2Name: '', athlete2Age: null, athlete2Club: '',
  },
  {
    id: 5, classification: 5, scorePoints: 1740,
    athlete1MemberID: 'ij345', athlete1Name: 'Daenerys Targaryen  Sansa Stark Tyrion Lannis da Silva Frederico Neto Antunes de Oliveira Fernandes dos Testes de String Longa', athlete1Age: 19, athlete1Club: 'Joacaba',
    athlete2MemberID: '', athlete2Name: '', athlete2Age: null, athlete2Club: '',
  },
  {
    id: 6, classification: 6, scorePoints: 1720,
    athlete1MemberID: 'kl678', athlete1Name: 'Robb Stark', athlete1Age: 150, athlete1Club: 'CBBd',
    athlete2MemberID: '', athlete2Name: null, athlete2Age: null, athlete2Club: '',
  },
  {
    id: 7, classification: 7, scorePoints: 1050,
    athlete1MemberID: 'mn901', athlete1Name: 'Ferrara Clifford', athlete1Age: 44, athlete1Club: 'IBCT',
    athlete2MemberID: 'wefj7853jfowe', athlete2Name: 'Septa Unella', athlete2Age: 12, athlete2Club: 'IBCT',
  },
  {
    id: 8, classification: 8, scorePoints: 970,
    athlete1MemberID: 'op234', athlete1Name: 'Rossini Frances', athlete1Age: 36, athlete1Club: 'Joacaba',
    athlete2MemberID: '', athlete2Name: '', athlete2Age: null, athlete2Club: '',
  },
  {
    id: 9, classification: 9, scorePoints: 360,
    athlete1MemberID: 'qr567', athlete1Name: 'Harvey Roxie', athlete1Age: 65, athlete1Club: 'CBBd',
    athlete2MemberID: '', athlete2Name: '', athlete2Age: null, athlete2Club: '',
  },
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