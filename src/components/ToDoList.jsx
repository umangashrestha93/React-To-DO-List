// import React, { useState } from 'react'
// import '../css/ToDoList.css'
// function ToDoList() {
//     const [activity, setActivity] = useState("")
//     const [listData, setListData] = useState([])
//     const [desc, setDesc] = useState("")
//     function addActivity(){
//             // setListData([...listData, activity])
//             // console.log(listData)
//             setListData((listData)=>{
//                 const updatedList = [...listData, activity]
//                 console.log(updatedList)
//                 setActivity('');
//                 return updatedList
//             })
//     }
//     function eraseActivity(i){
//         const updatedListData = listData.filter((elem, id)=>{
//             return i!=id;
//         })
//         setListData(updatedListData);

// }
// function eraseAll(){
//     setListData([])
// }

// const renderListItem = (data, i) => {
//         return(<>
        
//             <p key={i}>
//                 <div className='list-data'><h1>{data}</h1></div>
//                 <div className='button-position'><button onClick={()=>eraseActivity(i)}>Erase</button></div>
                
//                 </p> 
//         </>)
// } 
//     return (
//         <>
//             <div className='container'>
//                 <div className='header'>To Do List</div>
//                 <input type='text' placeholder='Title' value={activity} onChange={(e) => setActivity(e.target.value)}/>
//                 <input type='text' placeholder='description' value={desc} onChange={(e) => setActivity(e.target.value)}/>
//                 <button onClick={addActivity}> Add</button>
//                 <p className='list-header'>Your List goes here!!</p>
//                 {listData.map(renderListItem)}
//                 <div className='btn-erase'>
//                 {listData.length>=1 && 
//                 <button onClick={eraseAll}>Erase All</button>}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ToDoList
