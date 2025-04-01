
import {theme} from '../screens/BottomTabScreens/SettingsScreen'
// const Theme = true;

const dark = require('../assets/logo.png');
const light = require('../assets/default.png');



const backgroundColor = theme ? '#DDDDDD' : '#222222';
const textColor = theme ? '#323232' : '#DDDDDD';
const icon =  theme ? dark : light;
const linkColor = theme ? '#004400':'#00DD00';
const ligh_bg = theme ? '#CCCCCC' : '#444444'


export const lit_bg_color =  ligh_bg;
export const IconImg = icon;
export const lnColor = linkColor;
export const fgColor = textColor;
export const bgColor = backgroundColor;
export const btnColor = '#009900';
export const paginationColor = '#00DD00';
export const chatColor = '#339922';
export const settingBtn = '#DDEEDD';