# Tugas-PAW Kelompok 20 2024
## Team Member
1. Athaya Harmana Putri (22/492673/TK/53930)
2. Nur Rochman (22/493623/TK/54086)
3. Farhan Arief Ramadhan (22/497297/TK/54496)
4. Muhammad Hifzhon Harundoyo (22/498269/TK/54647)
5. Faundra Pratama Sukma (22/505520/TK/55323)
## Database
1. Athaya Harmana Putri (22/492673/TK/53930) (Setup and Connection)
2. Nur Rochman (22/493623/TK/54086) (Models)
## Backend
1. Muhammad Hifzhon Harundoyo (22/498269/TK/54647) (Authentication Routing and Controller)
2. Faundra Pratama Sukma (22/505520/TK/55323) (Note Routing and Controller)
## Frontend
1. Farhan Arief Ramadhan (22/497297/TK/54496) (Frontend and API Requests)
## Installation
1. **Clone the repository**
    ```bash
    git clone <repository-url>
    ```
2. **Install NPM packages**
    ```bash
    npm install
    ```
3. **Run the application**
    ```bash
    npm run start
    ```
 4. **Access the API via** `http://localhost:3000`

# API Documentation
## HTTP Methods
| HTTP Method | Endpoint                                       | Description                                 |
|-------------|---------------------------------------         |---------------------------------------------|
| POST        | `http://localhost:3000/auth/create`            | sign up with new account.                   |
| POST        | `http://localhost:3000/auth/signin`            | sign in with an existing account.           |
| POST        | `http://localhost:3000/note/create`            | Create note.                                |
| POST        | `http://localhost:3000/note/update/:id`        | update note.                                |
| POST        | `http://localhost:3000/user/create`            | create user.                                |
| GET         | `http://localhost:3000/note/all`               | Get all notes.                              |
| GET         | `http://localhost:3000/note/all/:userID`       | Get notes by username.                      |
| GET         | `http://localhost:3000/user/all`               | Get all users.                              |
| PUT         | `http://localhost:3000/user/update/:id`        | Update users.                               |
| DELETE      | `http://localhost:3000/note/delete/:noteID`    | Delete Note                                 |
| DELETE      | `http://localhost:3000/user/delete/:username`  | Delete User                                 |
## Important Diagram
![DiagramNoteApp](https://github.com/user-attachments/assets/569bc4aa-9084-4d0c-b47a-c9a50e6fa0ef)

