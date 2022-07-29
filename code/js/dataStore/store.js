let gpStore = null;


class Store
{
    constructor()
    {
        console.log( 'created: dataStore' );

        this.packages = Array();

    }


    make( key )
    {
        let sizeOf = this.packages.length;
        let newPackage = new Package( sizeOf, key );

        this.packages.push( newPackage );
    }

    // Accessors
    get Packages()
    {
        return this.packages;
    }

    set Packages( array )
    {
        this.packages = array;
    }

    // global
    static getStore()
    {
        if( gpStore == null )
        {
            gpStore = new Store();
        }

        return gpStore;
    }

    static setStore( store )
    {
        gpStore = store;
    }

}