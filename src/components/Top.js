
import './Top.css'
import Table from './Table'
// import Table from './Table.js'
function Top(){
    return(
        <div className="topMain">
            <div className="supContainer">
                <div className="wrapAlbumDesc">
                <div className="bigAlbum"/>
                <div className="topDescription">
                    <h2>Nome del brano (Anno del disco)</h2>
                    <h4>Artista</h4>
                    <h4>nome dell'album</h4>
                    <ul>
                        <i className="fa fa-play "><li className="mr-2">Play All</li></i>
                        <i className="fa fa-plus "><li className="mr-2">Aggiungi alla Playlist</li></i>
                        <i className="fa fa-minus "><li className="mr-2">Rimuovi dalla Playlist</li></i>
                        <i className="fa fa-ellipsis-v iconTre"></i>
                    </ul>
                </div>
                </div>
            </div>
            <Table/>
        </div>
        

    );
}
export default Top;