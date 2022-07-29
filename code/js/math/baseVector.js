class BaseVector
{
    constructor(X, Y)
    {
        this.x = X;
        this.y = Y;
    }

    get X()
    {
        return this.x;
    }

    set X( value )
    {
        this.x = value;
    }

    get Y()
    {
        return this.y;
    }

    set Y( value )
    {
        this.y = value;
    }
}