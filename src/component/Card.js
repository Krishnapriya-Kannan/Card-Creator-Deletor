import React, { useState } from 'react';
function From(){
    const initialData = Object.freeze({name:'',email:'',phn:'',url:''});
  const [list,setList]= useState([]);
  const [data,changeData]= useState(initialData);
  const handleChange=(e)=>{
    changeData({...data,[e.target.name]:e.target.value.trim()});
  }
  const handleSubmit=(e)=>{
    const newlist = list
    newlist.unshift({name : data.name,email:data.email,phn:data.phn,url:data.url}) 
    setList([...newlist]);
    console.log(list);

  }
  const deleteData=(i)=>{
    alert(i);
    var newlist = list;
    newlist.splice(i,1);
    setList([...newlist]);
    console.log(list);
  }
  
    return(
        <div className="App">
            <h1 style={{ fontWeight: 'bold' }}>Card Creator</h1>
        <div className='box1'>
        <label>Please Enter your name</label><br />
        <input name='name' onChange={handleChange} /><br />
        <label>Please Enter your email</label><br />
        <input name='email' backgroundColor='powderblue' onChange={handleChange} /><br />
        <label>Enter your Contact Number</label><br />
        <input name='phn' onChange={handleChange} /><br />
        <label>Paste your profile picture URL</label><br />
        <input name='url' onChange={handleChange} /><br />
        <button onClick={handleSubmit}>Create Card</button>
      </div>
      <div>
{list.map(
          (info, ind) => {
            return (

              <div className='box2'>
                <div key={ind}
                  style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "ghostwhite",
                  }}
                >
                  <div style={{ paddingTop: '20px' }}>

                    <img src={info.url} alt='profile' /><br />
                    <div><label>name: {info.name}<br /> </label>
                      <label>email: {info.email}<br /> </label>
                      <label>contact number: {info.phn}<br /> </label>
                    </div>
                    <button onClick={() => deleteData(ind)}>delete</button>

                  </div>
                </div>
              
              </div>

            );
          }
        )}
</div>
      </div>
    );
}
export default From;