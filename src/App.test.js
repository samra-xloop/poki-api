import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  const mockData={
    "name": "charmander",
    "id": 4,
    "height": 6,
    "weight": 85,
    "abilities": [
      {
      "ability": {
      "name": "blaze",
      "url": "https://pokeapi.co/api/v2/ability/66/"
      },
      "is_hidden": false,
      "slot": 1
      },
      {
      "ability": {
      "name": "solar-power",
      "url": "https://pokeapi.co/api/v2/ability/94/"
      },
      "is_hidden": true,
      "slot": 3
      }
      ],
      "sprites": {
        "home": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
          
          }
      }

  }

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
