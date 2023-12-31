import healthHeroe from '../health';


test.each([
    ['Warrior', 80, 'healthy'],
    ['Archer', 34, 'wounded'],
    ['Mag', 12, 'critical'],

])
('Heroe name is %s and health is %i', (typeHeroe, healthNumber, expected) => {
  const result = healthHeroe(typeHeroe, healthNumber);
  expect(result).toBe(expected);
});