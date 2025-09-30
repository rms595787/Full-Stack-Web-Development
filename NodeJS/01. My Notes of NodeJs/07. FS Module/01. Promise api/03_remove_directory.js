import * as fs from "fs/promises";
// Note
// if you want to delete any directory it must be clear 
// there must not be any file or folder inside of it, it should be empty

try{
    await fs.rmdir("/Users/rahulsh9956/Desktop/node js/basics");
}catch(error){
    console.log(error);
}
// after running this code you'll see that basics folder has been removed