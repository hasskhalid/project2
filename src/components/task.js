import React from 'react';
import PropTypes from 'prop-types';
import './style/task.css';

function Tasks(props) {
    const{
        post,
        buttons,
        changeStatus
    } = props;
    return(
        <div className = "tasks">
            <h2>
                {post.title}
            </h2>
            <p>ID: {post.id}</p>
            <p>Type: {post.type}</p>
            {buttons.map((data, key) => {
                if (post.column === "todo") {
                    return (
                        <button key={key} value={post.id+",in-progress"}
                                onClick={(e) => changeStatus(e.target.value)}>{data}</button>
                    );
                } else if (post.column === "in-progress") {
                    return (
                        <div key={key}>
                            {key===0? (<button value={post.id+",todo"} onClick={(e) => changeStatus(e.target.value)}>{data}</button>):
                                (<button value={post.id+",review"} onClick={(e) => changeStatus(e.target.value)}>{data}</button>)}
                        </div>
                    );
                } else if (post.column === "review") {
                    return (
                        <div key={key}>
                            {key===0? (<button value={post.id+",in-progress"} onClick={(e) => changeStatus(e.target.value)}>{data}</button>):
                                (<button value={post.id+",done"} onClick={(e) => changeStatus(e.target.value)}>{data}</button>)}
                        </div>
                    );
                } else if (post.column === "done") {
                    return (
                        <div key={key}>
                            <button value={post.id+",review"} onClick={(e) => changeStatus(e.target.value)}>{data}</button>
                        </div>
                    );
                }
            })}
        </div>
    );
}

Tasks.propTypes = {
    post: PropTypes.object,
    buttons: PropTypes.array,
    changeStatus: PropTypes.func.isRequired,
};
Tasks.defaultProps = {
    post: null,
    buttons: null,
};
export default Tasks;