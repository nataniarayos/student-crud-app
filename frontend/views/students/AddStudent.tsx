import { Button } from "@hilla/react-components/Button.js";
import { EmailField } from "@hilla/react-components/EmailField.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { Icon } from "@hilla/react-components/Icon.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useForm, useFormPart } from "@hilla/react-form";
import { TextFieldChangeEvent } from "@vaadin/text-field";
import { StudentEndpoint } from "Frontend/generated/endpoints";
import React, { useState } from "react";
import StudentModel from "Frontend/generated/com/example/application/model/StudentModel";

const AddStudent = () => {


  const { model, submit, field, invalid} = useForm(StudentModel, {
    onSubmit: async (student) => {
        await StudentEndpoint.add(student);
      }
    }, 
    );

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
          
          <TextField label="First name" {...field(model.firstName)}/>
          <TextField label="Last name" {...field(model.lastName)}/>
          <EmailField
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            label="Email address"
            errorMessage="Enter a valid email address"
            {...field(model.email)}
          />
          <TextField label="Department" {...field(model.department)}></TextField>
        </FormLayout>
        <HorizontalLayout theme="spacing padding">
          <Button theme="primary" onClick={submit} disabled={invalid}>Save</Button>
          <Button theme="secondary">Cancel</Button>
        </HorizontalLayout>
      </VerticalLayout>
    </>
  );
};

export default AddStudent;
