import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div>
                <h1 className="Date-header">{Moment().format('dddd')}</h1>
                <p className="Date-para">{Moment().format('LL')}</p>
            </div>
        );
    }
}

export default Date;
