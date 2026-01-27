import React,{Componet, useState} from "react"; 
export default function Hook2(){
    const [user, setUser] = useState({name: "Alice", age: 25,ce : true, city: "Rajkot"});
    return(
       <>
       <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
         <input type="number" value={user.age} onChange={(e) => setUser({...user, age: parseInt(e.target.value)})} />
            <input type="text" value={user.city} onChange={(e) => setUser({...user, city: e.target.value})} />
            <input type="checkbox" checked={user.ce} onChange={(e) => setUser({...user, ce: e.target.checked})} />
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>City: {user.city}</h2>
            <h2>CE Student: {user.ce ? "Yes" : "No"}</h2>
         </>
         
    )
}
