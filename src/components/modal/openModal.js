let modalRef = null;

export function setModalRef(ref) {
  modalRef = ref;
}

function defaultModal(component = () => <></>, options = {width: 'unset', height:'unset', props: {}}) {
  if (!modalRef) {
    return;
  }

  modalRef.setModalProps(component, options);
}

export function closeModal() {
  modalRef.close();
}

export default { defaultModal };
 