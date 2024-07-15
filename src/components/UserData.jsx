const UserData = ({ users }) => {
    return (
      <>
        {users.map((curUser) => {
          const { id, firstName, lastName, birthday, gender } = curUser;
  
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{birthday}</td>
              <td>{gender}</td>
            </tr>
          );
        })}
      </>
    );
  };
  
  export default UserData;