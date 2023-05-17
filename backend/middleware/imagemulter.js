const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./backend/public/image')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})
var upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        console.log("file",file);
        if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/apng' || file.mimetype == 'image/gif' || file.mimetype == 'image/avif' || file.mimetype == 'image/svg+xml' || file.mimetype == 'image/webp'){
            cb(null,true)
        }
        else{
            cb(null,false)
            return cb(new Error('only jpg or png are allowed'));
        }
    }
})
module.exports = upload