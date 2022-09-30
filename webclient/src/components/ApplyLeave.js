import React from "react";

function ApplyLeave() {
  return (
    <div style={{ backgroundColor: "whitesmoke", width: "100%" }}>
      <form action="">
        <fieldset>
          <legend className="dailyStatusLegend">Apply Leave</legend>
          <table className="leaveTable">
            <caption>Leave Details</caption>
            <tbody>
              <tr>
                <td width={"100px"}></td>
                <td width={"250px"}>
                  <label className="leaveLabel" htmlFor="leaveR1">
                    Leave Type*
                  </label>
                </td>
                <td width={"500px"}>
                  <select id="leaveR1">
                    <option>Select Leave Type</option>
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Emergency Leave</option>
                  </select>
                </td>

                <td width={"300px"}></td>
              </tr>
              <tr>
                <td width={"100px"}></td>
                <td width={"250px"}>
                  <label className="leaveLabel" htmlFor="leaveR2">
                    Leave Date(s)*
                  </label>
                </td>
                <td width={"500px"}>
                  <input id="leaveR2" type={"date"}></input>
                  <span
                    style={{
                      backgroundColor: "cadetblue",
                      width: "30px",
                    }}
                  >
                    Till
                  </span>

                  <input id="leaveR2" type={"date"}></input>
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
                  <textarea
                    id="leaveR3"
                    placeholder="Leave Description...."
                  ></textarea>
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

export default ApplyLeave;
