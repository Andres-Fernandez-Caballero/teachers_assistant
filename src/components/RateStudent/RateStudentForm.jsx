import { SelectInput } from "./SelectInput";

export const RateStudentForm = ({ student, onClick }) => {

  const handleOnSubmit = (event) => {
    event.preventDefault()
    // logica para guardar el register
  }

  return (
    <div>
      <h3>
        <strong>{student.body}</strong>
      </h3>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>
            Attendance:
            <input type="checkbox" name="attendance" defaultChecked />
          </label>
        </div>
        <div>
          <label>
            Homework Completion:
            <input type="checkbox" name="homework" defaultChecked />
          </label>
        </div>
        <div>
          <SelectInput
            label="Participacion"
            options={[
              { value: "A", textOutput: "Exellent" },
              { value: "B", textOutput: "Good" },
              { value: "C", textOutput: "Above Average" },
              { value: "D", textOutput: "Average" },
              { value: "E", textOutput: "Below Average" },
              { value: "F", textOutput: "Poor" },
            ]}
            
          />
        </div>
        <button type="submit">Submit Ratings</button>
      </form>
    </div>
  );
};
