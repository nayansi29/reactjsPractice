import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { term: '' };
    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }
    handleSumbit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <div className='ui segment'>
                    <label>Enter Text</label>
                    <form className='ui form' onSubmit={this.handleSumbit}>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </form>
                </div>

            </div>
        )
    }
}
