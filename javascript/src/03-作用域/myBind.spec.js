describe('手写bind', function () {
    function fn1 () {
        return this;
    }

    it('this 应该相同', function () {
        require('./myBind');
        const fn2 = fn1.bind({ x: 100 });
        const fn3 = fn1.myBind({ x: 100 });
        expect(fn2()).toStrictEqual(fn3());
    });
});