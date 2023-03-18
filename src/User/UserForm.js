import React from 'react';
// For both of these elements, you will only change the way it retrieves props. We have used `props` as the components parameter. Refactor that using object destructuring. (So that we do NOT have things like `props.users...` etc.
function UserForm({handleUserNameChange, userName}) {
  return (
    <div>
      <label htmlFor="user-name">User: </label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        // In the form component, add an attribute named “value” to the input tag and assign `userName` that was passed down from props as its value. (This will make it a controlled component)
        value={userName}
        onChange={handleUserNameChange}
      />

      <p>Searching for a new user named: {userName}</p>
    </div>
  );
}

export default UserForm;