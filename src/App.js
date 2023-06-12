import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:'column', width:'100%', margin:'0 auto', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
      <div style={{display:'flex', marginBottom:'100px', alignItems:'center', justifyContent:'center'}}>
      
      <p style={{color:"white", marginRight:'20px'}}>Full State: </p>
      <Button
      variant='primary'
      children='Button CTA'
      style={{marginRight:'130px'}}
      />

      <Button
      variant ='secondary'
      children='Button CTA'
      />
      </div>


      <div style={{display:'flex',marginBottom:'100px', alignItems:'center', justifyContent:'center'}}>
      <p style={{color:"white", marginRight:'20px'}}>Hover State: </p>
      <Button
      variant='primary hover'
      children='Button CTA'
      style={{marginRight:'130px'}}
      />

      <Button
      variant ='secondary hover'
      children='Button CTA'
      />
      </div>


      <div style={{display:'flex', marginBottom:'100px',  alignItems:'center', justifyContent:'center'}}>
      <p style={{color:"white", marginRight:'20px'}}>Focused State: </p>
      <Button
      variant='primary focused'
      children='Button CTA'
      style={{marginRight:'130px'}}
      />

      <Button
      variant ='secondary focused'
      children='Button CTA'
      />
      </div>



      <div style={{display:'flex', marginBottom:'100px',  alignItems:'center', justifyContent:'center'}}>
      <p style={{color:"white", marginRight:'20px'}}>Disabled State: </p>
      <Button
      variant='primary disabled'
      children='Button CTA'
      style={{marginRight:'130px'}}
      />

      <Button
      variant ='secondary disabled'
      children='Button CTA'
      />
      </div>
    </div>
  );
}

export default App;
