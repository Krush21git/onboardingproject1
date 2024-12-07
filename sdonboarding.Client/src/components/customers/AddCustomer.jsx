// src/components/customers/AddCustomer.jsx
import React, { useState } from 'react';

const AddCustomer = ({ show, onClose, onSave }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    // Handle input changes
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    // Handle form submission
    const handleSubmit = () => {
        const newCustomer = { name, address };
        onSave(newCustomer); // Send the new customer data to the parent component
        setName(''); // Clear the input fields after saving
        setAddress('');
    };

    if (!show) return null; // Don't render the modal if `show` is false

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Customer</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    onChange={handleAddressChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Save Customer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCustomer;
