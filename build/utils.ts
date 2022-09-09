export function relativeDir(relative:string, absolute:string) {
    let rela = relative.split('/');
    rela.shift();
    let abso = absolute.split('/');
    abso.shift();
    let num = 0;
    for (let i = 0; i < rela.length; i++) {
        if(rela[i] === abso[i]) {
            num++;
        } else {
            break;
        }
    }
    rela.splice(0, num);
    abso.splice(0, num);
    let str = '';
    for (let j = 0;j < abso.length - 1; j++) {
        str += '../';
    }
    if (!str) {
        str += './';
    }
    str += rela.join('/');
    return str;
}
