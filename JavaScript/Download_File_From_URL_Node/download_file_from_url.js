const url = 'http://www.cheat-sheets.org/saved-copy/django_reference_sheet.pdf';
const url2 = 'https://education.github.com/git-cheat-sheet-education.pdf';
const url3 = 'https://ubuntu-maryland.org/presentations/reference_bash-cheat.pdf';

// Dependency: npm i node-downloader-helper

const { DownloaderHelper } = require('node-downloader-helper');

const download = new DownloaderHelper(url3, __dirname);
download.on('end', () => console.log('Download Completed'))
download.start();
