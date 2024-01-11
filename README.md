# Video Streaming Application

This is video upload and streaming app built with react and nestjs. This project features a (jwt based)login/register and video list page where you can upload your videos. You can also stream the videos by clicking on it.

<img width="1435" alt="Screenshot 2024-01-11 at 9 53 40 AM" src="https://github.com/Harshini3228/video-streaming-app/assets/20380815/dc12018b-cea6-4abb-8ff9-ef985b633840">

Steps to run the app:

Once you have cloned the app,
```
cd backend && npm install
cd ..
cd frontend && npm install
cd ..
```

To run frontend and backend simultaneously :
```
npm i -g concurrently
concurrently "cd backend && npm start" "cd frontend && npm start"
```

To run it as containers:

```
docker-compose up
```

Login/Register, upload and start streaming!

<img width="1435" alt="Screenshot 2024-01-11 at 9 59 03 AM" src="https://github.com/Harshini3228/video-streaming-app/assets/20380815/c82282e8-47ff-46a4-851b-bc86ace32239">
