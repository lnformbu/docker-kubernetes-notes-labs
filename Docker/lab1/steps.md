### run.sh

```bash
## run
docker build -t lab1:1.0 .
docker run --name lab1con -p 3000:3000 lab1:1.0

## delete
docker stop lab1con
docker rm lab1con
docker rmi lab1:1.0
docker system prune -a

```

### Build

- #### Build the image - Create a Docker image named `lab1` with the tag `latest` using the Dockerfile in the current directory.

`docker build -t lab1:1.0 .`

- #### Run the container - Create and start a container from the `lab1:1.0` image. - Map port 3000 on the host to port 3000 in the container and name the container `lab1con.`

`docker run --name lab1con -p 3000:3000 lab1:1.0`

---

### Delete

- #### Clean up: Stop and remove the container - Stop the container named `lab1con` gracefully.

`docker stop lab1con`

- #### Remove the stopped container `lab1con` from the system.

`docker rm lab1con`

- #### Remove the image - Delete the `lab1:1.0` image from the local system to free up space.

`docker rmi lab1:1.0` 

<br>

---