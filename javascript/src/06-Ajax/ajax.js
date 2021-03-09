function ajax (url, type, data) {
    type = type.toUpperCase();
    if (type === 'GET') {
        // 参数数据拼接
        let dataStr = '?';
        Object.keys(data).forEach(key => {
            dataStr += `${key}=${data[key]}&`;
        });
        if (dataStr !== '') {
            dataStr = dataStr.slice(0, dataStr.lastIndexOf('&'));
            url += dataStr;
        }
    }
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let sendData = '';

        if (type === 'POST') {
            sendData = JSON.stringify(data);
        }

        xhr.open(type, url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(sendData);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let obj = xhr.response;
                    if (typeof obj !== 'object') {
                        obj = JSON.parse(obj);
                    }
                    resolve(obj);
                } else if (xhr.status.toString().match(/^3/)) {
                    reject(xhr);
                }
            }
        };
    });
}