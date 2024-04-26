function curriedAdd(total) {

    let sum = total || 0;

    if (total === undefined) { return sum; }

    return function add(num) {
        if (num === undefined) {
            return sum;
        }
        sum += num
        return add
    }

}

module.exports = { curriedAdd };
