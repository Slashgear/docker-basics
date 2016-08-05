### Nginx server

```
docker search alpine-nginx

docker pull smebberson/alpine-nginx

docker run -d --name nginx -p 80:80 smebberson/alpine-nginx

docker exec -it nginx bash
```
