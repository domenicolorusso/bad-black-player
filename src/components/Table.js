
import './Table.css'

function Table(){

    const artisti = [
        {titoloCanzone:'Nothing Else Matters',artista:'Metallica', minuti:'3.04' },
        {titoloCanzone:'Piripicchio',artista:'Giovannello', minuti:'4.04' },
        {titoloCanzone:'Cavatappi',artista:'Melchiorre', minuti:'6.04' },
        {titoloCanzone:'Clavicembalo',artista:'Patunia', minuti:'2.00' },
        
    ]
    {/* {artisti.map(el =>(
        <ul>
        <li>{el.titoloCanzone}</li>
        <li>{el.artista}</li>
        <li>{el.minuti}</li>
        </ul>
    ))}
*/}

    return(
        <div className="tableMain">
           <div className="tableIntern">
               <table>
                   <thead>
                           <tr>
                               <td>#</td>
                               <td><strong>titolo brano</strong></td>
                               <td><strong>artista</strong></td>
                               <td><strong>minuti</strong></td>
                           </tr>
                   </thead>
                    <tbody>
                        {artisti.map((el, index) =>{
                            return(
                            <tr className="rowStyle">
                                
                                <td>{index+1 + '.'}</td>
                                <td>{el.titoloCanzone}</td>
                                <td>{el.artista}</td>
                                <td>{el.minuti}</td>
                                <button className="rowButton">impostazioni</button>
                            </tr>
                            );
                        })}
                   </tbody>
               </table>
           </div> 
        </div>

    );
}
export default Table;