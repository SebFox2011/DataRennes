import React, {Component} from 'react';

class ListeStationsVelo extends Component {

    //Appel à l'api
    componentDidMount() {
        fetch('https://data.rennesmetropole.fr/api/datasets/1.0/search/')
            .then(response => response.json())
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ListeStationsVelo;