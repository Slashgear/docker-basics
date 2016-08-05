### Network

```
docker run -d --name centos1 centos

docker run -d --name centos2 --link nginx1 centos

docker exec -it centos2 ping centos
```
