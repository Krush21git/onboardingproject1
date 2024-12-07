// src/components/customers/UpdateCustomer.jsx
import React, { useState, useEffect } from 'react';

const UpdateCustomer = ({ show, onClose, onSave, customer }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    // Use the effect to set initial values when customer prop changes
    useEffect(() => {
        if (customer) {
            setName(customer.name);
            setAddress(customer.address);
        }
    }, [customer]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleSubmit = () => {
        const updatedCustomer = { id: customer.id, name, address };
        onSave(updatedCustomer); // Pass the updated customer data to parent
        setName(''); // Clear the input fields
        setAddress('');
    };

    if (!show) return null; // Don't render modal if `show` is false

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Customer</h5>
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
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCustomer;
