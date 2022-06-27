# Getting Started 

For Setup App

  # yarn install
   
   Install all the dependencies listed within package.json in the local node_modules folder.

  # yarn start
  
  Run your project on localhost


 # Getting Started With Folder Structure

   1) component

      Create all component in component folder

         Folder structure should be like:-
            
            --component (directory)
               |   
                --auth   (directory)
                   |
                    --Auth.tsx  (component file)
    
    2) constant

       Define constant in this folder like:-
         
          --constant (directory)
               |   
                --authconstant   (directory)
                   |
                    --Authconstant.ts  (constant file)

    3) firestor

       use this directory if you want to use firebase as backend or other firebase services          

        Folder structure should be like:-
            
            --firestor (directory)
               |   
                --authuser   (directory)
                   |
                    --Auth.ts  (file)  

    4) hooks

       create custom hook in this  directory

    5) images

       All static app images

    6) services

        Declear All type of API's here

         Folder structure should be like:-
            
            --services (directory)
               |   
                --authservices   (directory)
                   |
                    --Auth.ts  (services file)

    7) State

       State is use for Redux

             --> action-creators

                All action method handel in action-creators folder and dispatch data to redux

             --> action-type
               
                Define action type here and use in reducer and action-creators
            
             --> actions
              
                Define actions type and use in reducer and dispatch

             --> reducers

               Set initial data for redux and mentain cases for action type

    8) type

           declare data type here
