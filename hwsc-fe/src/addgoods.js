/*
 * @Author: your name
 * @Date: 2019-09-23 15:16:23
 * @LastEditTime: 2019-09-25 16:56:55
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
