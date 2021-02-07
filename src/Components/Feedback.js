import React, { Component } from 'react';

class Feedback extends Component {
    constructor(props) {
        super(props);
    }

    
    render() { 
        return ( 
            <div>
                <div>
                    <button>
                        X
                    </button>
                </div>

                <div>
                    <h1>Want to give me some feedback?</h1>
                    <p>
                        Contact me on blah blah blah
                    </p>
                </div>
            </div>
         );
    }
}
 
export default Feedback;