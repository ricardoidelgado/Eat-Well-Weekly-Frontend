import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background" onClick={props.onClose}>
        <section className="modal-main" onClick={(event) => event.stopPropagation()}>
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
