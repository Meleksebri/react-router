import { Form } from "react-bootstrap";
import React from "react";
import Stars from "./Stars";

export default function Filter({ search1, search2 }) {
  return (
    <div>
      <Form className="Search-container">
        <Form.Group className="mb-3 mb-33" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search" onChange={search1} />
        </Form.Group>
        <Stars search2={search2} />
      </Form>
    </div>
  );
}
