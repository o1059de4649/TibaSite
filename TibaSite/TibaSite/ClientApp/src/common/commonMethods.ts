import 'bootstrap/dist/css/bootstrap.css';

export class CommonMethods {


    constructor() {
        
    }


}

// POST メソッドの実装の例
export async function postData(url = '', data = {}) {
    // 既定のオプションには * が付いています
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
    return response.json(); // レスポンスの JSON を解析
}

// GET メソッドの実装の例
export async function getData(controller = '', aciton = '', otherPath = '') {
    /*const response = await fetch('weatherforecast');*/
    const response = await fetch(controller + '/' + aciton + otherPath);
    const data = await response.json();
    return data;
}


