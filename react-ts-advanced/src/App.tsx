import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import { useRef } from 'react';
import Form from './components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);
  function handleSave (data:unknown){
    const exctractedData= data as {name: string, age: string}
    console.log(exctractedData);
  }
  return (
    <main>

      <Input label="test" id="test" ref={input}/>

      {/* POLYMORPHIC COMPONENT 
        pengembangan antarmuka pengguna (user interface - UI) yang memungkinkan komponen untuk 
        berubah atau menyesuaikan elemen HTML dasar yang mereka gunakan untuk render berdasarkan kebutuhan*/}
      <Container as={Button}>Tekan Ini</Container>

      {/* TYPE PREDICATS AND FACING
        memberikan petunjuk kepada compiler tentang jenis tipe dalam situasi tertentu, 
        khususnya setelah melakukan pengecekan tipe. */}
      <p>
        <Button target=''>Sebuah Tombol</Button>
      </p>
      <p>
        <Button href='https://google.com'>Sebuah Link</Button>
      </p>

      {/* WRAPPER COMPONENTS, 
        Komponen pembungkus ini digunakan untuk mengelilingi komponen lain 
        dengan tujuan tertentu tanpa mengubah konten atau perilaku internal 
        dari komponen yang dibungkus tersebut.  */}
      {/* <Input id="name" label="Masukan Namamu" type='text' />
      <Input id="age" label="Masukan Umurmu" type='number' /> */}

      <Form>
        <Input id="name" label="Masukan Namamu" type='text' />
        <Input id="age" label="Masukan Umurmu" type='number' />
        <p>
          <Button>Simpan</Button>
        </p>
      </Form>

    </main>
  );
}

export default App;