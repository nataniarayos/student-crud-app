import { Button } from "@hilla/react-components/Button.js";
import { ContextMenu } from "@hilla/react-components/ContextMenu.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import Student from "Frontend/generated/com/example/application/model/Student";
import { StudentEndpoint } from "Frontend/generated/endpoints";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentsView = () => {
  const [students, setStudents] = useState<Student[]>([]);
  
  const loadStudents = async () => {
    try {
      const fetchedStudents = await StudentEndpoint.findAll();
      setStudents(fetchedStudents);
    } catch (error) {
      console.error('Error loading students:', error);
    }
  };

  const handleDelete = async (id: number | undefined) => {
    try {
      await StudentEndpoint.deleteStudentById(id);
      // After successful deletion, reload students
      await loadStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  useEffect(() => {
    // Load students on component mount
    loadStudents();
  }, []); 

  const items = [{ text: "View" }, { text: "Edit" }, { text: "Delete" }];
  // console.log(students);
  return (
    <ContextMenu items={items}>
      
      <Grid allRowsVisible items={students}>
        <GridColumn header="ID" path="id" />
        <GridColumn header="First Name" path="firstName" />
        <GridColumn header="Last Name" path="lastName" />
        <GridColumn header="Email" path="email" />
        <GridColumn header="Department" path="department" />
        <GridColumn header="Action">
          {({ item: students }) => (
            <HorizontalLayout theme="spacing padding">
              <Button theme="tertiary">
                <Link
                  to={`/student-profile/${students.id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </Button>
              <Button theme="tertiary">
              <Link
                  to={`/edit-student/${students.id}`}
                  className="btn btn-info"
                >
                <FaEdit />
                </Link>
              </Button>
              <Button
                theme="tertiary error"
                onClick={() => handleDelete(students.id)}
              >
                <FaTrashAlt />
              </Button>
            </HorizontalLayout>
          )}
        </GridColumn>
      </Grid>
    </ContextMenu>
  );
};

export default StudentsView;
