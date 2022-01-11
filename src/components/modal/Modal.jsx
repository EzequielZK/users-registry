import { ContrastContainer, ModalBackground } from "../../styles/components";
import { setModalRef } from "./openModal";
import React from "react";
import { OutsideClick } from "..";

class Modal extends React.Component {
  state = {
    open: false,
    options: {},
    component: () => <></>,
  };

  componentDidMount() {
    setModalRef(this);
  }

  close = () => {
    const { open } = this.state;
    if (open) {
      this.setState({ open: false });
    }
  };

  setModalProps = (component, options) => {
    this.setState({ component, options, open: true });
  };

  getTypeModal = (type) => {
    const modalType = {
      success: {
        bgColor: "primary",
        color: "contrastBackground",
      },
      error: {
        bgColor: "red",
        color: "contrastBackground",
      },
    };
    return modalType[type];
  };

  render() {
    const { open, component, options } = this.state;
    const { props } = options;
    const Component = component;
    if (!open) {
      return <></>;
    }
    return (
      <ModalBackground>
        <OutsideClick onClickOutside={this.close}>
          <ContrastContainer
            rounded
            width={options.width}
            h={options.height}
            onMobile={{ height: "unset" }}
          >
            <Component {...props} close={this.close} />
          </ContrastContainer>
        </OutsideClick>
      </ModalBackground>
    );
  }
}

export default Modal;
