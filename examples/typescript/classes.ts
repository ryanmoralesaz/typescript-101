class Student {
    // properties with access modifiers
    private id: number;
    public name: string;

    // constructor
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getDetails(): string {
        return `Student ID: ${this.id}, Name ${this.name}`;
    }
}

const student1 = new Student(101, "Jaime Montoya");

console.log(student1);