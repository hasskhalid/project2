import React from 'react';
import PropTypes from 'prop-types';
import './task.css';
import Cards from "./task";

function Table(props){
    const{ post } = props;
    const{ changeStatus } = props;
    return (
        <table className = { "board" }>
            <thead>
            <tr className = { "tr" }>
                <th className = { "th todo" }>To Do</th>
                <th className = { "th" }>In Progress</th>
                <th className = { "th review" }>Review</th>
                <th className = { "th" }>Done</th>
            </tr>
            </thead>
            <tbody>
            <tr className ={ "tr" }>
                <td className = { "td todo" }>
                    {post.map((data, key) => {
                        if(data.column === "todo")
                            return(
                                <div key = {key}>
                                    <Cards changeStatus = {changeStatus} buttons = {["Start Work >"]} post = {data}/>
                                </div>
                        );
                    })}
                </td>
                <td className = {"td"}>
                    {post.map((data, key) => {
                    if(data.column === "in-progress")
                        return(
                            <div key = {key}>
                                <Cards changeStatus = {changeStatus} buttons = {["< Send Back", "Request Review >"]} post = {data}/>
                            </div>
                        );
                    })}
                </td>
                <td className = {"td review"}>
                    {post.map((data, key) => {
                        if (data.column === "review")
                            return (
                                <div key={key}>
                                    <Cards changeStatus={changeStatus} buttons={["< More Work Required", "Mark Done >"]} post={data}/>
                                </div>
                            );
                    })}
                </td>
                <td className= {"td"}>
                    {post.map((data, key) => {
                        if (data.column === "done")
                            return(
                                <div key = {key}>
                                    <Cards changeStatus={changeStatus} buttons ={["< Request Re-Review"]} post = {data}/>
                                </div>
                            );
                    })}
                </td>
            </tr>
            </tbody>
        </table>
    );
}

Table.propTypes = {
    post: PropTypes.array,
    changeStatus: PropTypes.func.isRequired,
};
Table.defaultProps = {
    post: null,
};

export default Table;