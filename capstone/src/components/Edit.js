import e from "cors";
import React, { Fragment, useEffect, useState } from "react";


 const Edit = ({ subscription_details }) => {
    const[newduedate,setDueDate]=useState(subscription_details.duedate)
    //Edit Item Function

    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const body = { newduedate };
            const response = await fetch(`http://localhost:5000/subscription/${subscription_details.sub_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/Sub";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
<div>

<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>


<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" className="form-control"
        value={newduedate}
        placeholder="update your due date"
        onChange={e=>setDueDate(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={()=>setDueDate(subscription_details.duedate)} data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=>updateItem(e)}>Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
    )
}

export default Edit;