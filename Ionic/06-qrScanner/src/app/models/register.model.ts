
export class Register {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.created = new Date();

        this.determineType();
    }

    private determineType() {
        const startText = this.text.substr(0,4);
        console.log('Type: ', startText);

        switch (startText) {
            case 'http': 
                this.type = 'http';
                this.icon = 'globe';
            break;
            case 'geo:': 
                this.type = 'http';
                this.icon = 'location';
            break;   
            default:
                this.type = 'Not recognized';
                this.icon = 'create';
            break;
        }
    }
}