import React from 'react';

const LoadProblem = ({problem}) => {
    return (
        <div>
            <div className='card'>
                <h2>{problem.title}</h2>
                <p>{problem.description}</p>
                <p className={problem.status ==='open'? 'open' : 'closed'}>Status : {problem.status}</p>

            </div>
            
        </div>
    );
};

export default LoadProblem;