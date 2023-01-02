import { forwardRef, Fragment, Ref } from "react";
import { CSSTransition } from "react-transition-group";
import { useClickOutside } from "../../hooks/useClickOutside";
import Portal from "../Portal";

export interface ModalProps {
    children?: JSX.Element | JSX.Element[];
    show?: boolean;
    onClose?: () => void;
    clickOutsideClose?: boolean;
}

const Modal = forwardRef((props: ModalProps, ref: Ref<HTMLDivElement>) => {
    // props
    const { show, children, onClose, clickOutsideClose = true } = props;
    const domRef = useClickOutside<any>(() => (onClose ? onClose() : undefined));

    return (
        <Fragment>
            {/* we use portal here to render the modal */}
            <Portal selector="#modal">
                <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
                    <div className="modal" ref={ref}>
                        {/* render modal conent */}
                        <div
                            className="modalStyled__content"
                            ref={clickOutsideClose ? domRef : undefined}
                        >
                            {children}
                        </div>
                    </div>
                </CSSTransition>
            </Portal>
        </Fragment>
    );
});

Modal.displayName = "Modal";

export default Modal;
