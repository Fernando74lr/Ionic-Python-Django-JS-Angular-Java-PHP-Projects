// Express
const express = require('express');
const app = express();
// Easy-FTP
const EasyFTP = require('easy-ftp')
const ftp = new EasyFTP()

var config = {
    host: 'ftp.sabblpq2020.net',
    port: 21,
    username: 'pedregal@lpqcpsistema.com',
    password: 'xAvz5uzk',
    type : 'ftp'
};

let response;

function uploadFile(url, id, filename) {
  
  // Connect to the server
  ftp.connect(config);
  
  // Upload file
  try {
    console.log("UPLOADING...");
    ftp.upload(url, "Test/"+filename, function(err) {
      if (err) {
        console.log('\nERROR :(\n');
        // throw err;
      } else {
        console.log("FILE UPLOADED ✅" + '\n');
      }
      ftp.close();
    });
  } catch (error) {
    console.log(error);
  }
  
}
// C:/Users/Fer/Desktop/Temporal/Bash-Cheat-Sheet.pdf
// C:\Users\Fer\Desktop\Temporal\Bash-Cheat-Sheet.pdf
// URL: {...}/urlparam?url_file=${URL_PARAM}}&id_caso=${ID_CASO}
app.post('/urlparam', (req, res) => {
  let result;
  // console.log(req.query.url_file);
  if (req.query) {
    let url = req.query.url_file;
    let id = req.query.id_caso;
    let filename = url.split('/').pop();
    console.log('\nURL: ' + url + '\nID: ' + id + '\nFILENAME: '+ filename + '\n');
    try {
      uploadFile(url, id, filename);
    } catch (error) {
      console.log('ERROR IN ROUTE\n' + error);
    }
  } else {
    response = "Something went wrong...";
  }
  // console.log(response);
  res.json({
    res: 'ok'
  });
  // res.send(req.query);
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});