// Express
const express = require('express');
const app = express();
// FTPS
const FtpModule = require('ftp');
// Downloader
const { DownloaderHelper } = require('node-downloader-helper');
// File System
const fs = require('fs').promises;

// FTP Server Credentials
const config = {
    host: '---',
    port: 21,
    user: '---',
    password: '---'
};

// Download File From URL
function downloadFile(url) {
    const download = new DownloaderHelper(url, __dirname);
    download.on('end', () => console.log('DOWNLOAD COMPLETED ✅'));
    download.start();
}

// Upload File to FTP Server
function uploadFile(filename) {
    const ftp = new FtpModule();
    ftp.connect(config);
    ftp.on('ready', function() {
        ftp.put(`${__dirname}/${filename}`, `Test/${filename}`, function(err) {
            if (err) throw err;
            else console.log("FILE UPLOADED ✅");
            ftp.end();
        });
    });
}

function deleteLocalFile(filename) {
    setTimeout(() => {
    fs.unlink(`${__dirname}/${filename}`)
        .then(console.log("FILE REMOVED ✅"))
        .catch(err => console.error('Something wrong happened removing the file', err));
    }, 4000);
}

// Just Print Data
function printData(url, id, filename) {
    console.log('\nURL: ' + url + '\nID: ' + id + '\nFILENAME: '+ filename + '\n');
}

// Route to uploadFile. Example: .../uploadFile?url_file=${URL_FILE}}&id_caso=${ID_CASO}
app.post('/uploadFile', async (req, res) => {
    let url;
    let id ;
    let filename;
    if (req.query) {
      url = req.query.url_file;
      id = req.query.id_caso;
      filename = url.split('/').pop();
      printData(url, id, filename);
      await downloadFile(url);
      await uploadFile(filename);
      await deleteLocalFile(filename);
      console.log('\n');
      res.json({
        res: 'ok',
        id: id,
        url: url,
        file: filename
      });
    } else {
        res.json({
        res: 'error :('
      });
    }
});

// Server PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));