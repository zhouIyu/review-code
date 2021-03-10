import isEqual from './isEqual';

describe('测试isEqual', function () {
    it('测试两个相等的值类型返回true', function () {
        const a = 'a';
        const b = 'a';
        expect(isEqual(a, b)).toBeTruthy();
    });

    it('测试两个不相等的值类型返回false', function () {
        const a = 'a';
        const b = 10;
        expect(isEqual(a, b)).toBeFalsy();
    });

    it('测试两个不相同长度的数组返回false', function () {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [1, 2, 3];
        expect(isEqual(arr1, arr2)).toBeFalsy();
    });

    it('测试两个相同长度不同值的数组返回false', function () {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [1, 2, 3, 5];
        expect(isEqual(arr1, arr2)).toBeFalsy();
    });

    it('测试两个相同长度x想同值的数组返回true', function () {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [1, 2, 3, 4];
        expect(isEqual(arr1, arr2)).toBeTruthy();
    });

    it('测试同一个对象返回true', function () {
        const obj1 = {
            a: 1,
            b: [1, 2, 3],
            c: {
                x: 1,
                y: 2
            }
        };
        expect(isEqual(obj1, obj1)).toBeTruthy();
    });
});