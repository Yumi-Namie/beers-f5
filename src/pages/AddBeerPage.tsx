import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { Beer } from "../components/BeerCard";
import { useState } from 'react';


export const AddBeerPage = () => {
  const [beerForm, setBeerForm] = useState<Beer>({
    _id: '', 
    image_url: '',
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBeerForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('https://f5-beers-065cad3017be.herokuapp.com/beers/new', beerForm);
      // Success! Do something after successful creation
      console.log('Beer created successfully');
    } catch (error) {
      // Handle error
      console.error('Error creating beer:', error);
    }
  };

  return (
    <Container>
      <h1>Add Beer</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={beerForm.name} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tagline</Form.Label>
          <Form.Control type="text" name="tagline" value={beerForm.tagline} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={beerForm.description} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>First Brewed</Form.Label>
          <Form.Control type="text" name="first_brewed" value={beerForm.first_brewed} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Brewer's Tips</Form.Label>
          <Form.Control type="text" name="brewers_tips" value={beerForm.brewers_tips} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control type="number" name="attenuation_level" value={beerForm.attenuation_level} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Contributed By</Form.Label>
          <Form.Control type="text" name="contributed_by" value={beerForm.contributed_by} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image_url" value={beerForm.image_url} onChange={handleInputChange} />
        </Form.Group>

        <Button type="submit">Add Beer</Button>
      </Form>
    </Container>
  );
};