const { default: axios } = require("axios");

//! Charlie: Code Starts Here ->
const atob = (base64) => JSON.parse(Buffer.from(base64, 'base64').toString());
const between = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

async function getBufferFromUrl(url) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(response.data, 'utf-8');
}

// Timestamping
const timestamp = Date.now();
const width = between(800, 2582);
const height = Math.round(width * 1.75);
const getTopLevel = (time) => {
    return {
        st: between(100, 400),
        sc: {
            availWidth: width,
            availHeight: height,
            width,
            height,
            colorDepth: 24,
            pixelDepth: 24,
            availLeft: 0,
            availTop: 0,
        },
        nv: {
            vendorSub: '',
            productSub: '20030107',
            vendor: 'Google Inc.',
            maxTouchPoints: 5,
            hardwareConcurrency: 8,
            cookieEnabled: true,
            appCodeName: 'Mozilla',
            appName: 'Netscape',
            appVersion: '"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            platform: 'Linux i686',
            product: 'Gecko',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            language: 'en-US',
            languages: ['en-US'],
            online: true,
            doNotTrack: null,
            geoLocation: {},
            mediaCapabilities: {},
            connection: {},
            webkitTemporaryStorage: {},
            webkitPersistentStorage: {},
            userActivation: {},
            deviceMemory: between(4, 32),
            clipboard: {},
            credentials: {},
            keyboard: {},
            locks: {},
            mediaDevices: {},
            serviceWorker: {},
            storage: {},
            contacts: {},
            bluetooth: {},
            usb: {},
            plugins: [],
        },
        dr: '',
        inv: true,
        exec: true,
        wn: [[width, height, 1, time - 5]],
        'wn-mp': 0,
        xy: [[0, 0, 1, time - 5]],
        'xy-mp': 0,
    };
};

const timestamp2 = Date.now();
//! Charlie: touches are the corrected data patterns for the captcha
const touches = [
    [46.26829147338867, 172.0126953125],
    [248.4447021484375, 149.47274780273438],
    [159.7191162109375, 242.9304504394531],
    [267.34521484375, 348.3852233886719],
    [280.0733337402344, 460.7474060058594],
    [37.54315185546875, 250.9284973144531],
    [239.7075958251953, 368.38037109375],
    [230.982421875, 140.3840637207031],
    [293.89215087890625, 296.3719482421875],
    [293.89215087890625, 454.9306640625],
];

const motion = {
    motionData: JSON.stringify({
        st: timestamp2,
        dct: timestamp2 + 3,
        ts: touches.map((x, i) => [[0, ...x], timestamp2 + 19900 + i * 900]),
        'ts-mp': 830,
        te: touches.map((x, i) => [[0, ...x], timestamp2 + 19990 + i * 900]),
        'te-mp': 828.5555555555555,
        mm: touches.map((x, i) => [...x.map(Math.floor), timestamp2 + 20000 + i * 900]),
        'mm-mp': 829.4444444444445,
        md: touches.map((x, i) => [...x.map(Math.floor), timestamp2 + 20002 + i * 900]),
        'md-mp': 829.2222222222222,
        mu: touches.map((x, i) => [...x.map(Math.floor), timestamp2 + 20004 + i * 900]),
        'mu-mp': 830.4444444444445,
        topLevel: getTopLevel(timestamp2),
        v: 1,
    })
};
console.log(motion);