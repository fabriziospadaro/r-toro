import React, { useContext } from "react"
import "../stylesheets/supportFooter.scss"
import { Modal, Button } from "react-bootstrap"
import { AppContex } from "../Home";

export default function SupportModal() {
  const { show, setShow, stopShowingHandle } = useContext(AppContex);

  function requestShareHandle() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: 'share-extension-post', subject: {} },
        (response) => { }
      );
    });
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>eToro Plus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ marginBottom: "10px" }}>Dear user,</p>
        <p>This extension is free and opensource,<b> please consider donating or sharing it on eToro to keep this project alive.</b></p>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Button variant="dark" onClick={() => requestShareHandle()}>
            Share
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="dark" onClick={() => window.open("https://www.paypal.com/paypalme/sowrdfab/4", "_blank")}>
            Donate
          </Button>
        </div>
        <Button variant="danger" onClick={() => stopShowingHandle()}>
          Stop Showing
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
