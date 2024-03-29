import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RateStudentForm } from "./RateStudent/RateStudentForm";
import { useRateStudents } from "./RateStudent/RateStudents.hook";

export default function RateStudents({ students, groupId, registers }) {
  const { id } = useParams();

  const [ratings, setRatings] = useState([]);
  const { currentIndexStudent, hasNextStudent, nextStudent } =
    useRateStudents(students);

  //TODO: enviar al controlador como metodo getStudentsByGroup
  const filteredStudents = students.filter((student) => student.group === id);

  return (
    <div className="allstudents">
      <div className="bottomContainer">
        {filteredStudents.length === 0 ? (  <p>You have no students in this group!</p>
        ) : (
          <ul>
            {filteredStudents.map((student) => (
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "8px",
                  padding: "8px",
                  display:
                    currentIndexStudent === students.indexOf(student)
                      ? "block"
                      : "none",
                }}
              >
                <RateStudentForm student={student} />

                {hasNextStudent() && (
                  <button onClick={nextStudent}>Next Student</button>
                )}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
