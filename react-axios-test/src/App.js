import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [memlist, setMemList] =useState([]);

  // const fetchData=async()=>{
  //     const response = await axios.get("http://localhost:3000/memberAll",
  //                                     {params:{title:"제목입니다",number:1024 }})
  //     console.log(response.data);
  // }

  const fetchData=async()=>{
    await axios.post("http://localhost:3000/All",null, {params:{ title:"제목입니다",number:1024 }})
                    .then(function(response){   // success
                      console.log(response.data);

                      setMemList(response.data)
                    })
                    .catch(function(error){   // error
                      alert(error);
                    })
  }

  useEffect(()=>{
    fetchData();
  },[])

const list = memlist.map(function(mem,i){
  return (
    // <tr key={index}>
    //   <td>{index+1}</td>
    //   <td>{abc.id}</td>
    //   <td>{abc.pwd}</td>
    //   <td>{abc.name}</td>
    //   <td>{abc.email}</td>
    //   <td>{abc.auth}</td>
    // </tr>
      <TableRow cnt={i+1} obj={mem} key={i} />
  )
});


  return (
    <div>
      <table border={1}>
        <colgroup>
          <col width="50"/><col width="100"/><col width="100"/>
          <col width="100"/><col width="100"/><col width="50"/>
        </colgroup>
        <thead>
          <tr>
            <th>순서</th>
            <th>ID</th>
            <th>PWD</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AUTH</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
}
function TableRow(props){

  return(
    <tr>
      <th>{ props.cnt }</th>
      <th>{ props.obj.id }</th>
      <th>{ props.obj.pwd }</th>
      <th>{ props.obj.name }</th>
      <th>{ props.obj.email }</th>
      <th>{ props.obj.auth }</th>
    </tr>
  )
}


export default App;
