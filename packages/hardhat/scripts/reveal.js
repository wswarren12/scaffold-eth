const AWS = require('aws-sdk');
AWS.config.update({
  credentials: new AWS.Credentials() // todo credential parameters
});
AWS.config.setPromisesDependency(require('bluebird'));
const s3 = new AWS.S3();


const bucketName = 'bucketName';        // example bucket
const revealMetadata = 'revealMetadata.json'
const folderToMove = 'folderToMove/';   // old folder name
const destinationFolder = 'destinationFolder/'; // new destination folder 

try {
  
  const meta = await s3.getObject({
    Bucket: bucketName,
    Key: revealMetadata
  }).promise()
  
  console.log({meta})
  

    // const listObjectsResponse = await s3.listObjects({
    //     Bucket: bucketName,
    //     Prefix: folderToMove,
    //     Delimiter: '/',
    // }).promise();

    // const folderContentInfo = listObjectsResponse.Contents;
    // const folderPrefix = listObjectsResponse.Prefix;

    // await Promise.all(
    //   folderContentInfo.map(async (fileInfo) => {
    //     await s3.copyObject({
    //       Bucket: bucketName,
    //       CopySource: `${bucketName}/${fileInfo.Key}`,  // old file Key
    //       Key: `${destinationFolder}/${fileInfo.Key.replace(folderPrefix, '')}`, // new file Key
    //     }).promise();
    
    //     await s3.deleteObject({
    //       Bucket: bucketName,
    //       Key: fileInfo.Key,
    //     }).promise();
    //   })
    // );
} catch (err) {
  console.error(err); // error handling
}