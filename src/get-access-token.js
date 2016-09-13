"use strict";
import {config} from './config';
import https from 'https';
import Promise from 'bluebird';
import querystring from 'querystring';
const requesPath = '/api/v1/access_token';

export function getAccessToken() {
   return new Promise(function (resolve, reject) {
      const auth = new Buffer(config.clientId + ':' + config.clientSecret).toString('base64');

      const postData = querystring.stringify({
         grant_type: 'password',
         username: config.username,
         password: config.password
      });
      const postOptions = {
         method: 'POST',
         hostname: config.apiUrl,
         port: config.apiPort,
         path: requesPath,
         headers: {
            'Authorization': 'Basic ' + auth
         }
      };

      const req = https.request(postOptions, (res) => {
         const data = [];
         res.setEncoding('utf8');
         res.on('data', (chunk) => {
            data.push(chunk);
         });
         res.on('end', () => {
            if (res.statusCode === 200) {
               const response = JSON.parse(data.join(''));
               resolve(response);
            }
         });
      });

      req.on('error', (err) => {
         reject(err);
      });

      req.write(postData);

      req.end();

   });
}