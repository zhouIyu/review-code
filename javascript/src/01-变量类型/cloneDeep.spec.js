import cloneDeep from './cloneDeep';

describe('深拷贝', () => {
    const origin = {
        name: '小明',
        age: 26,
        address: {
            province: '北京市',
            city: '北京',
            area: '朝阳区'
        }
    };

    it('值变量应该直接返回', function () {
        const name = 'zhouzhuang';
        const result = cloneDeep(name);
        expect(result).toEqual(name);
    });

    it('origin的age应该改变', function () {
        const result = origin;
        result.age = 30;
        expect(origin.age).toBe(30);
        expect(origin).toEqual(result);
    });

    it('origin的age不应该改变', function () {
        origin.age = 26;
        const result = cloneDeep(origin);
        result.age = 31;
        expect(origin.age).toBe(26);
        expect(origin).not.toEqual(result);
    });
});