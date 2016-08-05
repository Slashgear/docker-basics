```
docker pull smebberson/alpine-nginx
docker run -d --name volume smebberson/alpine-nginx

docker exec -it volume touch foo

docker rm -f volume
docker run -d --name volume smebberson/alpine-nginx
docker exec -it volume ls
```
