import React from 'react'
import {gql,useQuery} from '@apollo/client'
const getMessages=
    gql`
    query{
        messages{
        user
        id
        text
        }
    }
`;

function Chat({user}) {
    const {data,loading,error}=useQuery(getMessages);
    return (
        <div>
            {data.messages.map(({ id, user: messageUser, text }) => (
        <div
          style={{
            display: "flex",
            justifyContent: user === messageUser ? "flex-end" : "flex-start",
            alignItems:"center",
            paddingBottom: "1em",
          }}
        >
          {user !== messageUser && (
            <div
              style={{
                height: 30,
                width: 30,
                marginRight: "0.5em",
                border: "1px solid gray",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "15pt",
                color:"black",
                background:"lightblue"
              }}
            >
              {messageUser.slice(0, 1).toUpperCase()}
            </div>
          )}
          <div
            style={{
              background: user === messageUser ? "red" : "green",
              color: user === messageUser ? "white" : "white",
              padding: "1em",
              borderRadius: "1em",
              maxWidth: "60%",
            }}
          >
            {text}
          </div>
        </div>
      ))}
        <form >
            <input />
        </form>      
    </div>
    )
}

export default Chat
