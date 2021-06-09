const multer = require('multer');

//handle file uploads
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/public/assets/images/posts');
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split('/')[1];
    cb(null, `post-${req.user.id}-${Date.now()}.${extension}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image. Please upload only images.'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPostImages = upload.array('photos', 8);

exports.uploadAvatar = upload.single('avatar');
