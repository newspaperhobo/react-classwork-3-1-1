import React from 'react';
// For both of these elements, you will only change the way it retrieves props. We have used `props` as the components parameter. Refactor that using object destructuring. (So that we do NOT have things like `props.users...` etc.
function UserItem({users}) {
  return (
    users.map(user => (
      <ul key={user.id}>
        <li>Name: {user.name}</li>
        <li>Location: {user.location}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
      </ul>
    ))
  );
}

export default UserItem;