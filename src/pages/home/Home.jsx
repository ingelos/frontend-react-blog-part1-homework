import Billboard from '../../assets/billboard-logo.png'
import './Home.css';

function Home() {


    return (
        <>
            <section className='home-section outer-container'>
                <div className='inner-container'>
                    <h1>Bij Blogventure geloven we in de kracht van woorden *</h1>
                    <figure>
                        <img className='billboard-logo' src={Billboard} alt='Afbeelding van een schreeuwerig billboard' />
                        <figcaption>* En in billboards. Die zijn niet te missen namelijk.</figcaption>
                    </figure>
            </div>
            </section>
        </>
    );
}

export default Home;