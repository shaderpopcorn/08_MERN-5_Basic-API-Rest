ENDPOINTS FOR REQUESTS

<!-- GET -->

Get All Users -> http://localhost:4001/

<!-- GET -->

Get User By Id -> http://localhost:4001/<id_of_user>

<!-- POST -->

Create User -> http://localhost:4001/
req.body needs to contain the following JSON object:
{
"firstName": "<first-name>",
"lastName": "<last-name>",
"email": "<email>",
"password": "<password>",
"avatarUrl": "<image-url>"
}

<!-- PUT -->

Update User -> http://localhost:4001/<id_of_user>
req.body needs to contain the following JSON object:
{
"firstName": "<first-name>",
"lastName": "<last-name>",
"email": "<email>",
"password": "<password>",
"avatarUrl": "<image-url>"
}

<!-- DELETE -->

Delete User -> http://localhost:4001/<id_of_user>
