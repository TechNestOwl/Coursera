/*
        Running an HTTP request:

        - GET a specific resource (e.g. an HTML file)

        - POST create a new resource (e.g. add data to the database)

        - HEAD get the metadata information about a specific resource withut  getting
         the body like (GET.)Example, I might want to find out the last time a resource 
         was updated, and then use the more "expensive" GET request to download the resource

        - PUT update an existing resource( or create a new one if it doesnt exist)

        - POST requests creates new resources, the data of which is encoded withing the request body.
            A POST is made when you submit a form containing information to be saved on the server. 

        - DELETE delete a specified resource

        - TRACE, OPTIONS, CONNECT, PATCH  these are far less common/advanced, further research is needed.

*/