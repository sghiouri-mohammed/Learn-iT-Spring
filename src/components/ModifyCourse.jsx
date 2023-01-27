import React from "react";

export default function ModifyCourse(){
    return (

        <div class="container-fluid col-md-8 p-2 mt-2">
             <form>
               <fieldset>

                 <h1 className="h1" >Add Course</h1>
                 
                 <div class="form-group">
                   <label for="nom">Course name :</label>
                   <input type="text" class="form-control" id="nom" placeholder="Course Name"/>
                 </div>
                 
                 <div class="form-group">
                   <label for="description">Course description</label>
                   <textarea type="text" class="form-control" id="desc" placeholder="Course description ..."/>
                 </div>

                 <div class="form-group">
                   <label for="file">Course file :</label>
                   <input type="file" class="form-control" id="file" placeholder="Course file ..."/>
                 </div>
                           
                 <div class="form-group">
                   <label for="selection">Instructors list :</label>
                   <select id="selection" class="form-control">
                     <option value="">Liste des instructeurs...</option>
                        <option value="">Option 1</option>
                   </select>
                 </div>

                 <input type="submit" value="Update Course" className="btn btn-lg btn-primary float-right"/>
                 
               </fieldset>
             </form>
         </div>
    );
}