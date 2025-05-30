import './DeleteConfirmPopup.css';
import type { MouseEventHandler } from 'react';
import Button from '../../Button/Button';

interface DeleteConfirmPopupProps {
    isOpen: boolean;
    onConfirm: MouseEventHandler<HTMLButtonElement>;
    onCancel: MouseEventHandler<HTMLButtonElement>;
    message?: string;
}


const DeleteConfirmPopup = ({isOpen, onConfirm, onCancel, message}: DeleteConfirmPopupProps) => {
    if (!isOpen) return;
    return (
        <div className='delete-popup-wrapper'>
            <div className='delete-popup-window'>
                <h2 className='delete-popup-title'>Are you sure ?</h2>
                <p className='delete-popup-message'>Do you really want to delete employee ? {message}</p>
                <div className='delete-popup-actions'>
                    <Button buttonName="Confirm" variant="create-employee--create" onClick={onConfirm}/>
                    <Button buttonName="Cancel" variant="create-employee--close" onClick={onCancel}/>
                </div>
            </div>

        </div>
    )
}

export default DeleteConfirmPopup;
