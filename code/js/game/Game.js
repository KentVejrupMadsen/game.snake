class Game
{
    constructor()
    {
        this.player = new Snake();
        this.foods = Array();
    }

    get Player()
    {
        return this.player;
    }

    set Player( value )
    {
        this.player = value;
    }

    get Foods()
    {
        return this.foods;
    }

    set Foods( value )
    {
        this.foods = value;
    }
}