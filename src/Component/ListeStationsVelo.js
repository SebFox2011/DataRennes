import React, {Component} from 'react';

class ListeStationsVelo extends Component {

    constructor(props) {
        super(props);
        this.state={
            list:[]
        };
    }


    //Appel à l'api
    componentDidMount() {
        fetch('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=stations_vls')
            .then(response => response.json())
            .then(data => this.setState({list: data["records"]}))
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ListeStationsVelo;