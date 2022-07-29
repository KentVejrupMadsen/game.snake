class Snake
{
    constructor()
    {
        this.position = new PositionVector();
        this.movement = new Vector();

    }


    get Movement()
    {
        this.movement;
    }

    set Movement( value )
    {
        this.movement = value;
    }

    get Position()
    {
        return this.position;
    }

    set Position(value)
    {
        this.position = value;
    }
}