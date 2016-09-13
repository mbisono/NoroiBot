"use strict";
import {config} from './config';
import {getAccessToken} from './get-access-token';
import {getMyInfo} from './get-my-info';
getAccessToken().then(function (token) {
   return getMyInfo(token.access_token);
}).then(function (myInfo) {
   console.log(myInfo);
}).catch(function (err) {
   console.log(err);
});