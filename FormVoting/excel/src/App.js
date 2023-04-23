import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [fileurl, setFileurl] = useState('https://docs.google.com/spreadsheets/d/1CqiPgS-1QINp5jl4A7H3NsJSJF6rLvdNy28K9m_egOY/export?format=xlsx&id=1CqiPgS-1QINp5jl4A7H3NsJSJF6rLvdNy28K9m_egOY');
  const mapcan = new Map();
  const [candidatevote,setcandidatevote] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(fileurl);
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      for(let i=0;i<parsedData.length;i++){
        if(mapcan[parsedData[i]['Candidate Name']]===undefined){
          mapcan.set(parsedData[i]['Candidate Name'],0);
        }
        mapcan.set(parsedData[i]['Candidate Name'],mapcan.get(parsedData[i]['Candidate Name'])+1);
      }
      let lis=[]
      console.log(mapcan.entries());
      for (let [key, value] of mapcan.entries()) {
        lis.push([key,value]);
      }
      console.log(lis);
      setcandidatevote(lis);
      setData(parsedData);
    };
    fetchData();
  },[]);

  return (
    <div className="App">
      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Vote Count</th>
            </tr>
          </thead>
          <tbody>
            {candidatevote.map((item) => (
              <tr key={item[0]}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default App;
