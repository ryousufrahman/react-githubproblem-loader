import React, { use } from 'react';
import LoadProblem from './LoadProblem';

const Problem = ({fetchProblem}) => {
    const useProblem = use(fetchProblem)
   const problemData = useProblem.data;

    

    
    return (
        <div>
            {
                problemData.map(problem=> <LoadProblem problem ={problem} key={problem.id} ></LoadProblem> )
            }
        </div>
    );
};

export default Problem;