import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const Model = ({ modal, toggle, edit }) => {
  const [nickname, setnickname] = useState(edit?.nick_name || "");
  console.log("modal", edit);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Breweries Data</ModalHeader>
        <ModalBody>
          <Label>Nick Name:</Label>
          <Input
            value={nickname}
            onChange={(e) => setnickname(e.target.value)}
          />
          <Label>Name:</Label>
          <Input disabled value={edit.name} />
          <Label>ID:</Label>
          <Input disabled value={edit.id} />
          <Label>city:</Label>
          <Input disabled value={edit.city} />
          <Label>State:</Label>
          <Input disabled value={edit.state} />
          <Label>Country:</Label>
          <Input disabled value={edit.country} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Model;
