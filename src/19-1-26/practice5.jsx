//create a class based componet named display123
//create a state variable with 50 records
//implement pagination logic to show 5 records per page
//add buttons to navigate between pages
//display current page number and total pages
//when user is on first page disable previous button
//when user is on last page disable next button

//recoards (array), currentPage (number), recordsPerPage (number)
// totalPages (number), displayedRecords (array)
import React, { Component } from "react";

class Display123 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: Array.from({ length: 50 }, (_, i) => `Record ${i + 1}`),
            currentPage: 1,
            recordsPerPage: 5
        };
    }

    handleNext = () => {
        this.setState(prevState => ({
            currentPage: Math.min(prevState.currentPage + 1, this.totalPages())
        }));
    }
    handlePrevious = () => {
        this.setState(prevState => ({
            currentPage: Math.max(prevState.currentPage - 1, 1)
        }));
    }

    totalPages = () => {
        return Math.ceil(this.state.records.length / this.state.recordsPerPage);
    }
    displayedRecords = () => {
        const startIndex = (this.state.currentPage - 1) * this.state.recordsPerPage;
        const endIndex = startIndex + this.state.recordsPerPage;
        return this.state.records.slice(startIndex, endIndex);
    }
    render() {
        return (
            <div>
                <h2>Records</h2>
                <ul>
                    {this.displayedRecords().map((record, index) => (
                        <li key={index}>{record}</li>
                    ))}
                </ul>
                <button onClick={this.handlePrevious} disabled={this.state.currentPage === 1}>Previous</button>
                <span> Page {this.state.currentPage} of {this.totalPages()} </span>
                <button onClick={this.handleNext} disabled={this.state.currentPage === this.totalPages()}>Next</button>
            </div>
        );
    }

}
export default Display123;