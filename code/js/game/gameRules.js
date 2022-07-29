class GameRules
{
    constructor()
    {
        this.player = new Snake();
    }

    get Player()
    {
        return this.player;
    }

    set Player( value )
    {
        this.player = value;
    }
}