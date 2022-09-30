import React from "react";

function CreateRequest() {
  return (
    <div style={{ backgroundColor: "whitesmoke", width: "100%" }}>
      <form action="">
        <fieldset>
          <legend className="dailyStatusLegend">Create A Request</legend>
          <table className="leaveTable">
            <caption>Request Submissions</caption>
            <tbody>
              <tr>
                <td width={"100px"}></td>
                <td width={"250px"}>
                  <label className="leaveLabel" htmlFor="requestR1">
                    Request Type*
                  </label>
                </td>
                <td width={"500px"}>
                  <select id="requestR1">
                    <option>Select Request Type</option>
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
                    <option>Drinking Water is not clean</option>
                    <option>No Dedicated System for Me</option>
                    <option>No Monitor for My System</option>
                    <option>No CPU for My System</option>
                    <option>Need a Marker for My Lab</option>
                    <option>Need a Duster for My Lab</option>
                    <option>Other</option>
                  </select>
                </td>

                <td width={"300px"}></td>
              </tr>
              <tr>
                <td width={"100px"}></td>
                <td width={"250px"}>
                  <label className="leaveLabel" htmlFor="requestR2">
                    Lab ID*
                  </label>
                </td>
                <td width={"500px"}>
                  <select id="requestR2">
                    <option>Select Lab ID</option>
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
                  </select>
                </td>

                <td width={"300px"}></td>
              </tr>
              <tr>
                <td width={"100px"}></td>
                <td width={"250px"}>
                  <label className="leaveLabel" htmlFor="requestR3">
                    Seat Number*
                  </label>
                </td>
                <td width={"500px"}>
                  <select id="requestR3">
                    <option>Select Seat Number</option>
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
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                  </select>
                </td>

                <td width={"300px"}></td>
              </tr>

              <tr>
                <td width={"100px"}></td>
                <td width={"250px"}>
                  <label className="leaveLabel" htmlFor="leaveR3">
                    Leave Description*
                  </label>
                </td>
                <td width={"500px"} height={"100px"}>
                  <textarea id="leaveR3"> Leave Description....</textarea>
                </td>

                <td width={"300px"}></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    backgroundColor: "darkslategrey",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{
                      width: "70px",
                      height: "40px",
                      backgroundColor: "darkcyan",
                      marginRight: "20px",
                      borderStyle: "hidden",
                      color: "whitesmoke",
                      fontWeight: "400",
                    }}
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateRequest;
