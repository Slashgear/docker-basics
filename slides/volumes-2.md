```
docker rm -f volume

docker run -d --name nginx -v test:/data  smebberson/alpine-nginx
docker exec -it nginx mkdir touch /data/foo.bar
docker exec -it nginx ls /data

docker rm -f nginx

docker run -d --name nginx -v test:/data  smebberson/alpine-nginx
docker exec -it nginx ls /data


docker run -d --name nginx2 -v test:/data smebberson/alpine-nginx
docker exec -it nginx2 ls /data
```
