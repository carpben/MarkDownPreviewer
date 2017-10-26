import React from 'react';
import {Modal, Button} from 'react-bootstrap'

export const ModalJSLibrary = ({show, hideMarkdown}) => {
    return (
        <Modal show={show} onHide={hideMarkdown}>
          <Modal.Header closeButton>
            <Modal.Title>markDown Library</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <br />
              # H1
              <h1>H1</h1>
              ## H2
              <h2>H2</h2>
              ### H3
              <h3>H3</h3>
              #### H4
              <h4>H4</h4>
              ##### H5
              <h5>H5</h5>
              ###### H6
              <h6>H6</h6>
    <br />
              Alternatively, for H1 and H2, an underline-ish style:<br />
    <br />
              Alt-H1<br />
              ======
              <h1>Alt-H1</h1>
              Alt-H2<br />
              ------
              <h2>Alt-H2</h2>
              <br />
              Emphasis, aka italics, with *asterisks* or _underscores_.
              <br />
              Strong emphasis, aka bold, with **asterisks** or __underscores__.
              <br />
              Combined emphasis with **asterisks and _underscores_**.
              <br />
              Strikethrough uses two tildes. ~~Scratch this.~~
              <br />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideMarkdown}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
}
