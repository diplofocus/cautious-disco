import React, { useState } from 'react';
import {
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import Oprema from './Oprema';

const mockBackend = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));

const banke = [
  {
    value: 'sdfgsd',
    label: 'Tamo Neka Banka',
  },
  {
    value: 'sdfgsdqwer',
    label: 'Tamo Neka Druga Banka',
  },
  {
    value: 'sdfgsdqwerrere',
    label: 'Bajbolja banka',
  },
];

export const MySelect = ({ onChange, name, children, label }) => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select
      native
      onChange={onChange}
      inputProps={{
        name,
      }}
    >
      {children}
    </Select>
  </FormControl>
);

function MainForm() {
  const [state, setState] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleShowMore = () => setShowMore(x => !x);

  const onSubmit = () => {
    setLoading(true);
    mockBackend()
      /* .post('neka/ruta', state) */
      .then(() => {
        setLoading(false);
        // Whatever else needs to happen on success
      })
      .catch(err => {
        console.error(err);
        // Handle validation errors here
        setLoading(false);
      });
  };

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(currState => {
      const newState = {
        ...currState,
        [name]: name === 'brendiranje' ? !currState.brendiranje : value,
      };
      console.log(newState);
      return newState;
    });
  };
  return (
    <FormGroup onChange={onChange}>
      <TextField label="Naziv" name="naziv" />
      <TextField label="Poslovno ime" name="poslovno_ime" />
      <TextField label="Skraceno poslovno ime" name="skraceno_poslovno_ime" />
      <MySelect name="apr_status">
        <option value="aktivan">Aktivan</option>
        <option value="brisan">Brisan</option>
        <option value="odbijen">Odbijen</option>
        <option value="likvidacija">lIkViDaCiJa</option>
      </MySelect>
      <MySelect name="nbs_status">
        <option value="aktivan">Aktivan</option>
        <option value="u_blokadi">U Blokadi</option>
      </MySelect>
      <MySelect name="banka_za_pazar">
        {banke.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </MySelect>
      <TextField
        label="Bankovni racun za Pazar"
        name="bankovni_racun_za_pazar"
      />
      <TextField label="Banka za Proviziju" name="banka_za_proviziju" />
      <TextField
        label="Bankovni racun za Proviziju"
        name="bankovni_racun_za_proviziju"
      />
      <TextField label="Grupa zastupinka" name="grupa_zastupnika" />
      <TextField label="Pravna forma" name="pravna_forma" />
      <TextField label="Maticni broj" name="maticni_broj" />
      <TextField label="Datum osnivanja" name="datum_osnivanja" />
      <TextField label="Sifra delatnosti" name="sifra_delatnosti" />
      <TextField label="PIB" name="pib" />
      <TextField label="Telefon 1" name="telefon_1" />
      <TextField label="Telefon 2" name="telefon_2" />
      <TextField label="Email" name="email" />
      <TextField label="Zakonski zastupnik" name="zakonski_zastupnik" />
      <TextField
        label="Zakonski zastupnik JMBG"
        name="zakonski_zastupnik_jmbg"
      />
      <TextField label="Ostali zastupnici" name="ostali_zastupnici" />
      <TextField label="Clanovi" name="clanovi" />
      <TextField label="Kontakt osoba ime" name="kontakt_osoba_ime" />
      <TextField
        label="Kontakt osoba ime roditelja"
        name="kontakt_osoba_ime_roditelja"
      />
      <TextField label="Kontakt osoba prezime" name="kontakt_osoba_prezime" />
      <TextField label="Kontakt osoba JMBG" name="kontakt_osoba_jmbg" />
      <TextField label="Radno vreme od" name="radno_vreme_od" />
      <TextField label="Radno vreme do" name="radno_vreme_do" />
      <FormControlLabel
        control={<Checkbox />}
        label="Brendiranje"
        name="brendiranje"
      />
      <TextField label="Adresa" />
      <TextField label="Broj" />
      <TextField label="Grad" />
      {showMore && <Oprema />}
      <Button
        color="primary"
        onClick={onSubmit}
        variant="contained"
        style={{ marginTop: '3em' }}
        disabled={loading}
      >
        Sacuvaj
      </Button>
      <Button variant="contained" onClick={toggleShowMore}>
        Oprema
      </Button>
    </FormGroup>
  );
}

export default MainForm;
