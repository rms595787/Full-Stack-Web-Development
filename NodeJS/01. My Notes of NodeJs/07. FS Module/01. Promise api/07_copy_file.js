import * as fs from "fs/promises";

// Copy File - here we will copy data from one file and then create new file and place copied content in that new file

// Note
// if you already have that file present in the folder, the text present in file will be replaced with the copied text 
// so make sure that choose the file name correctly so you don't loose data while copying
try{
    await fs.copyFile("readme.md","info.txt");
}catch(error){
    console.log(error);
}
