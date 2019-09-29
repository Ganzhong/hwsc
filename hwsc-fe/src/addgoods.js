/*
 * @Author: your name
 * @Date: 2019-09-23 15:16:23
 * @LastEditTime: 2019-09-27 11:57:35
 * @LastEditors: Please set LastEditors
 */
const jwt = require('jsonwebtoken');
let addressStr = localStorage.getItem('goods_list');
let addr_list = [];
if (addressStr) {
    try {
        addr_list = JSON.parse(addressStr);
    } catch (err) {
        addr_list = [];
    }
}
export const address_list = addr_list;
export function addAddress(address) {
    address_list.push(address)
    localStorage.setItem('goods_list', JSON.stringify(address_list))
}

let addressStr2 = localStorage.getItem('goods_list_fujia');
let addr_list2 = [];
if (addressStr2) {
    try {
        addr_list2 = JSON.parse(addressStr2);
    } catch (err) {
        addr_list2 = [];
    }
}
export const address_list2 = addr_list2;
export function addAddress2(address) {
    address_list2.push(address)
    localStorage.setItem('goods_list_fujia', JSON.stringify(address_list2))
}


export function choice_Address(address) {

    localStorage.setItem('current_address', JSON.stringify(address))
}


export function currentAddress() {
    let addr_str = localStorage.getItem('current_address');
    if (addr_str) {
        try {
            return JSON.parse(addr_str);
        } catch (err) {
            return null;
        }
    }
    return null;
}
export function gettoken(mtoken) { 
    let obj;
    jwt.verify(mtoken, "abcdef", async function (err, user) { 
     
        if (err) {
            return false;
        }
        obj = user
    })
    return obj;
}
