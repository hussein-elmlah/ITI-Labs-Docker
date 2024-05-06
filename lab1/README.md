## lab_1

### Create a container from hello-world image and set its name to first-container.

```bash
 docker run --name  first-container hello-world
```

### Create two containers from nginx image, run the first one in the foreground and the second one in the background.
 	
   ```bash
    docker run nginx  
   ```
![Screenshot from 2024-05-06 05-11-45](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/73c23b08-7ed6-4e2e-86cc-b0277aea47ab)

```bash
    docker run -d nginx  
   ```
![Screenshot from 2024-05-06 05-13-29](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/152b6969-c88f-4d6b-8c49-adb037e20909)


### Download bitnami/laravel image (version 9.5.2) List all images Remove laravel image 
 
 ```bash
 docker pull bitnami/laravel:9.5.2  
 ```

  ```bash
 docker images  
 ```

 ```bash
   docker rmi bitnami/laravel:9.5.2
   ```

![Screenshot from 2024-05-06 05-17-18](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/740ba9df-d4e6-40b9-9b10-853f45466381)


### Create a container from httpd image  Map apache server running on the container to port 82 on your local machine Check that it is working using your browser

```bash
docker run -p 82:80 httpd
```
![Screenshot from 2024-05-06 05-21-02](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/a043d339-40a7-484c-9365-09a9868dc32a)
![Screenshot from 2024-05-06 05-21-29](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/31fd706f-44c6-4150-b869-47819bbfa5de)


 
### Create file inside foreground container then list all files (use interactive mode) Remove this container 
```bash
docker run httpd
```
![Screenshot from 2024-05-06 05-22-47](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/6fb99029-6e6a-4cb6-810c-ab6ffad68bcb)

### Print /etc/hosts file from background container (without interactive mode)
![Screenshot from 2024-05-06 05-28-07](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/fa5d45e2-43cd-4c04-9f18-f56549d547d3)



### Create mysql container, map tmp directory (on your local machine) to /var/lib (on the container).<br/>Create a volume lab1, start two containers from nginx image and mount this volume to /app, create a file from the first container on the path mapped to this volume and check that it exists on the second container. 

![Screenshot from 2024-05-06 05-49-04](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/b1ccd56f-7c2d-4571-a29d-f2342c58f557)
![Screenshot from 2024-05-06 06-03-25](https://github.com/hussein-elmlah/ITI-Labs-Docker/assets/147069168/5fc5e1bf-447d-4f43-b34a-1e781a5830f7)

