import myNew from './myNew';

describe('new 的实现', () => {
    function Person (name, age) {
        this.name = name;
        this.age = age;

        this.sayHi = () => {
            return (this.name + ': say hi!' + 'my age is ' + this.age);
        };
    }

    const p = myNew(Person, '小明', 26);
    it('prototype is Person', () => {
        expect(p.__proto__).toBe(Person.prototype);
    });

    it('打印 小明: say hi!my age is 26', () => {
        expect(p.sayHi()).toBe('小明: say hi!my age is 26');
    });
});