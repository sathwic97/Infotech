import React from 'react'

function Leave() {
  return (
    <form className='form3'>
        <div className='daily'><label id="create1">Apply for Leave</label>
        <label className='font'>Choose Leave type, dates and describe</label></div>
        <label className='font' style={{display:"inline-block"}}>Home ^ Apply Leave ^</label>
        <fieldset className='form5'>
        <legend className='legend'>Leave Details</legend>
        <div className='labelling'><label id="forcolor" className='labelmargin' style={{display:"inline-block"}}>Leave Type *</label>
        <select className='forsize'>
		<option>Select...</option>
		<option>Casual Leave</option>
		<option>Emergency Leave</option>
		<option>Sick Leave</option>
		</select></div>
        <b>Casual Leave:</b> For attending any planned activity.<br></br>
        <b>Sick Leave:</b> For not feeling well, Unable to come to office.<br></br>
        <b>Emergency Leave:</b>For any Urgencies/emergencies.
        <div className='labelling'><label id="forcolor"className='labelmargin' style={{display:"inline-block"}}>Leave Date(s) *</label>
        <input className='forsize' style={{width:"18rem", height:"2rem"}} type="date"></input>
        <label id="forcolor"className='labelmargin, bg' style={{display:"inline-block", width:"2rem"}}>till</label>
        <input  className='forsize' style={{width:"15rem", height:"2rem"}} type="date"></input></div>
        <h5>Total Number of Leaves</h5>
        <b>Leaves Taken:</b> 0 | <b>Max. Leaves:</b> 4 | <b>Leaves Available:</b> 4
        <div className='labelling'><label id="forcolor"className='labelmargin' style={{display:"inline-block"}}>Leave Description *</label>
        <textarea id="forcolor"className='labelmargin' style={{display:"inline-block", width:"40rem"}}  placeholder='Leave Description'></textarea></div>
        <h5>Please describe the reason why are you taking leave</h5></fieldset>
        <div className='submitbtn'><button id='butn' className='signupbtn' style={{width:"9rem"}}>Apply Leave(s)</button>
        <button className='signupbt'style={{height: "2.5rem"}}>Cancel</button></div>
		
    </form>
  )
}

export default Leave