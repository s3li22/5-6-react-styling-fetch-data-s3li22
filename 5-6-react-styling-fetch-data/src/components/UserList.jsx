import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import UserCard from './UserCard';

function UserList({ users, onUserClick }) {
  if (!users.length) {
    return <Alert variant="info">No users found.</Alert>;
  }

  return (
    <Row>
      {users.map(user => (
        <Col key={user.id} md={6} lg={4} className="mb-4">
          <UserCard user={user} onUserClick={onUserClick} />
        </Col>
      ))}
    </Row>
  );
}

export default UserList;
