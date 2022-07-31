/**
 *
  only brower undertand it is markup language data rendering on brower

  node js native support http Server

  socket io  build for nodejs he do not know express

  socket use for 2 way communication

  socket io only know http server


  express for REST API part
  for that we bind express to HTTP server
  and 


    both will wait for each other : user and server

    event is created

    io.on('connection',(socket)=>{
        console.log("A user is connect to the server ");

        io.on('disconnect',()=>{
            console.log("User is disconnected");
        })
    })

    event 
    socket.on('message',function(data){
                document.write(data);
    });


 * 
 * 
 * 
 * 
 * 
 */