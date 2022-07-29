class Package
{
    constructor( identity, packageKey )
    {
        this.id = identity;
        this.key = packageKey;

        this.storage = Array();
    }

    get Identity()
    {
        return this.id;
    }

    set Identity( value )
    {
        this.id = value;
    }

    get Storage()
    {
        return this.storage;
    }

    set Storage( value )
    {
        this.storage = value;
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