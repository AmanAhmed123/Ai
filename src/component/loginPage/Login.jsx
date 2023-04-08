import LoginForm from "./LoginForm"
import { Link } from 'react-router-dom';
import "./main.css"

export default function Login() {
  return (
    <>
      <div className="login-page vw-100 vh-100 position-relative d-flex justify-content-center align-items-center">
        <header className="login-header position-absolute d-flex justify-content-between align-items-center top-0 left-0 w-100 text-white px-4">
          <p className="py-3 text-white">chat g6</p>
          <div className="d-flex align-items-center gap-3">
            <p className="text-white m-0">You don't have an account?</p>
            <button className="form-Btn">
              <Link to="/signup" className="text-decoration-none text-white">
                Signup
            </Link>
            </button>
          </div>
        </header>
        <div className="container">

          <div className="row justify-content-center w-100 m-0">
            <div className="col-10 col-sm-6 col-lg-4 p-0 ">
              <div className="login-card ">
                <h2 className="text-white mb-4">login</h2>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );


}




// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const Login = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission logic here
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center mt-5">
//         <Col md={6}>
//           <div className="text-center mb-4">
//             <h1>Login</h1>
//           </div>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control type="text" placeholder="Enter username" />
//             </Form.Group>
//             <Form.Group controlId="formPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Enter password" />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100 mt-4">
//               Login
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';

// const Login = () => {
//   const [chats, setChats] = useState([
//     { id: 1, name: 'John Doe', messages: [] },
//     { id: 2, name: 'Jane Smith', messages: [] },
//     { id: 3, name: 'Bob Johnson', messages: [] },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [showNav, setShowNav] = useState(false);

//   const handleChatSelection = (chat) => {
//     setSelectedChat(chat);
//     setShowNav(false);
//   };

//   const handleSendMessage = (message) => {
//     const updatedChats = chats.map((chat) => {
//       if (chat.id === selectedChat.id) {
//         return {
//           ...chat,
//           messages: [...chat.messages, message],
//         };
//       }
//       return chat;
//     });
//     setChats(updatedChats);
//   };

//   return (
//     <Container fluid className="h-100">
//       <Row className="h-100">
//         <Col
//           md={3}
//           className={`bg-light p-4 d-flex flex-column h-100 ${!showNav ? 'd-none d-md-block' : ''
//             }`}
//         >
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h4>Chats</h4>
//             <button
//               className="btn btn-link text-secondary d-md-none"
//               onClick={() => setShowNav(false)}
//             >
//               <i className="fas fa-times"></i>
//             </button>
//           </div>
//           <ListGroup>
//             {chats.map((chat) => (
//               <ListGroup.Item
//                 key={chat.id}
//                 action
//                 active={chat.id === selectedChat.id}
//                 onClick={() => handleChatSelection(chat)}
//               >
//                 {chat.name}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//         <Col md={9} className="d-flex flex-column h-100">
//           <div className="bg-secondary d-flex justify-content-between align-items-center p-3 d-md-none">
//             <button
//               className="btn btn-link text-light"
//               onClick={() => setShowNav(true)}
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//             <h4 className="text-light">{selectedChat.name}</h4>
//             <div>
//               <button className="btn btn-link text-light">
//                 <i className="far fa-user-circle"></i>
//               </button>
//               <button className="btn btn-link text-light">
//                 <i className="fas fa-ellipsis-v"></i>
//               </button>
//             </div>
//           </div>
//           <div className="bg-secondary d-none d-md-flex justify-content-between align-items-center p-3">
//             <h4 className="text-light">{selectedChat.name}</h4>
//             <div>
//               <button className="btn btn-link text-light">
//                 <i className="far fa-user-circle"></i>
//               </button>
//               <button className="btn btn-link text-light">
//                 <i className="fas fa-ellipsis-v"></i>
//               </button>
//             </div>
//           </div>
//           <div className="flex-grow-1 bg-light p-4 d-flex flex-column align-items-start justify-content-end">
//             {selectedChat.messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`p-2 rounded mb-2 ${index % 2 === 0 ? 'bg-white' : 'bg-light'
//                   }`}
//               >
//                 {message}
//               </div>
//             ))}
//           </div>
//           <div className="bg-light p-3">
//             <Form
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 handleSendMessage(event.target.elements.message.value);
//                 event.target.reset();
//               }}
//             >
//               <Form.Group className="mb-0">
//                 <Form.Control
//                   type="text"
//                   name="message"
//                   placeholder="Type a message..."
//                   autoComplete="off"
//                 />
//               </Form.Group>
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="mt-2 w-100 rounded-pill"
//               >
//                 Send
//               </Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;
