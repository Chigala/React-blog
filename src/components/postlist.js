import React from 'react'
import {List, Datagrid, TextField,DateField, EditButton, DeleteButton} from "react-admin";

function PostList(props) {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <DateField source='pushlished at'/>
            <EditButton basePath='/posts/:id'/>
            <DeleteButton basePath='/posts/:id'/>
        </Datagrid>
    </List>
  )
}

export default PostList