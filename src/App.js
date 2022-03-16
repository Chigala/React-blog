import React from 'react';
import {Admin, fetchUtils, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/postlist';
import simpleRestProvider from 'ra-data-simple-rest';
// import restProvider from 'ra-data-simple-rest'
import HomePage from './components/home_page/homepage';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import dataprovider from './components/dataprovider';






function App() {
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider('http://localhost:5000', httpClient);






  // const dataProvider = jsonServerProvider('https://localhost:5000');
// restProvider("https://jsonplaceholder.typicode.com")
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
           <Route path="/home"><HomePage/></Route>
           <Route path="/admin">
           <Admin dataProvider={simpleRestProvider('http://localhost:5000', fetchUtils.fetchJson, 'X-Total-Count')}  >
                        <Resource name= "post" list={PostList}/>
                  </Admin>
            </Route>
                  
        </Switch>
      </BrowserRouter>
      
      
      
    
      
    </div>
  );
}

export default App;
