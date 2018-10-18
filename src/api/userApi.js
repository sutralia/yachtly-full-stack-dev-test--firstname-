class UserApi {  
    static getAllUser() {
      return fetch('http://localhost:3000/api/user').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
  export default UserApi 