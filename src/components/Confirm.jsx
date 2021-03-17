import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';

class Confirm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpened: props.visible
		};
		this.onButtonClick = this.onButtonClick.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
	}

	onButtonClick() {
		if(!this.state.isOpened) {
			this.setState({
				isOpened: true
			});
		}
	}

	onClose(event) {
		if(event) {
			event.stopPropagation();
		}
		this.setState({
			isOpened: false
		});

		if(typeof this.props.onClose === 'function') {
			this.props.onClose();
		}
	}

	onConfirm(event) {
		event.stopPropagation();
		this.setState({
			isOpened: false
		});
		this.props.onConfirm();
	}

	render() {
		let cancelButton = this.props.showCancelButton ? (
			<Button bsStyle="default" onClick={this.onClose}>
				{this.props.cancelText}
			</Button>
		) : null;
		let modal = (
			<Modal show={this.state.isOpened} onHide={this.onClose}
                   className={this.props.className} dialogClassName={this.props.dialogClassName}
                   keyboard={this.props.keyboard} backdrop={this.props.backdrop}
                   enforceFocus={this.props.enforceFocus}
                >
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                <Modal.Footer>
                    {cancelButton}
                    <Button bsStyle={this.props.confirmBSStyle} onClick={this.onConfirm}>
                        {this.props.confirmText}
                    </Button>
                </Modal.Footer>
            </Modal>
		);
		let content;
		if(this.props.children) {
			let btn = React.Children.only(this.props.children);
			content = React.cloneElement(
				btn, {
					onClick: this.onButtonClick,
					style: this.props.style
				},
				btn.props.children,
				modal
			);
		} else {
			content = (
				<i className="far fa-trash-alt position-absolute" onClick={this.onButtonClick}>
					{this.props.buttonText}
					{modal}
				</i>
			);
		}
		return content;
	}
}

Confirm.propTypes = {
	body: PropTypes.node.isRequired,
	buttonText: PropTypes.node,
	cancelText: PropTypes.node,
	className: PropTypes.string,
	confirmBSStyle: PropTypes.string,
	confirmText: PropTypes.node,
	dialogClassName: PropTypes.string,
	keyboard: PropTypes.bool,
	backdrop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	enforceFocus: PropTypes.bool,
	onConfirm: PropTypes.func.isRequired,
	onClose: PropTypes.func,
	showCancelButton: PropTypes.bool.isRequired,
	title: PropTypes.node.isRequired,
	visible: PropTypes.bool
};

Confirm.defaultProps = {
	cancelText: 'Nevermind',
	confirmText: 'Delete',
	confirmBSStyle: 'danger',
	showCancelButton: true
};

export { Confirm };
export default Confirm;