const mime = require('mime');
module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    const filename = context.bindingData.name; // Get the name of the uploaded file
    const fileType = mime.getType(filename);
    context.log(fileType);
    context.done;

};