// src/components/customers/DeleteCustomer.jsx
import React from 'react';

const DeleteCustomer = ({ show, onClose, onDelete, customer }) => {
    if (!show) return null; // Don't render the modal if `show` is false

    const handleDelete = () => {
        onDelete(customer.id); // Call the `onDelete` function passed from the parent
    };

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Customer</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the customer <strong>{customer.name}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCustomer;
