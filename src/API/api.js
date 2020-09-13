import * as axios from 'axios';
import MockAdapter from "axios-mock-adapter";
let getMoodmock = new MockAdapter(axios, {delayResponse: 2000});
getMoodmock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});
export const api = {
    getMood() {
      return axios.get(`/users`)
        .then(response => {
          return response.data
        })
    },
    getObjectList() {
        return axios.get(`http://www.filltext.com/?rows=100&object={username}&pretty=true`)
          .then(response => {
            return response.data
          })
      },
      getModificatorList() {
        return axios.get(`http://www.filltext.com/?rows=7&object={username}&pretty=true`)
          .then(response => {
            return response.data
          })
      },
      getActionList() {
        return axios.get(`http://www.filltext.com/?rows=100&object={username}&pretty=true`)
          .then(response => {
            return response.data
          })
      },
      getAddOnList() {
        return axios.get(`http://www.filltext.com/?rows=100&object={username}&pretty=true`)
          .then(response => {
            return response.data
          })
      },
      getPhrase(){
        return axios.get(`http://www.filltext.com/?rows=1&phrase={username}&pretty=true`)
        .then (response =>{
          return response.data
        })
      }
}