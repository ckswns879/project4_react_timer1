import './My.css';

function Mytime(){
    return(
        <div className='mytime'>
        {new Date().toLocaleTimeString()} 
        </div>
            
        
    );
}

export default Mytime;