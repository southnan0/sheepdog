const add = function (a, b) {
    let c, d, e
    try {
        c = a.toString().split('.')[1].length
    } catch (f) {
        c = 0
    }
    try {
        d = b.toString().split('.')[1].length
    } catch (f) {
        d = 0
    }

    e = Math.pow(10, Math.max(c, d));
    return (mul(a, e) + mul(b, e)) / e
}

const sub = function (a, b) {
    let c, d, e
    try {
        c = a.toString().split('.')[1].length
    } catch (f) {
        c = 0
    }
    try {
        d = b.toString().split('.')[1].length
    } catch (f) {
        d = 0
    }
    e = Math.pow(10, Math.max(c, d));

    return (mul(a, e) - mul(b, e)) / e;
}

const mul = function (a, b) {
    let c = 0,
        d = a.toString(),
        e = b.toString()
    try {
        c += d.split('.')[1].length
    } catch (f) {
    }
    try {
        c += e.split('.')[1].length
    } catch (f) {
    }

    return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

const div = function (a, b) {
    let c, d, e = 0,
        f = 0
    try {
        e = a.toString().split('.')[1].length
    } catch (g) {
    }
    try {
        f = b.toString().split('.')[1].length
    } catch (g) {
    }
    c = Number(a.toString().replace('.', ''));
    d = Number(b.toString().replace('.', ''));

    return mul(c / d, Math.pow(10, f - e));
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
