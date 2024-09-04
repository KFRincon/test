type Test = {
    id: string;
    name: string;
    age: number;
    createdAt: Date;
    active: boolean;
};

function initializeObject<T>(keys: Array<keyof T>): T {
    const obj: Partial<Record<keyof T, any>> = {};

    keys.forEach(key => {
        switch (key) {
            case 'id':
            case 'name':
                obj[key] = '';
                break;
            case 'age':
                obj[key] = 0;
                break;
            case 'createdAt':
                obj[key] = new Date();
                break;
            case 'active':
                obj[key] = false;
                break;
            default:
                obj[key] = null;
        }
    });

    return obj as T;
}

const testKeys: Array<keyof Test> = ['id', 'name', 'age', 'createdAt', 'active'];
const test: Test = initializeObject<Test>(testKeys);

console.log(test);
// { id: '', name: '', age: 0, createdAt: new Date(), active: false }
