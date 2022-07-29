let gp_store = null;


class Store
{
    constructor()
    {
        console.log( 'created: store' )
    }

    //
    static getStore()
    {
        if( gp_store == null )
        {
            gp_store = new Store();
        }

        return gp_store;
    }

    static setStore( store )
    {
        gp_store = store;
    }

}