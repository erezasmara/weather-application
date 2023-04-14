
# Weather Web Application
Project tree structure:
```
weather-application
├─ package-lock.json
├─ package.json
├─ public
│  ├─ css
│  │  └─ style.css
│  ├─ img
│  │  ├─ profile_pic.jpeg
│  │  └─ weather.png
│  └─ js
│     └─ app.js
├─ src
│  ├─ app.js
│  └─ utils
│     └─ weather.js
└─ templates
   ├─ .DS_Store
   ├─ partials
   │  ├─ footer.hbs
   │  └─ header.hbs
   └─ views
      ├─ 404.hbs
      ├─ about.hbs
      ├─ help.hbs
      └─ index.hbs
```

Description:
Weather forecast web application, by inserting the address the server application will return the current forecast for the provided address 

Requirement:
- Node.js 12 +
- express.js
- handle bars

Start the project:
 - npm install
 - init yours weatherstack api key (on ./src/utils/weather.js file)
 - npm run start

pictures:
![](https://user-images.githubusercontent.com/33747218/137765528-33336a8e-1b84-4d84-a39f-7f3e4f1c5ff5.png)
