import React from "react";

export default function AddCourse(){
    return (
        <div class="container-fluid col-md-8 p-2 mt-2">
             <form>
               <fieldset>

                 <h1 className="h1" >Add Course</h1>
                 
                 <div className="form-group">
                   <label for="nom">Course name :</label>
                   <input type="text" className="form-control" id="nom" placeholder="Course Name"/>
                 </div>
                 
                 <div className="form-group">
                   <label for="description">Course description</label>
                   <textarea type="text" className="form-control" id="desc" placeholder="Course description ..."/>
                 </div>

                <div className="mb-3">
                  <label for="formFile" className="form-label">Default file input example</label>
                  <input className="form-control" type="file" id="formFile"/>
                </div>
                           
                 
                 <div className="form-group">
                   <label for="selection">Instructors list :</label>
                   <select id="selection" className="form-control">
                     <option value="">Liste de choix...</option>
                        <option value="">Option 1</option>
                   </select>
                 </div>

                 <input type="submit" value="Add" className="btn btn-lg btn-primary float-right"/>

 
               </fieldset>
             </form>
         </div>
    );
}