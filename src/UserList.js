import React, { Component } from 'react';
import axios from 'axios';


export class Users extends Component {
      constructor(props) {
            super(props)
      
            this.state = {     
                   users: [    
                        
                   ]
            }
      }
      
      getUsers = () => {  
            axios.get('https://jsonplaceholder.typicode.com/users') 
                 .then(respense => {    
                      this.setState({ 
                           users: respense.data               
                      })
                 })
      }
      componentDidMount(){  
            this.getUsers();
      }

     
      
        render() {  
            return (  
                <>
                <div className="row">
                   
                        <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Company</th>
                            <th scope="col">Address</th>
                          </tr>
                        </thead>
                        {this.state.users.map(user => ( 
                        <tbody>
                            <tr class="table-primary">
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>Name: {user.company.name}<br/>
                                CatchPhrase: {user.company.catchPhrase}<br/>
                                Bs: {user.address.bs}
                            </td>
                            <td>Street: {user.address.street}<br/>
                                Suite: {user.address.suite}<br/>
                                City: {user.address.city}<br/>
                                Zipcode: {user.address.zipcode}<br/>
                                lat: {user.address.geo.lat} ,
                                lng: {user.address.geo.lng}
                            </td>
                            
                            
                            </tr>
                        </tbody>
                       ))}
                    </table>
                 
                </div>
                </>
                
            )
        }
}

export default Users;