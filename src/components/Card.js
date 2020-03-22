import React from 'react';
import './styles/Card.css';
import methods from '../methods';

const {
  convertDate,
  convertDateWithTime
} = methods;

const Card = ({ personalInformation }) => {
  const { firstName,
    middleName,
    lastName,
    membershipNo,
    dateOfBirth,
    enrolmentDate,
    lastVisited
  } = personalInformation;

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Personal Information</h2>
      </div>
      <div className="card-data">
        <div className="card-name">
          <h3 className="data-title">Member Name</h3>
          <h1 className="member-name">
            {firstName} {middleName} {lastName}
          </h1>
        </div>
        <div className="card-information">
          <div className="data-list-item">
            <h3 className="data-title">Membership Number</h3>
            <h3 className="data-info">{membershipNo}</h3>
          </div>
          <div className="data-list-item">
            <h3 className="data-title">Date of Birth</h3>
            <h3 className="data-info">{convertDate(dateOfBirth)}</h3>
          </div>
          <div className="data-list-item">
            <h3 className="data-title">Enrolment Date</h3>
            <h3 className="data-info">{convertDate(enrolmentDate)}</h3>
          </div>
          <div className="data-list-item">
            <h3 className="data-title">You Last Visited</h3>
            <h3 className="data-info">{convertDateWithTime(lastVisited)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;
