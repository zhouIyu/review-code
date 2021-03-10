// 获取当前页面url参数
function query1 (name) {
    const search = location.search.slice(1);
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const res = search.match(reg);
    if (res == null) {
        return null;
    }

    return res[2];
}

function query2 (name) {
    const search = location.search;
    const q = new URLSearchParams(search);
    return q.get(name);
}

function queryToQuery1 () {
    const res = {};
    const search = location.search.slice(1);
    search.split('&').forEach(item => {
        const list = item.split('=');
        res[list[0]] = list[1];
    });
    return res;
}

function queryToObject2 () {
    const search = location.search;
    const list = new URLSearchParams(search);
    const res = {};
    list.forEach((value, key) => {
        res[key] = value;
    });
    return res;
}