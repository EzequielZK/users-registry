import {
  Column,
  ContainedButton,
  ContrastContainer,
  ModalBackground,
} from "../../styles/components";
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

  render() {
    const { open, component, options } = this.state;
    const { props } = options;
    const Component = component;
    if (!open) {
      return <></>;
    }
    return (
      <ModalBackground>
        <OutsideClick
          onClickOutside={this.close}
          Component={ContrastContainer}
          props={{
            rounded: true,
            width: options.width,
            height: options.height,
            onMobile: { height: "unset" },
          }}
        >
          <Column justify="space-between" fullWidth>
            <Component {...props} close={this.close} />
            <ContainedButton onClick={() => this.close(false)}>
              Fechar
            </ContainedButton>
          </Column>
        </OutsideClick>
      </ModalBackground>
    );
  }
}

export default Modal;
