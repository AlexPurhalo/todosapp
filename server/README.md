### Usage with Docker
```
docker image build --tag todoapp-server-image .
docker run -d -it --rm -p 3000:3000 todoapp-server-image
curl http://0.0.0.0:3000/todos
```
