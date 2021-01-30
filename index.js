//const roundTo = require('round-to');
function roundTo(number, precision) {
    let exponent;
    [number, exponent] = `${number}e`.split('e');
    let result = Math.round(`${number}e${Number(exponent) + precision}`);

    [number, exponent] = `${result}e`.split('e');
    result = Number(`${number}e${Number(exponent) - precision}`);

    return result;
}

function to_decimal(value, precision = 9) {
    //将度、分、秒坐标转换为十进制等效值。
    var r = /(\d+)[°:](\d+)[′:']([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)?[″']?/;
    var dms = value.match(r);
    var d = Number(dms[1]);
    var m = Number(dms[2]);
    var s = dms[3] ? Number(dms[3]) : 0;
    var decimal = d + m / 60 + s / 3600
    return roundTo(decimal, precision);
}

function to_dm(coordinate, precision = 5) {
    //将坐标转换为度，分
    //to_dm(coordinate,precision)
    var d = parseInt(coordinate);
    var m = roundTo((coordinate - d) * 60, precision);
    var result = {
        d, m
    };
    var result_str = `${result['d']}°${result['m']}′`;
    return result_str;

}

function to_dms(coordinate, precision = 5) {
    //将坐标转换为度，分，秒。
    //to_dms(coordinate,precision)
    var d = parseInt(coordinate);
    var m = parseInt((coordinate - d) * 60);
    var s = roundTo(((coordinate - d) * 60 - m) * 60, precision);
    var result = {
        d, m, s
    };
    var result_str = `${result['d']}°${result['m']}′${result['s']}″`;
    return result_str;
}

module.exports = { to_decimal, to_dm, to_dms };
