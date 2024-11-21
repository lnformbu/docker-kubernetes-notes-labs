# Docker CLI Commands

## Run a New Container

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker run IMAGE`                       | Runs a container from an image.                             | `docker run nginx`                                  |
| `docker run --name CONTAINER IMAGE`      | Runs a container with a specified name.                     | `docker run --name web nginx`                      |
| `docker run -p HOSTPORT:CONTAINERPORT IMAGE` | Maps a host port to a container port.                      | `docker run -p 8080:80 nginx`                      |
| `docker run -P IMAGE`                    | Automatically maps all exposed ports.                       | `docker run -P nginx`                              |
| `docker run -d IMAGE`                    | Runs a container in detached mode (background).             | `docker run -d nginx`                              |
| `docker run --hostname HOSTNAME IMAGE`   | Assigns a hostname to the container.                        | `docker run --hostname srv nginx`                  |
| `docker run --add-host HOSTNAME:IP IMAGE`| Adds a custom DNS entry to the container.                   | `docker run --add-host myhost:127.0.0.1 nginx`     |
| `docker run -v HOSTDIR:TARGETDIR IMAGE`  | Mounts a host directory as a volume in the container.        | `docker run -v ~/data:/usr/share/nginx/html nginx` |
| `docker run -it --entrypoint EXECUTABLE IMAGE` | Overrides the container's entrypoint.                       | `docker run -it --entrypoint bash nginx`           |

---

## Manage Containers

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker ps`                              | Lists all running containers.                               | `docker ps`                                         |
| `docker ps -a`                           | Lists all containers, including stopped ones.               | `docker ps -a`                                      |
| `docker rm CONTAINER`                    | Removes a container.                                        | `docker rm web`                                     |
| `docker rm -f CONTAINER`                 | Forcibly removes a container.                              | `docker rm -f web`                                  |
| `docker container prune`                 | Removes all stopped containers.                            | `docker container prune`                           |
| `docker stop CONTAINER`                  | Stops a running container.                                 | `docker stop web`                                   |
| `docker start CONTAINER`                 | Starts a stopped container.                                | `docker start web`                                  |
| `docker cp CONTAINER:SOURCE TARGET`      | Copies files from a container to the host.                 | `docker cp web:/index.html index.html`             |
| `docker cp TARGET CONTAINER:SOURCE`      | Copies files from the host to a container.                 | `docker cp index.html web:/index.html`             |
| `docker exec -it CONTAINER EXECUTABLE`   | Runs a command in a running container.                     | `docker exec -it web bash`                         |
| `docker exec -it foo /bin/bash`          | Attaches a shell process to a running container.            | `docker exec -it mycontainer /bin/bash`            |
| `docker rename OLD_NAME NEW_NAME`        | Renames a container.                                        | `docker rename 096 web`                            |
| `docker commit CONTAINER`                | Creates a new image from a container's changes.            | `docker commit web`                                |

---

## Manage Images

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker images`                          | Lists all images.                                           | `docker images`                                     |
| `docker pull IMAGE[:TAG]`                | Pulls an image from a repository.                          | `docker pull nginx`                                 |
| `docker push IMAGE`                      | Pushes an image to a repository.                           | `docker push myimage:1.0`                          |
| `docker rmi IMAGE`                       | Removes an image.                                           | `docker rmi nginx`                                  |
| `docker image prune`                     | Removes unused images.                                      | `docker image prune`                                |
| `docker build DIRECTORY`                 | Builds an image from a Dockerfile in a directory.           | `docker build .`                                   |
| `docker tag IMAGE NEW_IMAGE`             | Tags an image with a new name.                             | `docker tag ubuntu ubuntu:18.04`                   |
| `docker save IMAGE > FILE`               | Saves an image to a tar file.                              | `docker save nginx > nginx.tar`                    |
| `docker load -i TARFILE`                 | Loads an image from a tar file.                            | `docker load -i nginx.tar`                         |
| `docker history IMAGE`                   | Shows the history of an image.                             | `docker history nginx`                              |
| `docker inspect IMAGE`                   | Detailed info about an image.                              | `docker inspect nginx`                              |

---

## Info & Logs

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker logs CONTAINER`                  | Shows logs from a container.                               | `docker logs web`                                   |
| `docker stats`                           | Displays real-time resource usage statistics for containers.| `docker stats`                                     |
| `docker stats --all`                     | Shows resource stats for all containers (default is running).| `docker stats --all`                              |
| `docker top CONTAINER`                   | Lists running processes in a container.                    | `docker top web`                                    |
| `docker events`                          | Displays events from the Docker daemon.                    | `docker events`                                    |
| `docker version`                         | Displays the Docker version details.                       | `docker version`                                    |
| `docker diff CONTAINER`                  | Shows filesystem changes in a container.                   | `docker diff web`                                   |
| `docker port CONTAINER`                  | Displays port mappings for a container.                    | `docker port web`                                   |

---

## Networking

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker network ls`                      | Lists all Docker networks.                                  | `docker network ls`                                 |
| `docker network inspect NETWORK`         | Shows detailed information about a network.                | `docker network inspect bridge`                    |
| `docker network create --subnet=RANGE NAME` | Creates a custom network with a specific range.            | `docker network create --subnet=192.168.1.0/24 mynet` |
| `docker network connect NETWORK CONTAINER` | Connects a container to a network.                         | `docker network connect mynet web`                 |
| `docker network disconnect NETWORK CONTAINER` | Disconnects a container from a network.                    | `docker network disconnect mynet web`              |
| `docker network rm NETWORK`              | Removes a network.                                          | `docker network rm mynet`                          |

---

## Volumes

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker volume create NAME`              | Creates a new volume.                                       | `docker volume create mydata`                      |
| `docker volume inspect NAME`             | Shows detailed information about a volume.                 | `docker volume inspect mydata`                     |
| `docker volume rm NAME`                  | Removes a volume.                                           | `docker volume rm mydata`                          |
| `docker run -v HOSTDIR:CONTAINERDIR IMAGE` | Mounts a host directory as a container volume.              | `docker run -v ~/data:/app/data nginx`             |

---

## Import/Export Containers & Images

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker export CONTAINER > FILE`         | Exports container's filesystem as a tar archive.            | `docker export web > web.tar`                      |
| `docker import FILE`                     | Imports a tarball as an image.                              | `docker import web.tar myimage:latest`             |
| `docker save IMAGE > FILE`               | Saves an image to a tar file.                              | `docker save nginx > nginx.tar`                    |
| `docker load < FILE`                     | Loads an image from a tar file.                            | `docker load < nginx.tar`                          |

---

## Prune (Cleanup)

| **Command**                              | **Description**                                             | **Example**                                          |
|------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------|
| `docker system prune`                    | Removes unused data (images, containers, networks).         | `docker system prune`                               |
| `docker container prune`                 | Removes all stopped containers.                            | `docker container prune`                           |
| `docker volume prune`                    | Removes all unused volumes.                                | `docker volume prune`                               |
| `docker image prune`                     | Removes unused and dangling images.                        | `docker image prune`                                |

---

### Best Practices
1. Use `docker-compose` for multi-container setups.  
2. Use named volumes instead of data-only containers.  
3. Regularly prune unused resources (`docker system prune`).  
4. Prefer `COPY` over `ADD` in Dockerfiles for predictability.  
5. Minimize image size by cleaning temporary files in `RUN` commands.

This updated markdown integrates additional commands and best practices for managing Docker containers, images, networks, and volumes.
