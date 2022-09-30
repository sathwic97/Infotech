import React from "react";

function DailyStatus() {
  return (
    <div style={{ backgroundColor: "whitesmoke", width: "100%" }}>
      <fieldset>
        <legend className="dailyStatusLegend">
          <h3>DAILY STATUS UPDATE</h3>
        </legend>
        <table className="dailyStatusTable">
          <caption>Daily Activities Form</caption>
          <thead></thead>
          <tbody>
            <tr>
              <th>
                <label htmlFor="910">Morning 9:00-10:00 AM*</label>
              </th>
              <td>
                <input
                  id="910"
                  placeholder="Write activites worked between 9:00AM-10:00AM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="1011">Morning 10:00-11:00 AM*</label>
              </th>
              <td>
                <input
                  id="1011"
                  placeholder="Write activites worked between 10:00AM-11:00AM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="1112">Morning 11:00-12:00 PM*</label>
              </th>
              <td>
                <input
                  id="1112"
                  placeholder="Write activites worked between 11:00AM-12:00PM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="1201">Afternoon 12:00-1:00 PM*</label>
              </th>
              <td>
                <input
                  id="1201"
                  placeholder="Write activites worked between 12:00PM-1:00PM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="0102">Afternoon 1:00-2:00 PM*</label>
              </th>
              <td>
                <input
                  id="0102"
                  placeholder="Write activites worked between 1:00PM-2:00PM  "
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="0203">Afternoon 2:00-3:00 PM*</label>
              </th>
              <td>
                <input
                  id="0203"
                  placeholder="Write activites worked between 2:00 PM-3:00 PM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="0304">Afternoon 3:00-4:00 PM*</label>
              </th>
              <td>
                <input
                  id="0304"
                  placeholder="Write activites worked between 3:00 PM- 4:00 PM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="0405">Evening 4:00-5:00 PM*</label>
              </th>
              <td>
                <input
                  id="0405"
                  placeholder="Write activites worked between 4:00 PM- 5:00 PM"
                ></input>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="0607">
                  Evening 6:00- Till You Leave Office*
                </label>
              </th>
              <td>
                <input
                  id="0607"
                  placeholder="Write activites worked between 6:00 PM- Sign Off"
                ></input>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={2}
                style={{ backgroundColor: "darkslategrey", padding: "10px" }}
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
    </div>
  );
}

export default DailyStatus;
