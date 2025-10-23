*this is a how-to or FAQ by me to myself in order to prevent me to go back and forward searching the same answer many times*

### how to exit an SH connection inside a Docker Container

using the command `exit` close the SH connection and put you back to the terminal

### list the current active Docker Containers

`docker ps`

### RUN vs CMD inside Dockerfile

inside Dockerfile these two command seems similar but no.
`RUN` must always be before CMD because is used on the Image building phase. On 
said phase a new Docker Image is being created, so we want it to have all the 
programs and configs required to run our program, this step is like configuring 
our own OS selecting which programs we want on it.
`CMD` on the other hand also run commands, **BUT** only after we start an image, 
just like a shell script we have on start-up.

### yarn install vs npm install

Both `yarn install` and `npm install` are commands used to install package 
dependencies for a JavaScript project, as defined in the project's package.json
file.
So both are ok to use, one may have the edge over the other on speed, security,
error handling and others.

### how to build Docker Image

`docker build -t basic-react-app .`
    - `-t` flag is to "tag" the image, in other words, set a Name easy to 
    recognize on `docker ps` for example to start/stop it, in this case 
    "basic-react-app"
    - `.` is where to find the Dockerfile with the required configuration to 
    set up the image, in this case, the current directory


