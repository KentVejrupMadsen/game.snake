class Package
{
    constructor( identity, packageKey )
    {
        this.id = identity;
        this.key = packageKey;
    }

    get Identity()
    {
        return this.id;
    }

    set Identity( value )
    {
        this.id = value;
    }

    get Key()
    {
        return this.key;
    }

    set Key( value )
    {
        this.key = value;
    }
}