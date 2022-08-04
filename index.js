function password(get_password){
    
let cont = /.[,!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
        if(get_password.match(/.[@,#*]/)  && get_password.length >= 6  ){
        // console.log("strong pass");
               return true;
        }
        return false;
      
    }

    

console.log(password("womr@e"));




   