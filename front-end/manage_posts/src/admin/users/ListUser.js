import React from 'react';

function ListUser() {
    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>username</th>
                    <th>nameUser</th>
                    <th>dateOfBirth</th>
                    <th>email</th>
                    <th>dateCreate</th>
                    <th>dateUpdate</th>
                    <th colSpan='2'>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>user1</td>
                    <td>member 1</td>
                    <td>02/12/1998</td>
                    <td>user1@gmail.com</td>
                    <td>11/04/2023</td>
                    <td>11/04/2023</td>
                    <td><a href="/update-user?id=1&dateofbirth=02/12/1998">Edit</a></td>
                    <td><a href="/delete-user">Delete</a></td>
                </tr>
                <tr>
                    <td>user2</td>
                    <td>member 2</td>
                    <td>07/02/2000</td>
                    <td>user2@gmail.com</td>
                    <td>11/04/2023</td>
                    <td>11/04/2023</td>
                    <td><a href="/update-user?id=2&dateofbirth=07/02/2000">Edit</a></td>
                    <td><a href="/delete-user">Delete</a></td>
                </tr>
                <tr>
                    <td>user3</td>
                    <td>member 3</td>
                    <td>15/10/1999</td>
                    <td>user3@gmail.com</td>
                    <td>11/04/2023</td>
                    <td>11/04/2023</td>
                    <td><a href="/update-user?id=3&dateofbirth=15/10/1999">Edit</a></td>
                    <td><a href="/delete-user">Delete</a></td>
                </tr>
            </tbody>
        </table>
    );
}

export default ListUser;