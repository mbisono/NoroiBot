"use strict";
import {config} from './config';
import https from 'https';
import Promise from 'bluebird';
const requestPath = '/api/v1/me';

export function getMyInfo(accessToken) {
   return new Promise(function (resolve, reject) {
      const options = {
         method: 'GET',
         hostname: 'oauth.reddit.com',
         port: config.apiPort,
         path: requestPath,
         headers: {
            'Authorization': 'bearer ' + accessToken,
            'User-Agent': config.userAgent
         }
      };

      const req = https.request(options, (res) => {
         const data = [];

         res.on('data', (chunk) => {
            data.push(chunk);
         });

         res.on('end', ()=> {
            if (res.statusCode === 200) {
               const response = JSON.parse(data.join(''));
               response._headers = res.headers;
               resolve(response);
            }
         });
      });

      req.on('error', (err) => {
         reject(err);
      });

      req.end();
   });
}