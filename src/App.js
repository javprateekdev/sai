import logo from './logo.svg';
import Grid from '@mui/material/Grid';
import Header from './Header';
import Banner from './Banner';
import Sidebar from './Sidebar';
import NewBhajan from './NewBhajan';
import Allbhajan from './Allbhajan';
import Gallery from './Gallery';
import Aboutus from './Aboutus';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Grid container spacing={3}>
       <Grid item xs={12}>
       <Header />
        </Grid>
        <Grid item xs={9}>
        <Banner />
        </Grid>
        <Grid item xs={3}>
         <Sidebar />
        </Grid>
        <Grid item xs={9}>
         <NewBhajan />
        </Grid>
        <Grid item xs={9}>
        <Allbhajan />
        </Grid>
        <Grid item xs={9}>
        <Gallery />
        </Grid>
        <Grid item xs={9}>
        <Aboutus />
        </Grid>
        <Grid item xs={9}>
        <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
