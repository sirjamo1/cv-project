import React from "react";
import EducationForm from "./EducationForm";
import EducationText from "./EducationText";


const Education = (props) => {
 const { education, handleFormChange, onFormSubmit, onEditClick } =
     props;

 return (
     <div>
         {education.edit === true ? (
             <EducationForm
                 education={education}
                 handleFormChange={handleFormChange}
                 onFormSubmit={onFormSubmit}
             />
         ) : (
             <EducationText
                 education={education}
                 onEditClick={onEditClick}
             />
         )}
     </div>
 );
}

export default Education