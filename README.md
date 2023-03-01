#    here the frontend folder is completly outside .
folder structure is follow as 

frontend |--> public -->index.html
         |--> src 
               |--> api --> index.js
               |              
               |--> components
               |           |-->chathistory
               |                        |--> Chathistory.jsx
               |                        |--> chathistory.scss
               |           |-->chatinput
               |                        |--> ChatInput.jsx
               |                        |--> ChatInput.scss
               |           |-->Header
               |                     |-->Header.jsx
               |                     |-->Header.scss
               |           |-->Message
               |                     |-->Message.jsx
               |                     |-->Message.scss
               |
               |--> App.css 
               |--> App.js
               |--> Index.js
               |--> Index.css
               |--> package.json
               |--> package.lock.json
               |--> README.md
                           
 Run backend --> cd backend --> go run main.go
 Run frnontend --> cd frontend --> npm start
 
