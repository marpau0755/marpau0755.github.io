const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images', 'logos');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const projects = [
    { name: 'drivelogs', domain: 'drivelogsusa.com' },
    { name: 'dinnerroll', domain: 'dinnerroll.app' },
    { name: 'tophundred', domain: 'tophundred.web.app' },
    { name: 'dailyscramble', domain: 'dailyscramble.web.app' },
    { name: 'worldofjokesai', domain: 'worldofjokesai.web.app' },
    { name: 'eleganceva', domain: 'eleganceva.web.app' },
    { name: 'crossholdem', domain: 'crossholdem.web.app' },
    { name: 'theepiccapsule', domain: 'theepiccapsule.web.app' }
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                download(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function main() {
    for (const project of projects) {
        const url = `https://www.google.com/s2/favicons?domain=${project.domain}&sz=128`;
        const dest = path.join(dir, `${project.name}.png`);
        console.log(`Downloading ${project.name} from ${url}`);
        try {
            await download(url, dest);
            console.log(`Downloaded ${project.name}.png`);
        } catch (e) {
            console.error(`Failed for ${project.name}:`, e);
        }
    }
}

main();
