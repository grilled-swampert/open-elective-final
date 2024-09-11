import React, { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import SemesterDetails from '../../components/admin/viewAdmin/displayDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSemesters } from '../../actions/terms';

export default function ViewAdmin() {  // Assuming termId is passed as a prop
    const { termId } = useParams();

    const dispatch = useDispatch();
    const termSemesters = useSelector((state) => state.semesters);
    console.log(termSemesters);

    useEffect(() => {
        dispatch(getSemesters(termId));
    }, [dispatch, termId]);

    console.log(termSemesters);

    return (
        <div>
            <Header />
            <h1>ViewAdmin</h1>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>SEM</th>
                            <th>OE</th>
                            <th>Category</th>
                            <th>Download</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        {
                            termSemesters && termSemesters.map((semester) => (
                                <SemesterDetails semester={semester} key={semester._id} />
                            ))
                        }
                </table>
            </div>
        </div>
    );
}
