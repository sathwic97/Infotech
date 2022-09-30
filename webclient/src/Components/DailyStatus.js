import React from 'react'

function DailyStatus() {
  return (
    <form className='form3'>
        <div className='daily'><label id='status'>Daily Status Update</label>
        <label className='font'> Write your today's Status Update</label></div>
        <label className='font' style={{display:"inline-block"}}>Home ^ Daily Status Update ^ </label><br></br>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Morning 9:00-10:00 AM * </label>
       <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 9:00-10:00 AM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Morning 10:00-11:00 AM * </label>
       <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 10:00-11:00 AM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Morning 11:00-12:00 AM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 11:00-12:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Afternoon 12:00-1:00 PM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 12:00-1:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Afternoon 1:00-2:00 PM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 1:00-2:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Afternoon 2:00-3:00 PM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 2:00-3:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Afternoon 3:00-4:00 PM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 3:00-4:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Evening 4:00-5:00 PM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 4:00-5:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Evening 5:00-6:00 PM * </label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked between 5:00-6:00 PM" maxlength="100"></input></div>
        <div className='label'><label className='labelmargin' style={{display:"inline-block"}}>Evening 6:00- Till you leave Office *</label>
        <input style={{width:"50rem", height:"2rem"}} placeholder="Write activities worked from 6:00 PM till you leave for the day" maxlength="100"></input></div><br></br>
        <button className='updatebtn'>Update Today's Task</button>
        
    </form>
  )
}

export default DailyStatus