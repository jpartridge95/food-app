import React, { Component } from 'react';
import SearchCards from "./SearchCards"


class SearchWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <SearchCards />
                </div>
                <div>
                    <button>Lower Range</button>
                    <p>Page no.</p>
                    <button>Increase range</button>
                </div>
            </div>
         );
    }
}
 
export default SearchWindow;