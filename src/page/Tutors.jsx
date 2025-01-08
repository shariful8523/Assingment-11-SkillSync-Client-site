import React, { useEffect, useState } from 'react';
import TutorsCard from './TutorsCard';

const Tutors = () => {
     
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
         fetch('http://localhost:3000/tutors')
         .then(res => res.json())
         .then(data => setTutors(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-5'>
                {
                    tutors.map(tutors => <TutorsCard key={tutors._id} tutors={tutors}></TutorsCard>)
                }
            </div>
        </div>
    );
};

export default Tutors;