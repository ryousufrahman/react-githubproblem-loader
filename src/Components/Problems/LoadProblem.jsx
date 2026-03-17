import React from 'react';

const LoadProblem = ({problem}) => {
    return (
        <div>
            <div className='card'>
                <h2>{problem.title}</h2>
                <p>{problem.description}</p>
                <p className={problem.status ==='open'? 'open' : 'closed'}>Status : {problem.status}</p>
                <p className='text-2xl text-blue-200'>hello</p>

            </div>
            
        </div>
    );
};

export default LoadProblem;