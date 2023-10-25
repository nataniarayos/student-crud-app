import { Avatar } from "@hilla/react-components/Avatar.js";
import { Button } from "@hilla/react-components/Button.js";
import { EmailField } from "@hilla/react-components/EmailField.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
  const { id } = useParams();

	const [student, setStudent] = useState({
		id: "",
    firstName: "",
		lastName: "",
		email: "",
		department: "",
	});

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		const result = await axios.get(
			`http://localhost:8080/students/student/${id}`
		);
		setStudent(result.data);
	};

  return (
    <>
      <VerticalLayout
        theme="spacing padding"
        className="height-4xl"
        style={{ justifyContent: "center" }}
      >
        <HorizontalLayout
          theme="spacing padding"
          style={{ justifyContent: "center" }}
        >
        {/* <Avatar
          theme="xlarge"
          img="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
        /> */}
        <TextField readonly label="ID" value={`${student.id}`}></TextField>
        </HorizontalLayout>

        <HorizontalLayout
          theme="spacing padding"
          style={{ justifyContent: "center" }}
        >
          <TextField readonly label="First Name" value={`${student.firstName}`}></TextField>
          <TextField readonly label="Last Name" value={`${student.lastName}`}></TextField>
        </HorizontalLayout>

        <HorizontalLayout
          theme="spacing padding"
          style={{ justifyContent: "center" }}
        >
          <TextField readonly label="Email address" name="email" value={`${student.email}`} />
          <TextField
            readonly
            label="Department"
            value={`${student.department}`}
            clearButtonVisible
          ></TextField>
        </HorizontalLayout>

        {/* <HorizontalLayout theme="spacing padding">
        <Button theme="primary">Save</Button>
        <Button theme="secondary">Cancel</Button>
      </HorizontalLayout> */}
      </VerticalLayout>
    </>
  );
};

export default StudentProfile;
