import React from "react";

export default function AddQuiz(){
    return (
        <div class="container-fluid col-md-8 p-2 mt-2">
             <form>
               <fieldset>
                 <h1 className="h1" >Add Quiz</h1>
                 
                 <div class="form-group">
                   <label for="nom">Quiz Tilte :</label>
                   <input type="text" class="form-control" id="nom" placeholder="Quiz Title"/>
                 </div>
                 
                 <div class="form-group">
                   <label for="description">Question .1</label>
                   <textarea type="text" class="form-control" id="desc" placeholder="Question .1"/>
                 </div>

                 <div class="form-group col-md-">
                   <input type="text" class="form-control" id="desc" placeholder="Reponse A"/>
                 </div>

                 <div class="form-group">
                   <input type="text" class="form-control" id="desc" placeholder="Reponse B"/>
                 </div>

                 <div class="form-group">
                   <input type="text" class="form-control" id="desc" placeholder="Reponse C"/>
                 </div>

                 <div class="form-group">
                   <input type="text" class="form-control" id="desc" placeholder="Reponse D"/>
                 </div>

                 <input type="submit" value="Add" className="btn btn-lg btn-primary float-right"/>
               </fieldset>
             </form>
         </div>
    );
}