import React from 'react'

function Request() {
  return (
    <form className='form3'>
        <div className='daily'><label id="create1">Create Request</label>
        <label className='font'>Choose Request type, and describe</label></div>
        <label className='font' style={{display:"inline-block"}}>Home ^ Create a request ^</label><br></br>
        <fieldset className='form5'>
          <legend className='legend'>Create a Request</legend>
          <div className='labelling'><label id="forcolor" className='labelmargin' style={{display:"inline-block"}}>Request Type *</label>
        <select className='forsize'>
		<option>Select...</option>
		<option>New Software Installation</option>
        <option>Unable to Login thru my Username</option>
		<option>Internet Not Working</option>
		<option>Monitor Display Problem</option>
		<option>System Hangs Frequently</option>
		<option>Audio Not Working</option>
		<option>OS Not Booting</option>
		<option>Install XCode</option>
		<option>Keyboard Not Working Properly</option>
		<option>No Keyboard</option>
		<option>Mouse Not Working Properly</option>
		<option>No Mouse</option>
		<option>Dusty Mouse</option>
		<option>Dusty Keyboard</option>
		<option>Dusty Desk</option>
		<option>Dusty Room</option>
		<option>Cleaning Required for Bathroom</option>
		<option>Liquid Handwash Required</option>
		<option>Liquid Dishwash Required</option>
		<option>Chair is Not Clean</option>
		<option>Chair is Not Proper</option>
		<option>Drinking Water is not Clean</option>
		<option>No Dedicated System for Me</option>
		<option>No Monitor for My System</option>
		<option>No CPU for My System</option>
		<option>Need a Marker for My Lab</option>
		<option>Need a Duster for My Lab</option>
		<option>Other</option>
		</select></div>
    <div className='labelling'><label id="forcolor"className='labelmargin' style={{display:"inline-block"}}>Lab ID *</label>
        <select className='forsize'>
	    <option>Select...</option>
	<option>Select...</option>
    <option>L1H</option>
    <option>L12</option>
    <option>L13</option>
    <option>L14</option>
    <option>L2H</option>
    <option>L21</option>
    <option>L22</option>
    <option>L23</option>
    <option>L24</option>
    <option>L31</option>
    <option>L32</option>
    <option>L33</option>
    </select></div>
    <div className='labelling'><label id="forcolor" className='labelmargin' style={{display:"inline-block"}}>Seat Number *</label>
    <select className='forsize'>
   <option>Select...</option>
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
   <option>6</option>
   <option>7</option>
   <option>8</option>
   <option>9</option>
   <option>10</option>
   <option>11</option>
   <option>12</option>
   <option>13</option>
   <option>14</option>
   <option>15</option>
   <option>16</option>
   <option>17</option>
   <option>18</option>
   <option>19</option>
   <option>20</option>
   <option>21</option>
   <option>22</option>
   <option>23</option>
   <option>24</option>
   <option>25</option>
   </select></div>
   <div className='labelling'><label id="forcolor" className='labelmargin' style={{display:"inline-block"}}>Description *</label>
   <textarea className='forsize' placeholder='Ticket Description'></textarea></div>
   <label id='detail' className='labelmargin' style={{display:"block"}}>Please describe in detail</label></fieldset>
   <div className='submitbtn'><button id='butn' className='signupbtn'>Submit</button></div>
    </form>
  )
}

export default Request