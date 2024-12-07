import { Component } from 'react';
export class StoreTable extends Component {
    static displayName = StoreTable.name;

    constructor(props) {
        super(props);
        this.state = { stores: [], loading: true };
    }

    componentDidMount() {
        this.populateStoresData();
    }

    static renderStoresTable(stores) {
        return (
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
                    {stores.map(Store =>
                        <tr key={Store.id}>
                            <td>{Store.name}</td>
                            <td>{Store.address}</td>
                            <td><button>Update Store</button></td>
                            <td><button>Delete Store</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        const contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : StoreTable.renderStoresTable(this.state.stores);

        return (
            <div>
                <h1 id="tableLabel">Stores</h1>
                {contents}
            </div>
        );
    }

    // async addStores() {

    //    this.setState({ stores: [], loading: true });
    //    const data = await fetch(
    //        'stores', {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify({
    //            id: 0,
    //            name: "Store E"
    //        })
    //    }).then((data) => data.json());

    //    this.setState({ stores: data, loading: false });

    //    this.populateStoresData();
    // }

    async populateStoresData() {

        const response = await fetch('/api/stores');

        const data = await response.json();

        this.setState({ stores: data, loading: false });
    }
}
