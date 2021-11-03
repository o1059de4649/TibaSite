import 'bootstrap/dist/css/bootstrap.css';

export class CommonMethods {


    constructor() {
        
    }


}

// POST ���\�b�h�̎����̗�
export async function postData(url = '', data = {}) {
    // ����̃I�v�V�����ɂ� * ���t���Ă��܂�
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
        body: JSON.stringify(data) // �{���̃f�[�^�^�� "Content-Type" �w�b�_�[�ƈ�v����K�v������܂�
    })
    return response.json(); // ���X�|���X�� JSON �����
}

// GET ���\�b�h�̎����̗�
export async function getData(controller = '', aciton = '', otherPath = '') {
    /*const response = await fetch('weatherforecast');*/
    const response = await fetch(controller + '/' + aciton + otherPath);
    const data = await response.json();
    return data;
}


