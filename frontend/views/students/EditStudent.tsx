import { Button } from "@hilla/react-components/Button.js";
import { EmailField } from "@hilla/react-components/EmailField.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useForm } from "@hilla/react-form";
import StudentModel from "Frontend/generated/com/example/application/model/StudentModel";
import { StudentEndpoint } from "Frontend/generated/endpoints";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditStudent = () => {
  
  function getIdByUrl() {
    const url = document.URL;
    return Number(url.split("/").pop());
  }

  const { model, submit ,field, read} = useForm(StudentModel,{
    onSubmit: async (student) => {
        await StudentEndpoint.update(student);
      }
    });

  useEffect(() => {
    StudentEndpoint.getStudentById(getIdByUrl()).then(read);
  }, []);

  const responsiveSteps = [
    { minWidth: "0", columns: 1 },
    { minWidth: "500px", columns: 2 },
  ];
  return (
    <>
      <VerticalLayout
        theme="spacing padding"
        className="height-4xl"
        style={{ justifyContent: "center" }}
      >
        <FormLayout responsiveSteps={responsiveSteps}>
          <TextField label="First name" {...field(model.firstName)} />
          <TextField label="Last name" {...field(model.lastName)} />
          <EmailField
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            label="Email address"
            {...field(model.email)}
            errorMessage="Enter a valid email address"
          />
          <TextField
            label="Department"
            {...field(model.department)}
          ></TextField>
        </FormLayout>
        <HorizontalLayout theme="spacing padding">
          <Button theme="primary" onClick={submit}>Save</Button>
          <Link
                  to="/"
                  className="btn btn-info"
                >
          <Button theme="secondary">Cancel</Button>
          </Link>
        </HorizontalLayout>
      </VerticalLayout>
    </>
  );
};

export default EditStudent;
