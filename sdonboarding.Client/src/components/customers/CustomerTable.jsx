// src/components/customers/CustomerTable.jsx
import React, { Component } from 'react';
import AddCustomer from './AddCustomer'; //Import the AddCustomer component
import UpdateCustomer from './UpdateCustomer'; //Import the UpdateCustomer component
import DeleteCustomer from './DeleteCustomer'; // Import the DeleteCustomer component

export class CustomerTable extends Component {
    static displayName = CustomerTable.name;

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            loading: true,
            showAddModal: false,
            showUpdateModal: false,
            showDeleteModal: false, // State for Delete Modal visibility
            selectedCustomer: {}, // Store the selected customer for delete/update
        };
    }

    componentDidMount() {
        this.populateCustomersData();
    }

    openAddModal = () => {
        this.setState({ showAddModal: true });
    };

    closeAddModal = () => {
        this.setState({ showAddModal: false });
    };

    openUpdateModal = (customer) => {
        this.setState({
            showUpdateModal: true,
            selectedCustomer: customer,
        });
    };

    closeUpdateModal = () => {
        this.setState({ showUpdateModal: false });
    };

    openDeleteModal = (customer) => {
        this.setState({
            showDeleteModal: true,
            selectedCustomer: customer,
        });
    };

    closeDeleteModal = () => {
        this.setState({ showDeleteModal: false });
    };

    handleAddCustomer = async (newCustomer) => {
        const response = await fetch('/api/customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCustomer),
        });

        if (response.ok) {
            this.closeAddModal();
            this.populateCustomersData();
        }
    };

    handleUpdateCustomer = async (updatedCustomer) => {
        const response = await fetch(`/api/customers/${updatedCustomer.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCustomer),
        });

        if (response.ok) {
            this.closeUpdateModal();
            this.populateCustomersData();
        }
    };

    handleDeleteCustomer = async (customerId) => {
        const response = await fetch(`/api/customers/${customerId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            this.closeDeleteModal();
            this.populateCustomersData(); // Refresh customer list after deletion
        }
    };

    async populateCustomersData() {
        const response = await fetch('/api/customers');
        const data = await response.json();
        this.setState({ customers: data, loading: false });
    }

    render() {
        const { customers, loading, showAddModal, showUpdateModal, showDeleteModal, selectedCustomer } = this.state;
        const contents = loading
            ? <p><em>Loading...</em></p>
            : (
                <table className="table table-striped" aria-labelledby="tableLabel">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => this.openUpdateModal(customer)}>
                                        Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button className="btn btn-danger" onClick={() => this.openDeleteModal(customer)}>
                                        Delete
                                    </button>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );

        return (
            <div>
                <h1 id="tableLabel">Customers</h1>
                <button className="btn btn-success mb-3" onClick={this.openAddModal}>
                    New Customer
                </button>
                {contents}

                {/* Add Customer Modal */}
                <AddCustomer
                    show={showAddModal}
                    onClose={this.closeAddModal}
                    onSave={this.handleAddCustomer}
                />

                {/* Update Customer Modal */}
                <UpdateCustomer
                    show={showUpdateModal}
                    onClose={this.closeUpdateModal}
                    onSave={this.handleUpdateCustomer}
                    customer={selectedCustomer}
                />

                {/* Delete Customer Modal */}
                <DeleteCustomer
                    show={showDeleteModal}
                    onClose={this.closeDeleteModal}
                    onDelete={this.handleDeleteCustomer}
                    customer={selectedCustomer}
                />
            </div>
        );
    }
}
